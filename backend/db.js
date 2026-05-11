const mysql = require("mysql2/promise");

/**
 * MySQL connection pool.
 *
 * Locally:
 * - Docker Compose provides DB_HOST=mysql and DB_PORT=3306.
 *
 * On Render:
 * - Render environment variables will provide the Aiven MySQL host,
 *   port, username, password, and database name.
 *
 * dateStrings: true prevents DATETIME values from being automatically
 * converted into JavaScript Date objects, which previously caused
 * reservation times to shift by several hours.
 */
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "waitlist_user",
  password: process.env.DB_PASSWORD || "waitlist_pass",
  database: process.env.DB_NAME || "waitlist_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,

  /**
   * Aiven recommends SSL/TLS connections for MySQL.
   * Using DB_SSL=true in Render enables SSL for the hosted Aiven database,
   * while local Docker development can continue without SSL.
   */
  ssl:
    process.env.DB_SSL === "true"
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
});

module.exports = pool;