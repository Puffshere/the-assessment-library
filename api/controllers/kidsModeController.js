const bcrypt = require('bcryptjs');

const UserModule = require('../models/User');
const User = UserModule.default || UserModule;

const setPin = async (req, res) => {
  try {
    const { pin } = req.body;

    if (!pin || !/^\d{4}$/.test(pin)) {
      return res.status(400).json({ message: 'A valid 4-digit PIN is required.' });
    }

    const hashed = await bcrypt.hash(pin, 10);

    await User.findByIdAndUpdate(req.user._id, { kids_mode_pin: hashed });

    res.json({ kids_mode_pin: hashed });
  } catch (err) {
    console.error('Error setting PIN:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const verifyPin = async (req, res) => {
  try {
    const { pin } = req.body;

    if (!pin) {
      return res.status(400).json({ message: 'PIN is required.' });
    }

    const user = await User.findById(req.user._id).select('kids_mode_pin');

    if (!user || !user.kids_mode_pin) {
      return res.status(401).json({ message: 'No PIN set.' });
    }

    const match = await bcrypt.compare(pin, user.kids_mode_pin);
    if (!match) {
      return res.status(401).json({ message: 'Incorrect PIN.' });
    }

    res.json({ success: true });
  } catch (err) {
    console.error('Error verifying PIN:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const changePin = async (req, res) => {
  try {
    const { currentPin, newPin } = req.body;

    if (!currentPin || !newPin) {
      return res.status(400).json({ message: 'Current PIN and new PIN are required.' });
    }

    if (!/^\d{4}$/.test(newPin)) {
      return res.status(400).json({ message: 'New PIN must be exactly 4 digits.' });
    }

    const user = await User.findById(req.user._id).select('kids_mode_pin');

    if (!user || !user.kids_mode_pin) {
      return res.status(401).json({ message: 'No PIN set.' });
    }

    const match = await bcrypt.compare(currentPin, user.kids_mode_pin);
    if (!match) {
      return res.status(401).json({ message: 'Current PIN is incorrect.' });
    }

    const hashed = await bcrypt.hash(newPin, 10);
    user.kids_mode_pin = hashed;
    await user.save();

    res.json({ kids_mode_pin: hashed });
  } catch (err) {
    console.error('Error changing PIN:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const resetPinWithPassword = async (req, res) => {
  try {
    const { password, newPin } = req.body;

    if (!password || !newPin) {
      return res.status(400).json({ message: 'Password and new PIN are required.' });
    }

    if (!/^\d{4}$/.test(newPin)) {
      return res.status(400).json({ message: 'New PIN must be exactly 4 digits.' });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    const valid = await user.comparePassword(password);
    if (!valid) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    const hashed = await bcrypt.hash(newPin, 10);
    user.kids_mode_pin = hashed;
    await user.save();

    res.json({ kids_mode_pin: hashed });
  } catch (err) {
    console.error('Error resetting PIN with password:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const toggleKidsMode = async (req, res) => {
  try {
    const { enabled } = req.body;

    const user = await User.findById(req.user._id).select('kids_mode_pin kids_mode_enabled');

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    if (enabled && !user.kids_mode_pin) {
      return res.status(400).json({ message: 'You must set a PIN before enabling Kids Mode.' });
    }

    user.kids_mode_enabled = !!enabled;
    await user.save();

    res.json({ kids_mode_enabled: user.kids_mode_enabled });
  } catch (err) {
    console.error('Error toggling kids mode:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { setPin, verifyPin, changePin, resetPinWithPassword, toggleKidsMode };
