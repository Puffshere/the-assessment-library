'use strict';
function adminAuth(req, res, next) {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return res.status(500).json({ error: 'ADMIN_SECRET not configured.' });
  const token = req.headers['x-admin-secret'] || req.body?.adminSecret;
  if (!token || token !== secret) return res.status(401).json({ error: 'Unauthorized.' });
  next();
}
module.exports = adminAuth;
