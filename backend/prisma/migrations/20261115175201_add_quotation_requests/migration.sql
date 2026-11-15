-- CreateTable
CREATE TABLE "QuotationRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "styles" INTEGER NOT NULL,
    "poNumber" TEXT,
    "poQuantity" INTEGER NOT NULL,
    "inspectionLevel" TEXT NOT NULL,
    "pomCount" INTEGER NOT NULL,
    "aqlCritical" TEXT NOT NULL,
    "aqlMajor" TEXT NOT NULL,
    "aqlMinor" TEXT NOT NULL,
    "specialRequirements" TEXT,
    "manDays" DOUBLE PRECISION,
    "inspectionsPerMonth" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuotationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "QuotationRequest_userId_createdAt_idx" ON "QuotationRequest"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "QuotationRequest" ADD CONSTRAINT "QuotationRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

