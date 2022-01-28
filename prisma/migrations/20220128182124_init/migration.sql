-- CreateTable
CREATE TABLE `User` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `username` VARCHAR(15) NOT NULL,
    `email` VARCHAR(25) NOT NULL,
    `password` VARCHAR(64) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Portfolio` (
    `portfolioId` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(20) NOT NULL,
    `description` VARCHAR(191) NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`portfolioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Crypto` (
    `cryptoId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `tag` VARCHAR(8) NOT NULL,
    `supply` BIGINT UNSIGNED NOT NULL DEFAULT 0,

    UNIQUE INDEX `Crypto_name_key`(`name`),
    UNIQUE INDEX `Crypto_tag_key`(`tag`),
    PRIMARY KEY (`cryptoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CryptoToPortfolio` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_CryptoToPortfolio_AB_unique`(`A`, `B`),
    INDEX `_CryptoToPortfolio_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Portfolio` ADD CONSTRAINT `Portfolio_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CryptoToPortfolio` ADD FOREIGN KEY (`A`) REFERENCES `Crypto`(`cryptoId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CryptoToPortfolio` ADD FOREIGN KEY (`B`) REFERENCES `Portfolio`(`portfolioId`) ON DELETE CASCADE ON UPDATE CASCADE;
