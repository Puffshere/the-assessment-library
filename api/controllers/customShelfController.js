'use strict';

let Assessment, CustomShelf;
try {
  const mod = require('../models/Assessment');
  Assessment = mod.default || mod;
} catch(e) { Assessment = require('../models/Assessment'); }
try {
  const mod = require('../models/CustomShelf');
  CustomShelf = mod.default || mod;
} catch(e) { CustomShelf = require('../models/CustomShelf'); }

async function syncGenreShelves() {
  const assessments = await Assessment.find({ isActive: true }).select('title genre category');
  const genreMap = {};
  for (const a of assessments) {
    const genre = a.genre || 'General';
    const section = a.category?.shelf || 'Adult';
    const key = genre + '|' + section;
    if (!genreMap[key]) genreMap[key] = { genre, section };
  }
  for (const key of Object.keys(genreMap)) {
    const { genre, section } = genreMap[key];
    const existing = await CustomShelf.findOne({ type: 'genre', genre, section });
    if (!existing) {
      await CustomShelf.create({ name: genre, genre, section, type: 'genre', isActive: true, isArchived: false });
    }
  }
}

async function listShelves(req, res) {
  try {
    await syncGenreShelves();
    const shelves = await CustomShelf.find({}).sort({ type: 1, createdAt: -1 });
    const populated = await Promise.all(shelves.map(async s => {
      let assessments = [];
      if (s.type === 'genre') {
        assessments = await Assessment.find({ genre: s.genre, 'category.shelf': s.section, isActive: true })
          .select('title slug heroImageUrl category genre');
      } else {
        assessments = await Assessment.find({ _id: { $in: s.assessmentIds } })
          .select('title slug heroImageUrl category genre');
      }
      return { ...s.toObject(), assessments };
    }));
    res.json({ shelves: populated });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

async function createShelf(req, res) {
  try {
    const { name, section, assessmentIds, expiresAt, position } = req.body;
    const shelf = new CustomShelf({
      name, section, assessmentIds,
      expiresAt: expiresAt || null,
      position: position || 'top',
      type: 'custom'
    });
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
    if (shelf.isArchived) shelf.isActive = false;
    await shelf.save();
    res.json({ isArchived: shelf.isArchived, isActive: shelf.isActive });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

async function deleteShelf(req, res) {
  try {
    const shelf = await CustomShelf.findById(req.params.id);
    if (!shelf) return res.status(404).json({ error: 'Not found.' });
    if (shelf.type === 'genre') return res.status(400).json({ error: 'Genre shelves cannot be deleted — hide or archive them instead.' });
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
    }).sort({ type: 1, createdAt: -1 });

    const populated = await Promise.all(shelves.map(async s => {
      let assessments = [];
      if (s.type === 'genre') {
        assessments = await Assessment.find({
          genre: s.genre,
          'category.shelf': s.section,
          isActive: true
        }).select('title slug heroImageUrl category genre description creditsCost estimatedCompletion wordsLength');
      } else {
        assessments = await Assessment.find({
          _id: { $in: s.assessmentIds },
          isActive: true
        }).select('title slug heroImageUrl category genre description creditsCost estimatedCompletion wordsLength');
      }
      return { ...s.toObject(), assessments };
    }));

    res.json({ shelves: populated });
  } catch(err) { res.status(500).json({ error: err.message }); }
}

module.exports = { listShelves, createShelf, updateShelf, toggleShelf, archiveShelf, deleteShelf, getPublicShelves };
