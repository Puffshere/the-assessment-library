const Assessment = require('../models/Assessment');
const AssessmentSession = require('../models/AssessmentSession');

const checkout = async (req, res) => {
  try {
    const user = req.user;
    const { assessmentId, childProfileId } = req.body || {};

    if (!assessmentId) {
      return res.status(400).json({ message: 'assessmentId is required' });
    }

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

    // Check for an existing non-completed session scoped to this child (or parent)
    const existingQuery = {
      user: user._id,
      assessment: assessment._id,
      status: { $in: ['not_started', 'in_progress'] },
    };
    if (childProfileId) {
      existingQuery.childProfileId = childProfileId;
    } else {
      existingQuery.childProfileId = null;
    }

    let session = await AssessmentSession.findOne(existingQuery);

    if (!session) {
      const sessionData = {
        user: user._id,
        assessment: assessment._id,
        status: 'not_started',
        currentQuestionIndex: 0,
        answers: [],
      };

      if (childProfileId) {
        sessionData.childProfileId = childProfileId;
      }

      session = await AssessmentSession.create(sessionData);

      user.creditsBalance -= cost;
      await user.save();
    }

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
    const user = req.user || null;
    const kidsMode = !!(user && user.kids_mode_enabled);

    const filter = { isActive: true };
    if (kidsMode) {
      filter['category.shelf'] = 'Kids';
    }

    const assessments = await Assessment.find(
      filter,
      'slug title description creditsCost estimatedCompletion wordsLength heroImageUrl category genre ratingAvg ratingCount'
    ).lean();

    res.json({ assessments, kidsMode });
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