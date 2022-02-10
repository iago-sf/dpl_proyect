/*
  Warnings:

  - You are about to drop the column `cryptoId` on the `addCrypto` table. All the data in the column will be lost.
  - You are about to drop the `Crypto` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[coin]` on the table `addCrypto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coin` to the `addCrypto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addCrypto" DROP CONSTRAINT "addCrypto_cryptoId_fkey";

-- AlterTable
ALTER TABLE "addCrypto" DROP COLUMN "cryptoId",
ADD COLUMN     "coin" VARCHAR(30) NOT NULL;

-- DropTable
DROP TABLE "Crypto";

-- CreateIndex
CREATE UNIQUE INDEX "addCrypto_coin_key" ON "addCrypto"("coin");
