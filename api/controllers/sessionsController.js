const jwt = require('jsonwebtoken');

const UserModule = require('../models/User');
const User = UserModule.default || UserModule;

const AssessmentSession = require('../models/AssessmentSession');

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    if (!authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No auth token provided' });
    }

    const token = authHeader.slice(7);

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      console.error('JWT verify error (sessions):', err);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    const userId = decoded.id || decoded._id;
    const user = await User.findById(userId).select('-password');

    if (!user) return res.status(401).json({ message: 'User not found' });

    req.user = user;
    next();
  } catch (err) {
    console.error('Auth error (sessionsController.authenticate):', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const createOrGetSession = async (req, res) => {
  try {
    const { assessmentId } = req.body;
    if (!assessmentId) {
      return res.status(400).json({ message: 'assessmentId required' });
    }

    let session = await AssessmentSession.findOne({
      user: req.user._id,
      assessment: assessmentId,
      status: { $in: ['not_started', 'in_progress', 'completed'] }
    });

    if (!session) {
      session = await AssessmentSession.create({
        user: req.user._id,
        assessment: assessmentId,
        currentQuestionIndex: 0,
        answers: [],
        status: 'not_started'
      });
    }

    res.json(session);
  } catch (err) {
    console.error('Create session error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getSessionById = async (req, res) => {
  try {
    const session = await AssessmentSession.findById(req.params.id);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    if (session.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized for this session' });
    }

    res.json(session);
  } catch (err) {
    console.error('Get session error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const saveAnswer = async (req, res) => {
  try {
    const { questionId, response, nextQuestionIndex, isFinal, score } = req.body;
    const session = await AssessmentSession.findById(req.params.id);

    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    if (session.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    if (session.status === 'not_started') {
      session.status = 'in_progress';
      session.startedAt = new Date();
    }

    const existingIndex = session.answers.findIndex(a => a.questionId === questionId);

    if (existingIndex !== -1) {
      session.answers[existingIndex].response = response;
      session.answers[existingIndex].answeredAt = new Date();
    } else {
      session.answers.push({
        questionId,
        response,
        answeredAt: new Date()
      });
    }

    if (typeof nextQuestionIndex === 'number') {
      session.currentQuestionIndex = nextQuestionIndex;
    }

    if (isFinal) {
      session.status = 'completed';
      session.completedAt = new Date();

      if (score) {
        session.score = score;
      }
    }

    await session.save();

    res.json({
      success: true,
      status: session.status,
      currentQuestionIndex: session.currentQuestionIndex,
      answersCount: session.answers.length,
      score: session.score || null
    });
  } catch (err) {
    console.error('Save answer error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  authenticate,
  createOrGetSession,
  getSessionById,
  saveAnswer
};