'use strict';

let User, AssessmentSession;
try { const m = require('../models/User'); User = m.default || m; } catch(e) { User = require('../models/User'); }
try { const m = require('../models/AssessmentSession'); AssessmentSession = m.default || m; } catch(e) { AssessmentSession = require('../models/AssessmentSession'); }

async function listUsers(req, res) {
  try {
    const users = await User.find({})
      .select('name email creditsBalance totalCreditsPurchased kids_mode_enabled lastLoginAt createdAt')
      .sort({ createdAt: -1 })
      .lean();

    // Batch fetch last completed assessment date for all users
    const userIds = users.map(u => u._id);
    const lastSessions = await AssessmentSession.aggregate([
      { $match: { user: { $in: userIds }, status: 'completed' } },
      { $sort: { completedAt: -1 } },
      { $group: {
        _id: '$user',
        lastCompletedAt: { $first: '$completedAt' },
        completedCount: { $sum: 1 },
        lastAssessmentTitle: { $first: '$assessment' }
      }},
      { $lookup: { from: 'assessments', localField: 'lastAssessmentTitle', foreignField: '_id', as: 'lastAssessment' } },
      { $unwind: { path: '$lastAssessment', preserveNullAndEmptyArrays: true } }
    ]);

    const sessionMap = {};
    for (const s of lastSessions) {
      sessionMap[s._id.toString()] = {
        lastCompletedAt: s.lastCompletedAt,
        completedCount: s.completedCount,
        lastAssessmentTitle: s.lastAssessment ? s.lastAssessment.title : ''
      };
    }

    const result = users.map(u => {
      const stats = sessionMap[u._id.toString()] || {};
      return {
        _id: u._id,
        name: u.name || '',
        email: u.email,
        creditsBalance: u.creditsBalance || 0,
        totalCreditsPurchased: u.totalCreditsPurchased || 0,
        kidsMode: u.kids_mode_enabled || false,
        lastLoginAt: u.lastLoginAt || null,
        createdAt: u.createdAt,
        lastCompletedAt: stats.lastCompletedAt || null,
        completedCount: stats.completedCount || 0,
        lastAssessmentTitle: stats.lastAssessmentTitle || ''
      };
    });

    res.json({ users: result });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
}

async function adjustCredits(req, res) {
  try {
    const { amount } = req.body;
    if (typeof amount !== 'number' || amount === 0) {
      return res.status(400).json({ error: 'amount must be a non-zero number.' });
    }

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found.' });

    const newBalance = Math.max(0, (user.creditsBalance || 0) + amount);
    user.creditsBalance = newBalance;
    user.markModified('creditsBalance');

    // Use updateOne to avoid password rehash
    await User.updateOne({ _id: user._id }, { creditsBalance: newBalance });

    res.json({ creditsBalance: newBalance });
  } catch(err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { listUsers, adjustCredits };
