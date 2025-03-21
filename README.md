# Redis Rate Limiter
A simple Node.js API with Redis-based rate limiting.

## Features
- Limits requests to 10 per minute per IP.
- Uses Redis for fast, expiring counters.
- Runs in Docker for easy setup.

## Setup
1. Clone the repo: `git clone https://github.com/thekubera/redis-rate-limiter`
2. Run: `docker compose up --build`
3. Test: `curl http://localhost:3000/hello`

## Testing
Run `./test.sh` to simulate 15 requests:
- First 10 return "Hello, world!"
- Next 5 return "Too many requests, try again later!"

Note: Make the script executable first, if not: `chmod +x test.sh`
