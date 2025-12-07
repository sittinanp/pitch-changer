/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "pc"."Account";

-- DropTable
DROP TABLE "pc"."User";

-- CreateTable
CREATE TABLE "account" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_by" TEXT NOT NULL DEFAULT 'system',
    "create_date_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" TEXT NOT NULL DEFAULT 'system',
    "update_date_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acct_refresh_token" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "account_id" UUID NOT NULL,
    "token_hash" VARCHAR(255) NOT NULL,
    "replaced_by_token" VARCHAR(255),
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    "ip_address" VARCHAR(50),
    "user_agent" VARCHAR(255),
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "acct_refresh_token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_username_key" ON "account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "account_email_key" ON "account"("email");

-- CreateIndex
CREATE INDEX "acct_refresh_token_account_id_idx" ON "acct_refresh_token"("account_id");

-- CreateIndex
CREATE INDEX "acct_refresh_token_token_hash_idx" ON "acct_refresh_token"("token_hash");

-- AddForeignKey
ALTER TABLE "acct_refresh_token" ADD CONSTRAINT "acct_refresh_token_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
