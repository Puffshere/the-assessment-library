'use strict';

let User, Assessment, AssessmentSession, CreditTransaction, Rating, Participant, ChildProfile;
try { const m = require('../models/User'); User = m.default || m; } catch(e) { User = require('../models/User'); }
try { const m = require('../models/Assessment'); Assessment = m.default || m; } catch(e) { Assessment = require('../models/Assessment'); }
try { const m = require('../models/AssessmentSession'); AssessmentSession = m.default || m; } catch(e) { AssessmentSession = require('../models/AssessmentSession'); }
try { const m = require('../models/CreditTransaction'); CreditTransaction = m.default || m; } catch(e) { CreditTransaction = require('../models/CreditTransaction'); }
try { const m = require('../models/Rating'); Rating = m.default || m; } catch(e) { Rating = require('../models/Rating'); }
try { const m = require('../models/Participant'); Participant = m.default || m; } catch(e) { Participant = require('../models/Participant'); }
try { const m = require('../models/ChildProfile'); ChildProfile = m.default || m; } catch(e) { ChildProfile = require('../models/ChildProfile'); }

function buildGrowth(monthlyData, currentTotal) {
  let running = currentTotal;
  const reversed = [...monthlyData].reverse();
  const points = [];
  for (const m of reversed) {
    points.unshift({ label: m._id, total: running });
    running -= m.count;
  }
  if (points.length) {
    const first = points[0].label;
    const prevMonth = first.month === 1 ? 12 : first.month - 1;
    const prevYear = first.month === 1 ? first.year - 1 : first.year;
    points.unshift({ label: { year: prevYear, month: prevMonth }, total: running });
  }
  return points;
}

