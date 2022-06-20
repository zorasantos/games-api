-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nomeCriador" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "plataforma" TEXT NOT NULL,
    "estudio" TEXT NOT NULL,
    "dataLancamento" DATE NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);
