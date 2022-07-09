-- AlterTable
ALTER TABLE "User" ALTER COLUMN "emailVerified" DROP NOT NULL,
ALTER COLUMN "userRole" SET DEFAULT 'user',
ALTER COLUMN "userType" SET DEFAULT 'customer';
