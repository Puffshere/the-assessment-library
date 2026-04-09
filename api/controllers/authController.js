const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const UserModule = require('../models/User');
const User = UserModule.default || UserModule;

const CreditTransaction = require('../models/CreditTransaction');
const Participant = require('../models/Participant');
const Assessment = require('../models/Assessment');
const { sendPasswordResetEmail } = require('../utils/postmarkClient');

const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Missing email or password' });
    }

    email = String(email).toLowerCase().trim();

    console.log('Login attempt for:', email);

    const user = await User.findOne({ email });

    if (!user) {
      console.log('No user found for email', email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      console.log('Password mismatch for', email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      message: 'Logged in successfully',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        kids_mode_enabled: user.kids_mode_enabled,
        has_kids_pin: !!user.kids_mode_pin,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

const register = async (req, res) => {
  try {
    let { name, email, password, participantId, invitationId } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    email = String(email).toLowerCase().trim();

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'Email already exists.' });
    }

    const user = new User({
      name,
      email,
      password,
      creditsBalance: 1,
      totalCreditsPurchased: 1,
    });

    await user.save();

    await CreditTransaction.create({
      user: user._id,
      type: 'admin_adjustment',
      credits: 1,
      note: 'Signup bonus credit',
    });

    // Grant extra credits when registering via an invite link
    if (participantId && invitationId) {
      try {
        const participant = await Participant.findById(participantId);
        const invitation = participant && participant.invitations.id(invitationId);
        if (invitation) {
          const assessment = await Assessment.findOne({ slug: invitation.assessmentSlug }).select('creditsCost');
          const bonusCredits = (assessment && assessment.creditsCost) || 1;
          user.creditsBalance += bonusCredits;
          user.totalCreditsPurchased += bonusCredits;
          await user.save();
          await CreditTransaction.create({
            user: user._id,
            type: 'admin_adjustment',
            credits: bonusCredits,
            note: `Invite bonus: credits to take "${invitation.assessmentTitle}"`,
          });
        }
      } catch (err) {
        console.error('Error granting invite bonus credits:', err);
      }
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        creditsBalance: user.creditsBalance,
        kids_mode_enabled: user.kids_mode_enabled,
        has_kids_pin: !!user.kids_mode_pin,
      },
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Server error.' });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: String(email).toLowerCase() });

    if (!user) {
      return res.json({
        message:
          'If an account with that email exists, a password reset link has been sent.',
      });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expires = Date.now() + 1000 * 60 * 60; // 1 hour

    user.resetPasswordToken = token;
    user.resetPasswordExpires = new Date(expires);
    await user.save();

    const resetUrl = `${process.env.BROWSER_API_BASE_URL}/auth/reset-password/${token}`;

    await sendPasswordResetEmail({
      to: user.email,
      name: user.name || 'there',
      resetUrl,
    });

    return res.json({
      message:
        'If an account with that email exists, a password reset link has been sent.',
    });
  } catch (err) {
    console.error('Error in forgotPassword:', err);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
};

const resetPassword = async (req, res) => {
  const { token, password } = req.body;

  if (!token || !password) {
    return res
      .status(400)
      .json({ message: 'Token and new password are required.' });
  }

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      return res.status(400).json({
        message: 'This password reset link is invalid or has expired.',
      });
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    return res.json({ message: 'Your password has been updated successfully.' });
  } catch (err) {
    console.error('Error in resetPassword:', err);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      '_id email name role kids_mode_enabled kids_mode_pin creditsBalance'
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        kids_mode_enabled: user.kids_mode_enabled,
        has_kids_pin: !!user.kids_mode_pin,
        creditsBalance: user.creditsBalance,
      },
    });
  } catch (err) {
    console.error('getMe error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  login,
  register,
  forgotPassword,
  resetPassword,
  getMe,
};