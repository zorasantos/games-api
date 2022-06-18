-- CreateTable
CREATE TABLE "Games" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "criador" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "plataforma" TEXT NOT NULL,
    "estudio" TEXT NOT NULL,
    "dataLancamento" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);
