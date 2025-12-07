import { Pool } from "pg";
import { env } from "../config/env";

const pool = new Pool({
  user: env.DB_USER,
  host: env.DB_HOST,
  database: env.DB_NAME,
  password: env.DB_PASS,
  port: Number(env.DB_PORT),
});

export default pool;