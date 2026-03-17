const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const jwt = require('jsonwebtoken');

let User = require('../models/User');
User = User.default || User;

const CreditTransaction = require('../models/CreditTransaction');

const CREDIT_PACKAGES = [
  { id: 'credits_1',  credits: 1,  price: 500,  label: '1 Credit',   description: 'Perfect for trying a single assessment' },
  { id: 'credits_5',  credits: 5,  price: 2000, label: '5 Credits',  description: 'Great for individuals and small teams' },
  { id: 'credits_10', credits: 10, price: 3500, label: '10 Credits', description: 'Best value for teams and organizations' },
];

function getUserIdFromReq(req) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return (decoded.id || decoded._id || '').toString();
  } catch (e) {
    return null;
  }
}

exports.getPackages = (req, res) => {
  res.json({ packages: CREDIT_PACKAGES });
};

exports.createCheckoutSession = async (req, res) => {
  try {
    const userId = getUserIdFromReq(req);
    if (!userId) return res.status(401).json({ message: 'Not authenticated' });

    const { packageId } = req.body;
    const pkg = CREDIT_PACKAGES.find(p => p.id === packageId);
    if (!pkg) return res.status(400).json({ message: 'Invalid package' });

    const baseUrl = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${pkg.label} — The Assessment Library`,
            description: pkg.description,
          },
          unit_amount: pkg.price,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${baseUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${baseUrl}/payment/cancel`,
      metadata: {
        userId,
        credits: String(pkg.credits),
        packageId: pkg.id,
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe createCheckoutSession error:', err);
    res.status(500).json({ message: err.message || 'Could not create checkout session' });
  }
};

exports.verifyAndFulfill = async (req, res) => {
  try {
    const userId = getUserIdFromReq(req);
    if (!userId) return res.status(401).json({ message: 'Not authenticated' });

    const { sessionId } = req.body;
    if (!sessionId) return res.status(400).json({ message: 'Missing session_id' });

    // Idempotency — already fulfilled
    const existing = await CreditTransaction.findOne({ paymentReference: sessionId });
    if (existing) {
      const user = await User.findById(userId).select('creditsBalance');
      return res.json({ creditsBalance: user ? user.creditsBalance : 0, creditsAdded: existing.credits, alreadyFulfilled: true });
    }

    const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);
    if (stripeSession.payment_status !== 'paid') {
      return res.status(400).json({ message: 'Payment not completed' });
    }

    // Security: logged-in user must match the session owner
    if (stripeSession.metadata.userId !== userId) {
      return res.status(403).json({ message: 'User mismatch' });
    }

    const credits = Number(stripeSession.metadata.credits);
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.creditsBalance = (user.creditsBalance || 0) + credits;
    user.totalCreditsPurchased = (user.totalCreditsPurchased || 0) + credits;
    await user.save();

    await CreditTransaction.create({
      user: user._id,
      type: 'purchase',
      credits,
      paymentReference: sessionId,
      note: `Stripe checkout: ${stripeSession.metadata.packageId}`,
    });

    res.json({ creditsBalance: user.creditsBalance, creditsAdded: credits });
  } catch (err) {
    console.error('Stripe verifyAndFulfill error:', err);
    res.status(500).json({ message: err.message || 'Could not fulfill payment' });
  }
};

exports.handleWebhook = async (req, res) => {
  let event;

  if (process.env.STRIPE_WEBHOOK_SECRET) {
    const sig = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('Stripe webhook signature error:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  } else {
    // No webhook secret configured — parse body directly (dev/test only)
    try {
      event = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch (err) {
      return res.status(400).send('Invalid webhook payload');
    }
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    if (session.payment_status === 'paid') {
      try {
        const existing = await CreditTransaction.findOne({ paymentReference: session.id });
        if (!existing) {
          const credits = Number(session.metadata.credits);
          const userId  = session.metadata.userId;

          const user = await User.findById(userId);
          if (user) {
            user.creditsBalance         = (user.creditsBalance || 0) + credits;
            user.totalCreditsPurchased  = (user.totalCreditsPurchased || 0) + credits;
            await user.save();

            await CreditTransaction.create({
              user: user._id,
              type: 'purchase',
              credits,
              paymentReference: session.id,
              note: `Stripe webhook: ${session.metadata.packageId}`,
            });
          }
        }
      } catch (err) {
        console.error('Webhook fulfillment error:', err);
        return res.status(500).send('Fulfillment error');
      }
    }
  }

  res.json({ received: true });
};
