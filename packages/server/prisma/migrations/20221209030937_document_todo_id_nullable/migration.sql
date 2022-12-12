-- DropForeignKey
ALTER TABLE "document" DROP CONSTRAINT "document_todo_id_fkey";

-- AlterTable
ALTER TABLE "document" ALTER COLUMN "todo_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "document" ADD CONSTRAINT "document_todo_id_fkey" FOREIGN KEY ("todo_id") REFERENCES "todo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
