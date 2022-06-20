import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateGameDTO } from '@modules/games/dtos/ICreateGameDTO';
import Logger from '@shared/logger';

import { CreateGameUseCase } from './CreateGameUseCase';

class CreateGameController {
  async handle(req: Request, res: Response): Promise<Response> {
    Logger.info('Entrou no handle do CreateGameController');
    const createGameUseCase = container.resolve(CreateGameUseCase);
    const { name, designer, genre, platform, developer, releaseData, mode }: ICreateGameDTO = req.body;

    Logger.info('Executou o método execute no CreateGameController');
    await createGameUseCase.execute({
      name,
      designer,
      genre,
      platform,
      developer,
      releaseData,
      mode
    });
    return res.status(201).send({ message: 'Register created successfully' });
  }
}

export { CreateGameController };
