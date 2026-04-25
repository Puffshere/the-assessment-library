'use strict';

let Assessment, Rating;
try { const m = require('../models/Assessment'); Assessment = m.default || m; } catch(e) { Assessment = require('../models/Assessment'); }
try { const m = require('../models/Rating'); Rating = m.default || m; } catch(e) { Rating = require('../models/Rating'); }

async function rateAssessment(req, res) {
  try {
    const userId = req.user ? req.user._id.toString() : null;
    if (!userId) return res.status(401).json({ error: 'Not authenticated.' });

    const { rating } = req.body;
    if (!rating || rating < 1 || rating > 5) return res.status(400).json({ error: 'Rating must be 1-5.' });

    const assessment = await Assessment.findById(req.params.id);
    if (!assessment) return res.status(404).json({ error: 'Assessment not found.' });

    await Rating.findOneAndUpdate(
      { assessment: assessment._id, user: userId },
      { rating },
      { upsert: true, new: true }
    );

    // Recalculate average
    const agg = await Rating.aggregate([
      { $match: { assessment: assessment._id } },
      { $group: { _id: null, avg: { $avg: '$rating' }, count: { $sum: 1 } } }
    ]);
    const avg = agg.length ? Math.round(agg[0].avg * 10) / 10 : 0;
    const count = agg.length ? agg[0].count : 0;

    assessment.ratingAvg = avg;
    assessment.ratingCount = count;
    await assessment.save();

    res.json({ ratingAvg: avg, ratingCount: count, userRating: rating });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
}

async function getUserRating(req, res) {
  try {
    const userId = req.user ? req.user._id.toString() : null;
    if (!userId) return res.json({ userRating: null });

    const existing = await Rating.findOne({ assessment: req.params.id, user: userId });
    res.json({ userRating: existing ? existing.rating : null });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
}

async function getTopRated(req, res) {
  try {
    const limit = Math.min(parseInt(req.query.limit) || 3, 20);
    const assessments = await Assessment.find({
      isActive: true,
      ratingCount: { $gte: 1 }
    })
      .select('title slug heroImageUrl description creditsCost estimatedCompletion category genre ratingAvg ratingCount')
      .sort({ ratingAvg: -1, ratingCount: -1 })
      .limit(limit)
      .lean();

    res.json({ assessments });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { rateAssessment, getUserRating, getTopRated };
