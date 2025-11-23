const crypto = require('crypto');

const UserModule = require('../models/User');
const User = UserModule.default || UserModule;

const { sendPasswordResetEmail } = require('../utils/postmarkClient');

exports.forgotPassword = async (req, res) => {
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

exports.resetPassword = async (req, res) => {
    const { token, password } = req.body;

    if (!token || !password) {
        return res
            .status(400)
            .json({ message: 'Token and new password are required.' });
    }

    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: new Date() }, // not expired
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