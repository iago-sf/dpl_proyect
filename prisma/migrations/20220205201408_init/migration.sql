/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - Added the required column `icon` to the `Crypto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Crypto" ADD COLUMN     "icon" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password";
