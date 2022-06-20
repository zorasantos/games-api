import { randomUUID } from 'crypto';

class Game {
  id?: string;
  nome: string;
  nomeCriador: string;
  genero: string;
  plataforma: string;
  estudio: string;
  dataLancamento: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}

export { Game };
