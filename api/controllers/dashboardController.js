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

    const sessions = await AssessmentSession.find({ user: user._id, isThirdPerson: { $ne: true } })
      .populate(
        'assessment',
        // ⬇️ include the style fields from Assessment, plus what you already had
        'title slug category ' +
          'DstyleTitle IstyleTitle SstyleTitle CstyleTitle ' +
          'DstyleDescription IstyleDescription SstyleDescription CstyleDescription'
      )
      .sort({ updatedAt: -1 })
      .lean();

    const formattedSessions = sessions
      .filter(s => s.assessment && s.assessment.slug)
      .map((s) => {
        const hasScore = s.score && typeof s.score === 'object';
        const a = s.assessment || {};

        return {
          id: s._id,
          assessmentTitle: a.title,
          assessmentSlug: a.slug,
          status: s.status || 'not_started',
          startedAt: s.startedAt,
          completedAt: s.completedAt,
          scoreTotal:
            hasScore && typeof s.score.total === 'number'
              ? s.score.total
              : null,
          scoreBreakdown:
            hasScore && s.score.breakdown ? s.score.breakdown : null,
          currentQuestionIndex:
            typeof s.currentQuestionIndex === 'number'
              ? s.currentQuestionIndex
              : 0,
          category: a.category || null,

          DstyleTitle: a.DstyleTitle,
          IstyleTitle: a.IstyleTitle,
          SstyleTitle: a.SstyleTitle,
          CstyleTitle: a.CstyleTitle,

          DstyleDescription: a.DstyleDescription,
          IstyleDescription: a.IstyleDescription,
          SstyleDescription: a.SstyleDescription,
          CstyleDescription: a.CstyleDescription,
        };
      });

    // Fetch 3rd-person sessions (assessments this user completed on behalf of others)
    const thirdPersonRaw = await AssessmentSession.find({
      user: user._id,
      isThirdPerson: true
    })
      .populate({
        path: 'thirdPersonParticipantId',
        populate: { path: 'invitedBy', select: 'name email' }
      })
      .populate('assessment', 'title slug')
      .sort({ updatedAt: -1 })
      .lean();

    const thirdPersonSessions = thirdPersonRaw.map(s => {
      const participant = s.thirdPersonParticipantId;
      const inviter = participant && participant.invitedBy;
      const a = s.assessment || {};
      const hasScore = s.score && typeof s.score === 'object';
      return {
        id: s._id,
        assessmentTitle: a.title || '',
        assessmentSlug: a.slug || '',
        inviterName: inviter ? (inviter.name || inviter.email) : 'Unknown',
        status: s.status || 'not_started',
        startedAt: s.startedAt,
        completedAt: s.completedAt,
        scoreBreakdown: hasScore && s.score.breakdown ? s.score.breakdown : null
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
      thirdPersonSessions,
    });
  } catch (err) {
    console.error('Error loading dashboard', err);
    return res
      .status(500)
      .json({ message: err.message || 'Failed to load dashboard' });
  }
};