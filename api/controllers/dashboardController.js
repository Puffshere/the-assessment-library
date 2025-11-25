const jwt = require('jsonwebtoken');

let User = require('../models/User');
User = User.default || User;

require('../models/Assessment');

const AssessmentSession = require('../models/AssessmentSession');

exports.getDashboard = async function (req, res) {
  try {
    const authHeader = req.headers.authorization || '';
    let token = null;

    if (authHeader.startsWith('Bearer ')) {
      token = authHeader.slice(7);
    }

    if (!token) {
      return res.status(401).json({ message: 'No auth token provided' });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      console.error('JWT verify error in dashboard:', err);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    const userId = decoded.id || decoded._id;

    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const sessions = await AssessmentSession.find({ user: user._id })
      .populate('assessment', 'title slug')
      .sort({ updatedAt: -1 })
      .lean();

    const formattedSessions = sessions
      .filter(s => s.assessment && s.assessment.slug)
      .map((s) => {
        const hasScore = s.score && typeof s.score === 'object';

        return {
          id: s._id,
          assessmentTitle: s.assessment.title,
          assessmentSlug: s.assessment.slug,
          status: s.status || 'not_started',
          startedAt: s.startedAt,
          completedAt: s.completedAt,
          scoreTotal:
            hasScore && typeof s.score.total === 'number'
              ? s.score.total
              : null,
          scoreBreakdown: hasScore && s.score.breakdown ? s.score.breakdown : null,
          currentQuestionIndex:
            typeof s.currentQuestionIndex === 'number'
              ? s.currentQuestionIndex
              : 0,
        };
      });

    return res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        creditsBalance:
          typeof user.creditsBalance === 'number' ? user.creditsBalance : 0,
      },
      sessions: formattedSessions,
    });
  } catch (err) {
    console.error('Error loading dashboard', err);
    return res
      .status(500)
      .json({ message: err.message || 'Failed to load dashboard' });
  }
};