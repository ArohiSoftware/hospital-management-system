-- AlterTable
ALTER TABLE "OPDTreatments" ADD COLUMN     "slot" TEXT,
ALTER COLUMN "follow_up_date" DROP NOT NULL;
