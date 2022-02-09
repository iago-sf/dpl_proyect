/*
  Warnings:

  - You are about to alter the column `supply` on the `Crypto` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Crypto" ALTER COLUMN "supply" SET DEFAULT 0,
ALTER COLUMN "supply" SET DATA TYPE INTEGER;
