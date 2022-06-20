import { Request, Response } from 'express';
import { container } from 'tsyringe';

import Logger from '@shared/logger';

import { ListGamesUseCase } from './ListGamesUseCase';

class ListGamesController {
  async handle(_req: Request, res: Response): Promise<Response> {
    Logger.info('Entrou no método handle dentro do ListGamesController');

    const listGames = container.resolve(ListGamesUseCase);

    Logger.info('Invocou o método execute dentro do ListGamesController');
    const list = await listGames.execute();

    return res.status(200).send(list);
  }
}

export { ListGamesController };
