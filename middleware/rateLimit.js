const Redis = require('ioredis');

const redis = new Redis({ host: 'redis', port: 6379 });

const rateLimit = async (req, res, next) => {
  const ip = req.ip;
  const key = `rate-limit:${ip}`;
  const maxRequests = 10;
  const windowMs = 60 * 1000;

  try {
    const requests = await redis.get(key);
    const current = requests ? parseInt(requests) : 0;

    if (current >= maxRequests) {
      return res.status(429).json({ message: 'Too many requests, try again later!' });
    }

    await redis.multi()
      .incr(key)
      .expire(key, windowMs / 1000)
      .exec();

    next();
  } catch (err) {
    console.error('Redis error:', err);
    next(); // Fallback: let request through if Redis fails
  }
};

module.exports = rateLimit;