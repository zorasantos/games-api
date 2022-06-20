/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IGameRepository } from '@modules/games/repositories/IGameRepository';
import { prismaClient } from '@shared/infra/prisma/prismaClient';
import Logger from '@shared/logger';

import { Game } from '../entities/Game';

class GameRepository implements IGameRepository {
  async create({ name, designer, genre, platform, developer, releaseData, mode }: Game): Promise<void> {
    Logger.info('Entrou no método create no GameRepository');

    Logger.info('Invocou o método create do prisma client no GameRepository');
    await prismaClient.games.create({
      data: {
        name,
        designer,
        genre,
        platform,
        developer,
        releaseData,
        mode
      }
    });
  }
}

export { GameRepository };
