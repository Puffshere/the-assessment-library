'use strict';

let Assessment, FeaturedRelease;
try { const m = require('../models/Assessment'); Assessment = m.default || m; } catch(e) { Assessment = require('../models/Assessment'); }
try { const m = require('../models/FeaturedRelease'); FeaturedRelease = m.default || m; } catch(e) { FeaturedRelease = require('../models/FeaturedRelease'); }

async function getOrCreate() {
  let doc = await FeaturedRelease.findOne({});
  if (!doc) doc = await FeaturedRelease.create({ isActive: false, title: 'New Releases', message: '', assessmentIds: [] });
  return doc;
}

async function getPublic(req, res) {
  try {
    const doc = await getOrCreate();
    if (!doc.isActive) return res.json({ isActive: false });
    const assessments = await Assessment.find({ _id: { $in: doc.assessmentIds }, isActive: true })
      .select('title slug heroImageUrl description creditsCost estimatedCompletion');
    res.json({ isActive: true, title: doc.title, message: doc.message, assessments });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

async function getAdmin(req, res) {
  try {
    const doc = await getOrCreate();
    const assessments = await Assessment.find({ _id: { $in: doc.assessmentIds } })
      .select('title slug heroImageUrl');
    res.json({ ...doc.toObject(), assessments });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

async function update(req, res) {
  try {
    const doc = await getOrCreate();
    const { isActive, title, message, assessmentIds } = req.body;
    if (isActive !== undefined) doc.isActive = isActive;
    if (title !== undefined) doc.title = title;
    if (message !== undefined) doc.message = message;
    if (assessmentIds !== undefined) doc.assessmentIds = assessmentIds;
    await doc.save();
    res.json({ success: true });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

module.exports = { getPublic, getAdmin, update };