async function getMetrics(req, res) {
  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);

    // Run all queries in parallel
    const [
      totalUsers,
      newUsersLast30,
      newUsersLast7,
      kidsModUsers,
      totalChildProfiles,
      totalSessions,
      completedSessions,
      inProgressSessions,
      completedLast30,
      completedLast7,
      thirdPersonSessions,
      thirdPersonCompleted,
      totalAssessments,
      activeAssessments,
      totalRatings,
      avgRatingResult,
      totalParticipants,
      totalCreditsResult,
      creditsSpentResult,
      topAssessments,
      topRatedAssessments,
      discDistribution,
      recentCompletions,
      userSignupsByMonth,
      completionsByMonth,
      participantsByMonth,
    ] = await Promise.all([
      User.countDocuments({}),
      User.countDocuments({ createdAt: { $gte: thirtyDaysAgo } }),
      User.countDocuments({ createdAt: { $gte: sevenDaysAgo } }),
      User.countDocuments({ kids_mode_enabled: true }),
      ChildProfile.countDocuments({}),
      AssessmentSession.countDocuments({}),
      AssessmentSession.countDocuments({ status: 'completed' }),
      AssessmentSession.countDocuments({ status: 'in_progress' }),
      AssessmentSession.countDocuments({ status: 'completed', completedAt: { $gte: thirtyDaysAgo } }),
      AssessmentSession.countDocuments({ status: 'completed', completedAt: { $gte: sevenDaysAgo } }),
      AssessmentSession.countDocuments({ isThirdPerson: true }),
      AssessmentSession.countDocuments({ isThirdPerson: true, status: 'completed' }),
      Assessment.countDocuments({}),
      Assessment.countDocuments({ isActive: true }),
      Rating.countDocuments({}),
      Rating.aggregate([{ $group: { _id: null, avg: { $avg: '$rating' } } }]),
      Participant.countDocuments({}),
      CreditTransaction.aggregate([
        { $match: { type: 'purchase' } },
        { $group: { _id: null, total: { $sum: '$credits' } } }
      ]),
      CreditTransaction.aggregate([
        { $match: { type: 'assessment_use' } },
        { $group: { _id: null, total: { $sum: '$credits' } } }
      ]),
      // Top 5 most-taken assessments
      AssessmentSession.aggregate([
        { $match: { status: 'completed' } },
        { $group: { _id: '$assessment', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 },
        { $lookup: { from: 'assessments', localField: '_id', foreignField: '_id', as: 'assessment' } },
        { $unwind: '$assessment' },
        { $project: { title: '$assessment.title', slug: '$assessment.slug', shelf: '$assessment.category.shelf', count: 1 } }
      ]),
      // Top 5 highest-rated assessments
      Assessment.find({ ratingCount: { $gte: 1 } })
        .select('title slug ratingAvg ratingCount category')
        .sort({ ratingAvg: -1, ratingCount: -1 })
        .limit(5)
        .lean(),
      // DISC distribution across all completed sessions
      AssessmentSession.aggregate([
        { $match: { status: 'completed', 'score.breakdown': { $exists: true } } },
        { $project: {
          D: { $ifNull: ['$score.breakdown.D', 0] },
          I: { $ifNull: ['$score.breakdown.I', 0] },
          S: { $ifNull: ['$score.breakdown.S', 0] },
          C: { $ifNull: ['$score.breakdown.C', 0] },
        }},
        { $project: {
          topTrait: { $switch: {
            branches: [
              { case: { $and: [{ $gte: ['$D', '$I'] }, { $gte: ['$D', '$S'] }, { $gte: ['$D', '$C'] }] }, then: 'D' },
              { case: { $and: [{ $gte: ['$I', '$D'] }, { $gte: ['$I', '$S'] }, { $gte: ['$I', '$C'] }] }, then: 'I' },
              { case: { $and: [{ $gte: ['$S', '$D'] }, { $gte: ['$S', '$I'] }, { $gte: ['$S', '$C'] }] }, then: 'S' },
            ],
            default: 'C'
          }}
        }},
        { $group: { _id: '$topTrait', count: { $sum: 1 } } },
        { $sort: { _id: 1 } }
      ]),
      // Recent 10 completions
      AssessmentSession.find({ status: 'completed' })
        .populate('assessment', 'title slug')
        .populate('user', 'name email')
        .select('completedAt assessment user')
        .sort({ completedAt: -1 })
        .limit(10)
        .lean(),
      // User signups by month (last 6 months)
      User.aggregate([
        { $match: { createdAt: { $gte: new Date(now.getFullYear(), now.getMonth() - 5, 1) } } },
        { $group: {
          _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
          count: { $sum: 1 }
        }},
        { $sort: { '_id.year': 1, '_id.month': 1 } }
      ]),
      // Completions by month (last 6 months)
      AssessmentSession.aggregate([
        { $match: { status: 'completed', completedAt: { $gte: new Date(now.getFullYear(), now.getMonth() - 5, 1) } } },
        { $group: {
          _id: { year: { $year: '$completedAt' }, month: { $month: '$completedAt' } },
          count: { $sum: 1 }
        }},
        { $sort: { '_id.year': 1, '_id.month': 1 } }
      ]),
      // Participants by month (last 6 months)
      Participant.aggregate([
        { $match: { createdAt: { $gte: new Date(now.getFullYear(), now.getMonth() - 5, 1) } } },
        { $group: {
          _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
          count: { $sum: 1 }
        }},
        { $sort: { '_id.year': 1, '_id.month': 1 } }
      ]),
    ]);

    res.json({
      users: {
        total: totalUsers,
        newLast30: newUsersLast30,
        newLast7: newUsersLast7,
        kidsMode: kidsModUsers,
        childProfiles: totalChildProfiles,
      },
      sessions: {
        total: totalSessions,
        completed: completedSessions,
        inProgress: inProgressSessions,
        completedLast30: completedLast30,
        completedLast7: completedLast7,
        thirdPerson: thirdPersonSessions,
        thirdPersonCompleted: thirdPersonCompleted,
      },
      assessments: {
        total: totalAssessments,
        active: activeAssessments,
      },
      ratings: {
        total: totalRatings,
        average: avgRatingResult.length ? Math.round(avgRatingResult[0].avg * 10) / 10 : 0,
      },
      participants: {
        total: totalParticipants,
      },
      credits: {
        totalPurchased: totalCreditsResult.length ? totalCreditsResult[0].total : 0,
        totalSpent: creditsSpentResult.length ? creditsSpentResult[0].total : 0,
      },
      topAssessments,
      topRatedAssessments: topRatedAssessments.map(a => ({
        title: a.title,
        slug: a.slug,
        shelf: a.category?.shelf,
        ratingAvg: a.ratingAvg,
        ratingCount: a.ratingCount,
      })),
      discDistribution,
      recentCompletions: recentCompletions.map(s => ({
        assessmentTitle: s.assessment?.title || 'Unknown',
        userName: s.user?.name || s.user?.email || 'Unknown',
        completedAt: s.completedAt,
      })),
      signupsByMonth: userSignupsByMonth,
      completionsByMonth: completionsByMonth,
      participantsByMonth: participantsByMonth,
      userGrowth: buildGrowth(userSignupsByMonth, totalUsers),
      participantGrowth: buildGrowth(participantsByMonth, totalParticipants),
      completionGrowth: buildGrowth(completionsByMonth, completedSessions),
    });
  } catch(err) {
    console.error('[metricsController] Error:', err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getMetrics };
