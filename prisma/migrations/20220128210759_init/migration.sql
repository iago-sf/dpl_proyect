/*
  Warnings:

  - You are about to drop the `_cryptotoportfolio` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_cryptotoportfolio` DROP FOREIGN KEY `_cryptotoportfolio_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_cryptotoportfolio` DROP FOREIGN KEY `_cryptotoportfolio_ibfk_2`;

-- DropTable
DROP TABLE `_cryptotoportfolio`;

-- CreateTable
CREATE TABLE `addCrypto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `portfolioId` INTEGER NOT NULL,
    `cryptoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `addCrypto` ADD CONSTRAINT `addCrypto_portfolioId_fkey` FOREIGN KEY (`portfolioId`) REFERENCES `Portfolio`(`portfolioId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addCrypto` ADD CONSTRAINT `addCrypto_cryptoId_fkey` FOREIGN KEY (`cryptoId`) REFERENCES `Crypto`(`cryptoId`) ON DELETE RESTRICT ON UPDATE CASCADE;
