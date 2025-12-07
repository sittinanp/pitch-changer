import crypto from "crypto";
import jwt from "jsonwebtoken";
import { env } from "../config/env"

const ACCESS_TOKEN_SECRET = env.ACCESS_TOKEN_SECRET!;
const ACCESS_TOKEN_EXPIRES_IN = "24h";
const REFRESH_TOKEN_BYTES = 48;

export function createAccessToken(payload: object): string {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
}
export function generateRefreshToken(): string {
  return crypto.randomBytes(REFRESH_TOKEN_BYTES).toString("base64url");
}

export function hashRefreshToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}
