'use strict';
const mongoose = require('mongoose');
let Assessment, CustomShelf;
try {
  const mod = require('../models/Assessment');
  Assessment = mod.default || mod;
} catch(e) { Assessment = require('../models/Assessment'); }
try {
  const mod = require('../models/CustomShelf');
  CustomShelf = mod.default || mod;
} catch(e) { CustomShelf = require('../models/CustomShelf'); }

async function listShelves(req, res) {
  try {
    const shelves = await CustomShelf.find({})
      .sort({ createdAt: -1 });
    const populated = await Promise.all(shelves.map(async s => {
      const assessments = await Assessment.find({ _id: { $in: s.assessmentIds } })
        .select('title slug heroImageUrl category genre');
      return { ...s.toObject(), assessments };
    }));
    res.json({ shelves: populated });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

async function createShelf(req, res) {
  try {
    const { name, section, assessmentIds, expiresAt, position } = req.body;
    const shelf = new CustomShelf({ name, section, assessmentIds, expiresAt: expiresAt || null, position: position || 'top' });
    await shelf.save();
    res.json({ shelf });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

async function updateShelf(req, res) {
  try {
    const shelf = await CustomShelf.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ shelf });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

async function toggleShelf(req, res) {
  try {
    const shelf = await CustomShelf.findById(req.params.id);
    if (!shelf) return res.status(404).json({ error: 'Not found.' });
    shelf.isActive = !shelf.isActive;
    await shelf.save();
    res.json({ isActive: shelf.isActive });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

async function archiveShelf(req, res) {
  try {
    const shelf = await CustomShelf.findById(req.params.id);
    if (!shelf) return res.status(404).json({ error: 'Not found.' });
    shelf.isArchived = !shelf.isArchived;
    shelf.isActive = false;
    await shelf.save();
    res.json({ isArchived: shelf.isArchived });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

async function deleteShelf(req, res) {
  try {
    await CustomShelf.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

async function getPublicShelves(req, res) {
  try {
    const now = new Date();
    const shelves = await CustomShelf.find({
      isActive: true,
      isArchived: false,
      $or: [{ expiresAt: null }, { expiresAt: { $gt: now } }]
    }).sort({ createdAt: -1 });
    const populated = await Promise.all(shelves.map(async s => {
      const assessments = await Assessment.find({
        _id: { $in: s.assessmentIds },
        isActive: true
      }).select('title slug heroImageUrl category genre description creditsCost estimatedCompletion wordsLength');
      return { ...s.toObject(), assessments };
    }));
    res.json({ shelves: populated });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

module.exports = { listShelves, createShelf, updateShelf, toggleShelf, archiveShelf, deleteShelf, getPublicShelves };
