import { Request, Response } from 'express';

import { ICreateGameDTO } from '@modules/games/dtos/ICreateGameDTO';
import Logger from '@shared/logger';

import { CreateGameUseCase } from './CreateGameUseCase';

class CreateGameController {
  constructor(private createGame: CreateGameUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    Logger.info('Entrou no handle do CreateGameController');
    const { nome, nomeCriador, dataLancamento, genero, estudio, plataforma }: ICreateGameDTO = req.body;

    Logger.info('Executou o método execute no CreateGameController');
    const game = await this.createGame.execute({
      nome,
      nomeCriador,
      dataLancamento,
      genero,
      estudio,
      plataforma
    });
    Logger.info(game);
    return res.status(201).send(game);
  }
}

export { CreateGameController };
