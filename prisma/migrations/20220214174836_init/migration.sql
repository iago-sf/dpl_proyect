-- DropForeignKey
ALTER TABLE "Portfolio" DROP CONSTRAINT "Portfolio_ownerId_fkey";

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
