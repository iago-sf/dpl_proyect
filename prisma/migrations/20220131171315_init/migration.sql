/*
  Warnings:

  - Added the required column `cuantity` to the `addCrypto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `addcrypto` ADD COLUMN `cuantity` DECIMAL(17, 10) NOT NULL;
