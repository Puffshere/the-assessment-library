'use strict';

// One-off migration: rewrite Assessment.heroImageUrl from the direct
// Backblaze B2 host to the Cloudflare-fronted CDN host.
//
// Usage:
//   node scripts/migrate-hero-urls.js --dry-run   # preview, no writes
//   node scripts/migrate-hero-urls.js             # apply
//
// Idempotent: rows already migrated do not match the filter.

require('dotenv').config();
const mongoose = require('mongoose');
const Assessment = require('../api/models/Assessment');

const OLD_PREFIX_FULL = 'https://f004.backblazeb2.com/file/library-assessments/';
const OLD_PREFIX_REPLACE = 'https://f004.backblazeb2.com/file/library-assessments';
const NEW_PREFIX = 'https://cdn.theassessmentlibrary.com';

const dryRun = process.argv.includes('--dry-run');

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function main() {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not set. Aborting.');
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const filter = { heroImageUrl: { $regex: '^' + escapeRegex(OLD_PREFIX_FULL) } };

  const matchCount = await Assessment.countDocuments(filter);
  console.log('Mode: ' + (dryRun ? 'DRY RUN (no writes)' : 'WRITE'));
  console.log('Source prefix: ' + OLD_PREFIX_FULL);
  console.log('Target prefix: ' + NEW_PREFIX + '/');
  console.log('Matching documents: ' + matchCount);

  if (matchCount === 0) {
    console.log('Nothing to migrate. Exiting.');
    await mongoose.disconnect();
    return;
  }

  const sample = await Assessment.find(filter)
    .limit(5)
    .select('_id slug heroImageUrl')
    .lean();

  console.log('\nSample of changes (up to 5):');
  for (const doc of sample) {
    const after = NEW_PREFIX + doc.heroImageUrl.slice(OLD_PREFIX_REPLACE.length);
    console.log('  ' + doc.slug + ' (' + doc._id + ')');
    console.log('    BEFORE: ' + doc.heroImageUrl);
    console.log('    AFTER:  ' + after);
  }

  if (dryRun) {
    console.log('\nDry run complete. Re-run without --dry-run to apply.');
    await mongoose.disconnect();
    return;
  }

  const result = await Assessment.updateMany(filter, [
    {
      $set: {
        heroImageUrl: {
          $replaceOne: {
            input: '$heroImageUrl',
            find: OLD_PREFIX_REPLACE,
            replacement: NEW_PREFIX,
          },
        },
      },
    },
  ]);

  const modified = result.modifiedCount != null ? result.modifiedCount : result.nModified;
  console.log('\nMigration complete. Modified: ' + modified + ' / Matched: ' + matchCount);
  await mongoose.disconnect();
}

main().catch(function (err) {
  console.error('Migration failed:', err);
  mongoose.disconnect().finally(function () {
    process.exit(1);
  });
});
