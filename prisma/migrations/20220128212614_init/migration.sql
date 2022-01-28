/*
  Warnings:

  - Added the required column `addedPrice` to the `addCrypto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `addcrypto` ADD COLUMN `addedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `addedPrice` DECIMAL(17, 10) NOT NULL;
