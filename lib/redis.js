

import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL, // Ensure to set this in your environment variables
});

// checking the error
redisClient.on('error', (err) => console.error('Redis error:', err));

// connect to redis server
redisClient.connect();


// This allows other modules to interact with the Redis server using the same client instance.
export default redisClient;
