-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" VARCHAR(15) NOT NULL,
    "email" VARCHAR(25) NOT NULL,
    "password" VARCHAR(64) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Portfolio" (
    "portfolioId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(20) NOT NULL,
    "description" VARCHAR(255),
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("portfolioId")
);

-- CreateTable
CREATE TABLE "Crypto" (
    "cryptoId" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "tag" VARCHAR(8) NOT NULL,
    "supply" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "Crypto_pkey" PRIMARY KEY ("cryptoId")
);

-- CreateTable
CREATE TABLE "addCrypto" (
    "id" SERIAL NOT NULL,
    "cuantity" DECIMAL(17,10) NOT NULL,
    "addedPrice" DECIMAL(17,10) NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "portfolioId" INTEGER NOT NULL,
    "cryptoId" INTEGER NOT NULL,

    CONSTRAINT "addCrypto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Crypto_name_key" ON "Crypto"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Crypto_tag_key" ON "Crypto"("tag");

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addCrypto" ADD CONSTRAINT "addCrypto_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio"("portfolioId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addCrypto" ADD CONSTRAINT "addCrypto_cryptoId_fkey" FOREIGN KEY ("cryptoId") REFERENCES "Crypto"("cryptoId") ON DELETE CASCADE ON UPDATE CASCADE;
