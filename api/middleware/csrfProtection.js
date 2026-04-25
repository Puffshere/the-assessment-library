const CSRF_EXEMPT_PATHS = [
  '/auth/login',
  '/auth/register',
  '/auth/logout',
  '/auth/forgot-password',
  '/auth/reset-password',
  '/payments/webhook',
  '/child-participants/verify-invite',
  '/child-participants/guest-complete',
];

const csrfProtection = (req, res, next) => {
  // Only check CSRF on state-changing methods
  const stateChangingMethods = ['POST', 'PUT', 'PATCH', 'DELETE'];
  if (!stateChangingMethods.includes(req.method)) {
    return next();
  }

  // Whitelist auth and webhook routes — they don't use cookie auth
  // or are intentionally exempt
  for (const exemptPath of CSRF_EXEMPT_PATHS) {
    if (req.path === exemptPath || req.path.endsWith(exemptPath)) {
      return next();
    }
  }

  // Dual-mode: if request has Authorization header (legacy localStorage auth),
  // skip CSRF check. Cookie-only requests must include CSRF token.
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    return next();
  }

  // If no auth cookie present, this isn't an authenticated request — skip CSRF.
  if (!req.cookies || !req.cookies.tal_token) {
    return next();
  }

  // Cookie auth is being used — require CSRF token
  const headerToken = req.headers['x-csrf-token'];
  const cookieToken = req.cookies.tal_csrf;

  if (!headerToken || !cookieToken || headerToken !== cookieToken) {
    return res.status(403).json({ message: 'Invalid or missing CSRF token' });
  }

  return next();
};

module.exports = csrfProtection;
