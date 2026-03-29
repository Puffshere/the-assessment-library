const ChildProfileModule = require('../models/ChildProfile');
const ChildProfile = ChildProfileModule.default || ChildProfileModule;
const AssessmentSession = require('../models/AssessmentSession');

function getDominantDiscType(sessions) {
  const totals = { D: 0, I: 0, S: 0, C: 0 };
  let count = 0;

  for (const s of sessions) {
    const breakdown = s.score && s.score.breakdown;
    if (!breakdown) continue;
    // breakdown may be a Map or plain object
    const get = (k) =>
      typeof breakdown.get === 'function' ? breakdown.get(k) : breakdown[k];
    totals.D += Number(get('D')) || 0;
    totals.I += Number(get('I')) || 0;
    totals.S += Number(get('S')) || 0;
    totals.C += Number(get('C')) || 0;
    count++;
  }

  if (!count) return null;

  let dominant = 'D';
  for (const trait of ['I', 'S', 'C']) {
    if (totals[trait] > totals[dominant]) dominant = trait;
  }
  return dominant;
}

const getProfiles = async (req, res) => {
  try {
    const profiles = await ChildProfile.find({ parentUserId: req.user._id })
      .sort({ createdAt: -1 })
      .lean();

    res.json({ profiles });
  } catch (err) {
    console.error('Error fetching child profiles:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const createProfile = async (req, res) => {
  try {
    const { childName, characterName, gender, theme, characterArchetype, characterCustomName } = req.body;

    if (!childName || !gender || !theme) {
      return res.status(400).json({ message: 'childName, gender, and theme are required.' });
    }

    // New child profiles always start clean — they earn their own DISC data
    const profile = await ChildProfile.create({
      parentUserId: req.user._id,
      childName,
      characterName: characterName || '',
      gender,
      theme,
      characterArchetype: characterArchetype || '',
      characterCustomName: characterCustomName || '',
      hasCompletedFirstAssessment: false,
      currentDiscType: null,
    });

    res.status(201).json({ profile });
  } catch (err) {
    console.error('Error creating child profile:', err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

const updateProfile = async (req, res) => {
  try {
    const profile = await ChildProfile.findOne({
      _id: req.params.id,
      parentUserId: req.user._id,
    });

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found.' });
    }

    const allowedFields = [
      'childName',
      'characterName',
      'gender',
      'theme',
      'currentDiscType',
      'characterArchetype',
      'characterCustomName',
      'hasCompletedFirstAssessment',
      'stats',
      'cardBackground',
      'activeProfile',
    ];

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        profile[field] = req.body[field];
      }
    }

    await profile.save();

    res.json({ profile });
  } catch (err) {
    console.error('Error updating child profile:', err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const result = await ChildProfile.findOneAndDelete({
      _id: req.params.id,
      parentUserId: req.user._id,
    });

    if (!result) {
      return res.status(404).json({ message: 'Profile not found.' });
    }

    res.json({ message: 'Profile deleted.' });
  } catch (err) {
    console.error('Error deleting child profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getProfiles, createProfile, updateProfile, deleteProfile };
