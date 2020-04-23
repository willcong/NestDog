export default () => ({
  port: parseInt(process.env.PORT, 10) || 6001,
  database1: {
    host: process.env.DATABASE_HOST || "invalid host",
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432
  },
  database2: {
    host: process.env.DATABASE_HOST2 || "invalid host",
    port: parseInt(process.env.DATABASE_PORT2, 10) || 6543
  },
  jwtConstants: {
    secret: process.env.JWT_SECRET || "secretKey",
    expiresIn: process.env.JWT_EXPIRESIN || "60s"
  }
});
