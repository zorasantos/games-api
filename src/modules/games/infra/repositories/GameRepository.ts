/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IGameRepository } from '@modules/games/repositories/IGameRepository';
import { prismaClient } from '@shared/infra/prisma/prismaClient';
import Logger from '@shared/logger';

import { Game } from '../entities/Game';

class GameRepository implements IGameRepository {
  async create({ nome, nomeCriador, genero, dataLancamento, estudio, plataforma }: Game): Promise<void> {
    const game = await prismaClient.games.create({
      data: {
        nome,
        nomeCriador,
        genero,
        dataLancamento,
        estudio,
        plataforma
      }
    });

    Logger.info(game);
  }
}

export { GameRepository };
