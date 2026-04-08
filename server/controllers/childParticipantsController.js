const jwt = require('jsonwebtoken');

const UserModule = require('../../api/models/User');
const User = UserModule.default || UserModule;

const ChildParticipant = require('../models/ChildParticipant');
const Assessment = require('../../api/models/Assessment');

const ChildProfileModule = require('../../api/models/ChildProfile');
const ChildProfile = ChildProfileModule.default || ChildProfileModule;

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
      console.error('JWT verify error (childParticipants):', err);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    const userId = decoded.id || decoded._id;
    const user = await User.findById(userId).select('-password');

    if (!user) return res.status(401).json({ message: 'User not found' });

    req.user = user;
    next();
  } catch (err) {
    console.error('Auth error (childParticipantsController.authenticate):', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getParticipants = async (req, res) => {
  try {
    const { childProfileId } = req.query;
    if (!childProfileId) {
      return res.status(400).json({ message: 'childProfileId query param required' });
    }

    const participants = await ChildParticipant.find({
      parentUserId: req.user._id,
      childProfileId
    }).sort({ createdAt: -1 });

    res.json(participants);
  } catch (err) {
    console.error('Get child participants error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addParticipant = async (req, res) => {
  try {
    const { name, email, childProfileId } = req.body;

    if (!name || !email || !childProfileId) {
      return res.status(400).json({ message: 'Name, email, and childProfileId are required' });
    }

    const participant = await ChildParticipant.create({
      parentUserId: req.user._id,
      childProfileId,
      name,
      email
    });

    res.status(201).json(participant);
  } catch (err) {
    console.error('Add child participant error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const inviteToAssessment = async (req, res) => {
  try {
    const { assessmentSlug } = req.body;

    const participant = await ChildParticipant.findOne({
      _id: req.params.id,
      parentUserId: req.user._id
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

    const childProfile = await ChildProfile.findById(participant.childProfileId);
    const childName = childProfile ? childProfile.childName : 'the child';

    participant.invitations.push({
      assessment: assessment._id,
      assessmentTitle: assessment.title,
      assessmentSlug: assessment.slug,
      status: 'invited',
      invitedAt: new Date()
    });

    await participant.save();

    try {
      if (!process.env.POSTMARK_SERVER_TOKEN) throw new Error('POSTMARK_SERVER_TOKEN not set');
      const postmark = require('postmark');
      const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);
      const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
      const invitation = participant.invitations[participant.invitations.length - 1];
      const inviteLinkBase = `${baseUrl}/library/${assessment.slug}?childParticipant=${participant._id}&invitation=${invitation._id}`;
      const signInLink = inviteLinkBase;
      const guestLink = `${inviteLinkBase}&guest=true`;
      const parentName = req.user.name || req.user.email;
      await client.sendEmail({
        From: 'noreply@theassessmentlibrary.com',
        To: participant.email,
        Subject: `${parentName} has invited you to share your perspective on ${childName}`,
        TextBody: `${parentName} has invited you to take "${assessment.title}" and answer each question as you think ${childName} would respond — helping ${parentName} better understand ${childName}'s personality style.\n\nSign in to earn 1 free credit:\n${signInLink}\n\nOr begin as a guest (no account required, progress only saved on completion):\n${guestLink}`,
        HtmlBody: `<p><strong>${parentName}</strong> has invited you to take <strong>"${assessment.title}"</strong> and answer each question as you think <strong>${childName}</strong> would respond — helping ${parentName} better understand ${childName}'s personality style.</p><p style="margin:24px 0 12px;"><a href="${signInLink}" style="background:#00679b;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;font-weight:600;">Begin Assessment (Sign in to earn 1 free credit)</a></p><p style="margin:12px 0 24px;"><a href="${guestLink}" style="background:#555;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;font-weight:600;">Begin as Guest (no account required, progress only saved on completion)</a></p>`
      });
    } catch (emailErr) {
      console.error('Error sending child participant invite email:', emailErr);
    }

    res.json(participant);
  } catch (err) {
    console.error('Child invite to assessment error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const verifyInvite = async (req, res) => {
  try {
    const { childParticipant: participantId, invitation: invitationId } = req.query;
    if (!participantId || !invitationId) {
      return res.status(400).json({ message: 'childParticipant and invitation params required' });
    }

    const participant = await ChildParticipant.findById(participantId);
    if (!participant) return res.status(404).json({ message: 'Invitation not found' });

    const invitation = participant.invitations.id(invitationId);
    if (!invitation) return res.status(404).json({ message: 'Invitation not found' });

    const childProfile = await ChildProfile.findById(participant.childProfileId);
    const childName = childProfile ? childProfile.childName : 'Unknown';

    res.json({
      childName,
      childProfileId: participant.childProfileId,
      assessmentTitle: invitation.assessmentTitle,
      assessmentSlug: invitation.assessmentSlug,
      participantId: participant._id,
      invitationId: invitation._id
    });
  } catch (err) {
    console.error('Verify child invite error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const guestComplete = async (req, res) => {
  try {
    const { childParticipantId, invitationId, scoreBreakdown } = req.body;
    if (!childParticipantId || !invitationId || !scoreBreakdown) {
      return res.status(400).json({ message: 'childParticipantId, invitationId, and scoreBreakdown are required' });
    }

    const participant = await ChildParticipant.findById(childParticipantId);
    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }

    const invitation = participant.invitations.id(invitationId);
    if (!invitation) {
      return res.status(404).json({ message: 'Invitation not found' });
    }

    invitation.status = 'completed';
    invitation.responseBreakdown = scoreBreakdown;
    invitation.responseSessionId = null;
    await participant.save();

    res.json({ success: true });
  } catch (err) {
    console.error('Guest complete error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { authenticate, getParticipants, addParticipant, inviteToAssessment, verifyInvite, guestComplete };
