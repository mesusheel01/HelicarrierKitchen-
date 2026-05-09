-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Mananger', 'Member');

-- CreateEnum
CREATE TYPE "Country" AS ENUM ('India', 'America');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "country" "Country" NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
