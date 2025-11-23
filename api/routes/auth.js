import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from '../models/User.js'

const router = express.Router()

router.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'Missing email or password' })
        }

        // normalize email
        email = String(email).toLowerCase().trim()

        // DEBUG (optional): log what we're doing
        console.log('Login attempt for:', email)

        const user = await User.findOne({ email })

        if (!user) {
            console.log('No user found for email', email)
            return res.status(401).json({ message: 'Invalid email or password' })
        }

        const valid = await bcrypt.compare(password, user.password)

        if (!valid) {
            console.log('Password mismatch for', email)
            return res.status(401).json({ message: 'Invalid email or password' })
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        return res.json({
            message: 'Logged in successfully',
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (err) {
        console.error('Login error:', err)
        return res.status(500).json({ message: 'Server error' })
    }
})

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Basic validation
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ error: "Email already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        // Auto-login after register
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
                email: user.email
            }
        });

    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ error: "Server error." });
    }
});


export default router
