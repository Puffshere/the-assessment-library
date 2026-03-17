/**
 * Run once to create Stripe products + prices for all tiers.
 * Usage: node scripts/setup-stripe-products.js
 *
 * Copy the output lines into your .env file.
 */

require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PACKAGES = [
  { id: 'credits_1',  credits: 1,  cents: 199,  name: '1 Assessment Credit',   description: 'Try a single assessment' },
  { id: 'credits_5',  credits: 5,  cents: 799,  name: '5 Assessment Credits',  description: 'Great for individuals and small teams' },
  { id: 'credits_10', credits: 10, cents: 1399, name: '10 Assessment Credits', description: 'Best value for teams and organizations' },
];

async function main() {
  console.log('Creating Stripe products and prices...\n');

  const envLines = [];

  for (const pkg of PACKAGES) {
    const product = await stripe.products.create({
      name: `${pkg.name} — The Assessment Library`,
      description: pkg.description,
      metadata: { packageId: pkg.id, credits: String(pkg.credits) },
    });

    const oneTimePrice = await stripe.prices.create({
      product: product.id,
      unit_amount: pkg.cents,
      currency: 'usd',
      metadata: { packageId: pkg.id, credits: String(pkg.credits), billingMode: 'one_time' },
    });

    const monthlyPrice = await stripe.prices.create({
      product: product.id,
      unit_amount: pkg.cents,
      currency: 'usd',
      recurring: { interval: 'month' },
      metadata: { packageId: pkg.id, credits: String(pkg.credits), billingMode: 'monthly' },
    });

    console.log(`✅ ${pkg.name}`);
    console.log(`   Product:       ${product.id}`);
    console.log(`   One-time:      ${oneTimePrice.id}`);
    console.log(`   Monthly:       ${monthlyPrice.id}\n`);

    envLines.push(`STRIPE_PRICE_${pkg.credits}_ONE_TIME=${oneTimePrice.id}`);
    envLines.push(`STRIPE_PRICE_${pkg.credits}_MONTHLY=${monthlyPrice.id}`);
  }

  console.log('─'.repeat(60));
  console.log('Add these lines to your .env:\n');
  console.log(envLines.join('\n'));
  console.log();
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
