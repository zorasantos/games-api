import { GameRepository } from '@modules/games/infra/repositories/GameRepository';

import { CreateGameController } from './CreateGameController';
import { CreateGameUseCase } from './CreateGameUseCase';

const createGameFactory = (): CreateGameController => {
  const gameRepository = new GameRepository();
  const createGameUseCase = new CreateGameUseCase(gameRepository);
  return new CreateGameController(createGameUseCase);
};

export { createGameFactory };
