// middleware/rateLimiter.js
const rateLimit = {};
const RATE_LIMIT_WINDOW = 30000; // 30 seconds
const MAX_ATTEMPTS = 5;

export const loginRateLimiter = (req, res, next) => {
  const { userId } = req.body; // Get userId from request body
  const now = Date.now();

  if (!rateLimit[userId]) {
    rateLimit[userId] = { count: 1, lastAttempt: now };
  } else {
    const elapsed = now - rateLimit[userId].lastAttempt;

    if (elapsed < RATE_LIMIT_WINDOW) {
      rateLimit[userId].count += 1;
    } else {
      // Reset count after the time window
      rateLimit[userId].count = 1;
    }

    rateLimit[userId].lastAttempt = now;
  }

  if (rateLimit[userId].count > MAX_ATTEMPTS) {
    const remainingTime = Math.ceil((RATE_LIMIT_WINDOW - (now - rateLimit[userId].lastAttempt)) / 1000);
    console.log("too many attempts");
    return res.status(429).json({ error: `Too many login attempts. Please try again in ${remainingTime} seconds.` });
  }

  next(); // Proceed to the login function
};