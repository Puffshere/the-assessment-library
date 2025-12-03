const jwt = require('jsonwebtoken');

let User = require('../models/User');
User = User.default || User;

const Assessment = require('../models/Assessment');
const AssessmentSession = require('../models/AssessmentSession');

const checkout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.slice(7)
      : null;

    if (!token) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    const userId = decoded.id || decoded._id;
    const { assessmentId } = req.body || {};

    if (!assessmentId) {
      return res.status(400).json({ message: 'assessmentId is required' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const assessment = await Assessment.findById(assessmentId);
    if (!assessment || !assessment.isActive) {
      return res
        .status(400)
        .json({ message: 'Assessment not found or inactive.' });
    }

    const cost = assessment.creditsCost || 0;

    if ((user.creditsBalance || 0) < cost) {
      return res.status(400).json({
        code: 'INSUFFICIENT_CREDITS',
        message: 'Not enough credits to start this assessment.',
      });
    }

    const session = await AssessmentSession.create({
      user: user._id,
      assessment: assessment._id,
      status: 'not_started',
      currentQuestionIndex: 0,
      answers: [],
    });

    user.creditsBalance -= cost;
    await user.save();

    res.json({
      success: true,
      sessionId: session._id,
      user: { creditsBalance: user.creditsBalance },
    });
  } catch (err) {
    console.error('Checkout error:', err);
    res
      .status(500)
      .json({ message: `Failed to start assessment: ${err.message}` });
  }
};

const markSessionStarted = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await AssessmentSession.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Session not found' });
    }

    if (!book.startedAt) {
      book.startedAt = new Date();
    }

    book.status = 'in_progress';
    await book.save();

    res.json({ success: true });
  } catch (err) {
    console.error('markSessionStarted error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAssessmentBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const assessment = await Assessment.findOne({
      slug,
      isActive: true
    }).lean();

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    return res.json({ assessment });
  } catch (err) {
    console.error('getAssessmentBySlug error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

const getAssessmentsForLibrary = async (req, res) => {
  try {
    const slugs = [
      'jessicas-first-job',
      'rogers-new-business',
      'allies-professional-journey',
      'shanes-day-at-the-park',
      'trevors-day-at-school',
      'westons-birthday'
    ];

    const assessments = await Assessment.find(
      {
        isActive: true,
        slug: { $in: slugs }
      },
      // 👇 add category here
      'slug title description creditsCost estimatedCompletion wordsLength heroImageUrl category'
    ).lean();

    res.json({ assessments });
  } catch (err) {
    console.error('Error loading assessments for library:', err);
    res.status(500).json({ message: 'Failed to load assessments' });
  }
};


module.exports = {
  checkout,
  markSessionStarted,
  getAssessmentBySlug,
  getAssessmentsForLibrary
};