-- DropForeignKey
ALTER TABLE `addcrypto` DROP FOREIGN KEY `addCrypto_cryptoId_fkey`;

-- DropForeignKey
ALTER TABLE `addcrypto` DROP FOREIGN KEY `addCrypto_portfolioId_fkey`;

-- AddForeignKey
ALTER TABLE `addCrypto` ADD CONSTRAINT `addCrypto_portfolioId_fkey` FOREIGN KEY (`portfolioId`) REFERENCES `Portfolio`(`portfolioId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addCrypto` ADD CONSTRAINT `addCrypto_cryptoId_fkey` FOREIGN KEY (`cryptoId`) REFERENCES `Crypto`(`cryptoId`) ON DELETE CASCADE ON UPDATE CASCADE;
