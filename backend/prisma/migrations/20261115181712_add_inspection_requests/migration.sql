-- CreateTable
CREATE TABLE "InspectionRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "styles" INTEGER NOT NULL,
    "poNumber" TEXT NOT NULL,
    "poQuantity" INTEGER NOT NULL,
    "inspectionLevel" TEXT NOT NULL,
    "pomCount" INTEGER NOT NULL,
    "aqlCritical" TEXT NOT NULL,
    "aqlMajor" TEXT NOT NULL,
    "aqlMinor" TEXT NOT NULL,
    "specialRequirements" TEXT NOT NULL,
    "inspectionDate" DATE NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InspectionRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "InspectionRequest_userId_createdAt_idx" ON "InspectionRequest"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "InspectionRequest" ADD CONSTRAINT "InspectionRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

