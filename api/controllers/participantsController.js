const jwt = require('jsonwebtoken');

const UserModule = require('../models/User');
const User = UserModule.default || UserModule;

const Participant = require('../models/Participant');
const Assessment = require('../models/Assessment');

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    if (!authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No auth token provided' });
    }

    const token = authHeader.slice(7);

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      console.error('JWT verify error (participants):', err);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    const userId = decoded.id || decoded._id;
    const user = await User.findById(userId).select('-password');

    if (!user) return res.status(401).json({ message: 'User not found' });

    req.user = user;
    next();
  } catch (err) {
    console.error('Auth error (participantsController.authenticate):', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getParticipants = async (req, res) => {
  try {
    const participants = await Participant.find({ invitedBy: req.user._id }).sort({ createdAt: -1 });
    res.json(participants);
  } catch (err) {
    console.error('Get participants error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addParticipant = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const participant = await Participant.create({
      invitedBy: req.user._id,
      name,
      email
    });

    res.status(201).json(participant);
  } catch (err) {
    console.error('Add participant error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const inviteToAssessment = async (req, res) => {
  try {
    const { assessmentSlug } = req.body;

    const participant = await Participant.findOne({
      _id: req.params.id,
      invitedBy: req.user._id
    });

    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }

    const assessment = await Assessment.findOne({ slug: assessmentSlug });

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    const alreadyInvited = participant.invitations.some(
      inv => inv.assessmentSlug === assessmentSlug
    );

    if (alreadyInvited) {
      return res.status(409).json({ message: 'Already invited to this assessment' });
    }

    participant.invitations.push({
      assessment: assessment._id,
      assessmentTitle: assessment.title,
      assessmentSlug: assessment.slug,
      status: 'invited',
      invitedAt: new Date()
    });

    await participant.save();

    try {
      const postmark = require('postmark');
      const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);
      const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
      const invitation = participant.invitations[participant.invitations.length - 1];
      const inviteLink = `${baseUrl}/library/${assessment.slug}?participant=${participant._id}&invitation=${invitation._id}`;
      const inviterName = req.user.name || req.user.email;
      await client.sendEmail({
        From: 'noreply@theassessmentlibrary.com',
        To: participant.email,
        Subject: `${inviterName} wants your perspective on an assessment`,
        TextBody: `${inviterName} has invited you to take "${assessment.title}" on The Assessment Library.\n\nYou'll answer each question as you think ${inviterName} would answer — it's a way for them to see how well others understand their personality style.\n\nClick here to begin: ${inviteLink}\n\nYou'll need to be logged in to your Assessment Library account. New to The Assessment Library? Register here and your first assessment is on us:\n${baseUrl}/auth/registration?participant=${participant._id}&invitation=${invitation._id}`,
        HtmlBody: `<p><strong>${inviterName}</strong> has invited you to take <strong>"${assessment.title}"</strong> on The Assessment Library.</p><p>Answer each question as you think <strong>${inviterName}</strong> would answer them — it's a fun way for them to see how well others understand their personality style.</p><p><a href="${inviteLink}" style="background:#00679b;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block;">Begin Assessment</a></p><p style="font-size:13px;color:#555;">You'll need to be logged in to your Assessment Library account. New to The Assessment Library? <a href="${baseUrl}/auth/registration?participant=${participant._id}&invitation=${invitation._id}">Create a free account</a> — your first assessment is on us.</p>`
      });
    } catch (emailErr) {
      console.error('Error sending invite email:', emailErr);
    }

    res.json(participant);
  } catch (err) {
    console.error('Invite to assessment error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const verifyInvite = async (req, res) => {
  try {
    const { participant: participantId, invitation: invitationId } = req.query;
    if (!participantId || !invitationId) {
      return res.status(400).json({ message: 'participant and invitation params required' });
    }
    const participant = await Participant.findById(participantId).populate('invitedBy', 'name email');
    if (!participant) return res.status(404).json({ message: 'Invitation not found' });

    const invitation = participant.invitations.id(invitationId);
    if (!invitation) return res.status(404).json({ message: 'Invitation not found' });

    res.json({
      inviterName: participant.invitedBy.name || participant.invitedBy.email,
      inviterUserId: participant.invitedBy._id,
      assessmentTitle: invitation.assessmentTitle,
      assessmentSlug: invitation.assessmentSlug,
      participantId: participant._id,
      invitationId: invitation._id,
      invitationStatus: invitation.status
    });
  } catch (err) {
    console.error('Verify invite error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { authenticate, getParticipants, addParticipant, inviteToAssessment, verifyInvite };
