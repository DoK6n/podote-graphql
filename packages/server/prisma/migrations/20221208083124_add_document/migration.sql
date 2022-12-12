/*
  Warnings:

  - You are about to drop the column `document` on the `todo` table. All the data in the column will be lost.
  - Added the required column `title` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "todo" DROP COLUMN "document",
ADD COLUMN     "document_id" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "document" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "todo_id" TEXT NOT NULL,
    "content" JSONB,
    "created_dt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_dt" TIMESTAMP(3),
    "is_removed" BOOLEAN NOT NULL DEFAULT false,
    "removed_dt" TIMESTAMP(3),

    CONSTRAINT "document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "document_user_id_key" ON "document"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "document_todo_id_key" ON "document"("todo_id");

-- AddForeignKey
ALTER TABLE "document" ADD CONSTRAINT "document_todo_id_fkey" FOREIGN KEY ("todo_id") REFERENCES "todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document" ADD CONSTRAINT "document_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
