const redis = require("redis");

const url = process.env.REDIS_URL || "redis://localhost:6379";
const db = redis.createClient({ url });

db.connect().catch(console.error);

db.on("connect", async () => {
  console.log("Redis is ready");
});

db.on("error", (e) => {
  console.log("Redis error", e);
});

module.exports = { db };
