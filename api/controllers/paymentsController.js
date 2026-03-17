const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const jwt = require('jsonwebtoken');

let User = require('../models/User');
User = User.default || User;

const CreditTransaction = require('../models/CreditTransaction');

// Price IDs come from .env after running scripts/setup-stripe-products.js
// Falls back to inline price_data if IDs are not yet set.
const CREDIT_PACKAGES = [
  {
    id: 'credits_1',
    credits: 1,
    cents: 199,
    label: '1 Credit',
    description: 'Try a single assessment',
    priceIds: {
      one_time: process.env.STRIPE_PRICE_1_ONE_TIME || null,
      monthly:  process.env.STRIPE_PRICE_1_MONTHLY  || null,
    },
  },
  {
    id: 'credits_5',
    credits: 5,
    cents: 799,
    label: '5 Credits',
    description: 'Great for individuals and small teams',
    priceIds: {
      one_time: process.env.STRIPE_PRICE_5_ONE_TIME || null,
      monthly:  process.env.STRIPE_PRICE_5_MONTHLY  || null,
    },
  },
  {
    id: 'credits_10',
    credits: 10,
    cents: 1399,
    label: '10 Credits',
    description: 'Best value for teams and organizations',
    priceIds: {
      one_time: process.env.STRIPE_PRICE_10_ONE_TIME || null,
      monthly:  process.env.STRIPE_PRICE_10_MONTHLY  || null,
    },
  },
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

async function fulfillCredits(userId, credits, packageId, paymentReference, note) {
  const existing = await CreditTransaction.findOne({ paymentReference });
  if (existing) return { alreadyFulfilled: true, creditsAdded: existing.credits };

  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  user.creditsBalance        = (user.creditsBalance || 0) + credits;
  user.totalCreditsPurchased = (user.totalCreditsPurchased || 0) + credits;
  await user.save();

  await CreditTransaction.create({
    user: user._id,
    type: 'purchase',
    credits,
    paymentReference,
    note,
  });

  return { alreadyFulfilled: false, creditsAdded: credits, newBalance: user.creditsBalance };
}

// ─── Public routes ────────────────────────────────────────────────────────────

exports.getPackages = (req, res) => {
  const packages = CREDIT_PACKAGES.map(p => ({
    id:          p.id,
    credits:     p.credits,
    cents:       p.cents,
    label:       p.label,
    description: p.description,
  }));
  res.json({ packages });
};

exports.createCheckoutSession = async (req, res) => {
  try {
    const userId = getUserIdFromReq(req);
    if (!userId) return res.status(401).json({ message: 'Not authenticated' });

    const { packageId, billingMode = 'one_time' } = req.body;
    const pkg = CREDIT_PACKAGES.find(p => p.id === packageId);
    if (!pkg) return res.status(400).json({ message: 'Invalid package' });

    const isMonthly = billingMode === 'monthly';
    const priceId   = isMonthly ? pkg.priceIds.monthly : pkg.priceIds.one_time;

    // Use pre-created Stripe price ID when available, otherwise build inline price_data
    const lineItem = priceId
      ? { price: priceId, quantity: 1 }
      : {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${pkg.label} — The Assessment Library`,
              description: pkg.description,
            },
            unit_amount: pkg.cents,
            ...(isMonthly ? { recurring: { interval: 'month' } } : {}),
          },
          quantity: 1,
        };

    const baseUrl = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
    const successUrl = `${baseUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}${isMonthly ? '&billing=monthly' : ''}`;

    const sessionParams = {
      payment_method_types: ['card'],
      line_items: [lineItem],
      mode: isMonthly ? 'subscription' : 'payment',
      success_url: successUrl,
      cancel_url:  `${baseUrl}/payment/cancel`,
      metadata: {
        userId,
        credits:    String(pkg.credits),
        packageId:  pkg.id,
        billingMode,
      },
    };

    // Store userId/credits on the subscription itself so the invoice webhook can read it
    if (isMonthly) {
      sessionParams.subscription_data = {
        metadata: {
          userId,
          credits:   String(pkg.credits),
          packageId: pkg.id,
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
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

    const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);

    // Security: ensure the logged-in user matches the session owner
    if (stripeSession.metadata.userId !== userId) {
      return res.status(403).json({ message: 'User mismatch' });
    }

    const isSubscription = stripeSession.mode === 'subscription';

    // For subscriptions Stripe may report payment_status as 'no_payment_required' briefly;
    // treat an active subscription as paid.
    const isPaid =
      stripeSession.payment_status === 'paid' ||
      (isSubscription && stripeSession.status === 'complete');

    if (!isPaid) {
      return res.status(400).json({ message: 'Payment not completed' });
    }

    const credits = Number(stripeSession.metadata.credits);
    const note    = isSubscription
      ? `Stripe subscription initial: ${stripeSession.metadata.packageId}`
      : `Stripe checkout: ${stripeSession.metadata.packageId}`;

    const result = await fulfillCredits(userId, credits, stripeSession.metadata.packageId, sessionId, note);

    const user = await User.findById(userId).select('creditsBalance');
    res.json({
      creditsAdded:     result.creditsAdded,
      creditsBalance:   user ? user.creditsBalance : result.newBalance,
      alreadyFulfilled: result.alreadyFulfilled,
      isSubscription,
    });
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
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.error('Stripe webhook signature error:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  } else {
    try {
      event = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch (err) {
      return res.status(400).send('Invalid webhook payload');
    }
  }

  try {
    // One-time payment fallback (in case success page never called verifyAndFulfill)
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      if (session.mode === 'payment' && session.payment_status === 'paid') {
        const { userId, credits, packageId } = session.metadata;
        await fulfillCredits(
          userId, Number(credits), packageId, session.id,
          `Stripe webhook one-time: ${packageId}`
        );
      }
    }

    // Subscription renewal — fires each billing cycle after the first
    if (event.type === 'invoice.paid') {
      const invoice = event.data.object;
      if (invoice.billing_reason === 'subscription_cycle') {
        const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
        const { userId, credits, packageId } = subscription.metadata;
        if (userId && credits) {
          await fulfillCredits(
            userId, Number(credits), packageId, invoice.id,
            `Stripe subscription renewal: ${packageId}`
          );
        }
      }
    }
  } catch (err) {
    console.error('Webhook fulfillment error:', err);
    return res.status(500).send('Fulfillment error');
  }

  res.json({ received: true });
};
