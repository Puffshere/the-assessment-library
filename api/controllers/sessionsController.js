const jwt = require('jsonwebtoken');

const UserModule = require('../models/User');
const User = UserModule.default || UserModule;

const AssessmentSession = require('../models/AssessmentSession');

const authenticate = async (req, res, next) => {
  try {
    let token = null;
    if (req.cookies && req.cookies.tal_token) {
      token = req.cookies.tal_token;
    } else {
      const authHeader = req.headers.authorization || '';
      if (authHeader.startsWith('Bearer ')) {
        token = authHeader.slice(7);
      }
    }
    if (!token) {
      return res.status(401).json({ message: 'No auth token provided' });
    }

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

const optionalAuthenticate = async (req, res, next) => {
  try {
    let token = null;
    if (req.cookies && req.cookies.tal_token) {
      token = req.cookies.tal_token;
    } else {
      const authHeader = req.headers.authorization || '';
      if (authHeader.startsWith('Bearer ')) {
        token = authHeader.slice(7);
      }
    }

    if (!token) {
      req.user = null;
      return next();
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      // Invalid token — treat as anonymous, don't error
      req.user = null;
      return next();
    }

    const userId = decoded.id || decoded._id;
    const user = await User.findById(userId).select('-password');
    req.user = user || null;
    return next();
  } catch (err) {
    console.error('optionalAuthenticate error:', err);
    req.user = null;
    return next();
  }
};

const createOrGetSession = async (req, res) => {
  try {
    const { assessmentId, isThirdPerson, thirdPersonParticipantId, thirdPersonInvitationId, thirdPersonForUserId, childProfileId, isChildThirdPerson, childThirdPersonParticipantId, childThirdPersonProfileId } = req.body;
    if (!assessmentId) {
      return res.status(400).json({ message: 'assessmentId required' });
    }

    let session;

    if (isThirdPerson) {
      session = await AssessmentSession.findOne({
        user: req.user._id,
        assessment: assessmentId,
        isThirdPerson: true,
        thirdPersonParticipantId,
        thirdPersonInvitationId
      });
    } else {
      const query = {
        user: req.user._id,
        assessment: assessmentId,
        isThirdPerson: { $ne: true },
        status: { $in: ['not_started', 'in_progress', 'completed'] }
      };
      if (childProfileId) {
        query.childProfileId = childProfileId;
      } else {
        query.childProfileId = null;
      }
      session = await AssessmentSession.findOne(query);
    }

    if (!session) {
      const sessionData = {
        user: req.user._id,
        assessment: assessmentId,
        currentQuestionIndex: 0,
        answers: [],
        status: 'not_started'
      };

      if (isThirdPerson) {
        sessionData.isThirdPerson = true;
        sessionData.thirdPersonParticipantId = thirdPersonParticipantId;
        sessionData.thirdPersonInvitationId = thirdPersonInvitationId;
        sessionData.thirdPersonForUserId = thirdPersonForUserId;
      }

      if (isChildThirdPerson) {
        sessionData.isChildThirdPerson = true;
        sessionData.childThirdPersonParticipantId = childThirdPersonParticipantId;
        sessionData.childThirdPersonProfileId = childThirdPersonProfileId;
      }

      if (childProfileId) {
        sessionData.childProfileId = childProfileId;
      }

      session = await AssessmentSession.create(sessionData);
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
    const { questionId, response, nextQuestionIndex, isFinal, score, childProfileId } = req.body;
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

    // Link session to child profile if provided and not already linked
    if (childProfileId && !session.childProfileId) {
      session.childProfileId = childProfileId;
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

    // If this is a 3rd-person session and it just completed, update the invitation
    if (isFinal && session.isThirdPerson && session.thirdPersonParticipantId && session.thirdPersonInvitationId) {
      try {
        const Participant = require('../models/Participant');
        const participant = await Participant.findById(session.thirdPersonParticipantId);
        if (participant) {
          const invitation = participant.invitations.id(session.thirdPersonInvitationId);
          if (invitation) {
            invitation.status = 'completed';
            invitation.responseSessionId = session._id;
            if (score && score.breakdown) {
              invitation.responseBreakdown = score.breakdown;
            }
            await participant.save();
          }
        }
      } catch (err) {
        console.error('Error updating participant invitation on completion:', err);
      }
    }

    // If this is a child 3rd-person session and it just completed, update the ChildParticipant invitation
    if (isFinal && session.isChildThirdPerson && session.childThirdPersonParticipantId && session.thirdPersonInvitationId) {
      try {
        const ChildParticipant = require('../../server/models/ChildParticipant');
        const childParticipant = await ChildParticipant.findById(session.childThirdPersonParticipantId);
        if (childParticipant) {
          const invitation = childParticipant.invitations.id(session.thirdPersonInvitationId);
          if (invitation) {
            invitation.status = 'completed';
            invitation.responseSessionId = session._id;
            if (score && score.breakdown) {
              invitation.responseBreakdown = score.breakdown;
            }
            await childParticipant.save();
          }
        }
      } catch (err) {
        console.error('Error updating child participant invitation on completion:', err);
      }
    }

    // If assessment completed and linked to a child profile, save results to the child
    if (isFinal && session.childProfileId) {
      try {
        const ChildProfileModule = require('../models/ChildProfile');
        const ChildProfile = ChildProfileModule.default || ChildProfileModule;

        const childProfile = await ChildProfile.findById(session.childProfileId);
        if (childProfile && childProfile.parentUserId.toString() === req.user._id.toString()) {
          // Get assessment details for the record
          const Assessment = require('../models/Assessment');
          const assessment = await Assessment.findById(session.assessment).select('title slug').lean();

          const breakdown = score && score.breakdown
            ? { D: Number(score.breakdown.D) || 0, I: Number(score.breakdown.I) || 0,
                S: Number(score.breakdown.S) || 0, C: Number(score.breakdown.C) || 0 }
            : { D: 0, I: 0, S: 0, C: 0 };

          childProfile.completedAssessments.push({
            sessionId: session._id,
            assessmentId: session.assessment,
            assessmentTitle: assessment ? assessment.title : '',
            assessmentSlug: assessment ? assessment.slug : '',
            completedAt: session.completedAt,
            scoreBreakdown: breakdown,
          });

          // Recalculate dominant DISC type from all child assessments
          const totals = { D: 0, I: 0, S: 0, C: 0 };
          let count = 0;
          for (const ca of childProfile.completedAssessments) {
            const b = ca.scoreBreakdown;
            if (!b) continue;
            totals.D += Number(b.D) || 0;
            totals.I += Number(b.I) || 0;
            totals.S += Number(b.S) || 0;
            totals.C += Number(b.C) || 0;
            count++;
          }
          if (count) {
            let dominant = 'D';
            for (const trait of ['I', 'S', 'C']) {
              if (totals[trait] > totals[dominant]) dominant = trait;
            }
            childProfile.currentDiscType = dominant;

            // Derive stats from averaged DISC scores
            const avg = {
              D: totals.D / count, I: totals.I / count,
              S: totals.S / count, C: totals.C / count,
            };
            const clamp = (v) => Math.round(Math.min(100, Math.max(0, v)));
            childProfile.stats = {
              strength: clamp(avg.D),
              leadership: clamp(avg.D),
              speed: clamp(avg.I),
              creativity: clamp((avg.I + avg.C) / 2),
              heart: clamp(avg.S),
              wisdom: clamp((avg.S + avg.C) / 2),
            };
          }

          childProfile.hasCompletedFirstAssessment = true;

          // ── Track completions per theme for background unlocks ──
          const theme = childProfile.theme;
          if (theme) {
            const prevCount = childProfile.completionsPerTheme.get(theme) || 0;
            childProfile.completionsPerTheme.set(theme, prevCount + 1);
          }

          await childProfile.save();
        }
      } catch (err) {
        console.error('Error saving assessment to child profile:', err);
      }
    }

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
  optionalAuthenticate,
  createOrGetSession,
  getSessionById,
  saveAnswer
};