export const env = {
    PORT : 3000 ,
    ACCESS_TOKEN_EXP_MS: Number(process.env.ACCESS_TOKEN_EXP_MS) || 15 * 60 * 1000, // 15 นาที
    REFRESH_TOKEN_EXP_MS: Number(process.env.REFRESH_TOKEN_EXP_MS) || 7 * 24 * 60 * 60 * 1000, // 7 วัน
    ACCESS_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRET,
    DB_USER : process.env.DB_USER,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASS: process.env.DB_PASS,
    DB_PORT: Number(process.env.DB_PORT),
};