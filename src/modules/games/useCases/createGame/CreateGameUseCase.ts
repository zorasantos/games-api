import { inject, injectable } from 'tsyringe';

import { ICreateGameDTO } from '@modules/games/dtos/ICreateGameDTO';
import { IGameRepository } from '@modules/games/repositories/IGameRepository';
import Logger from '@shared/logger';

@injectable()
class CreateGameUseCase {
  constructor(
    @inject('GameRepository')
    private gameRepository: IGameRepository
  ) {}
  async execute({
    name,
    designer,
    genre,
    platform,
    developer,
    releaseData,
    mode
  }: ICreateGameDTO): Promise<void> {
    Logger.info('Entrou no método execute dentro do CreateGameUseCase');

    Logger.info('Invocou o método create dentro do CreateGameUseCase');
    await this.gameRepository.create({
      name,
      designer,
      genre,
      platform,
      developer,
      releaseData,
      mode
    });
  }
}

export { CreateGameUseCase };
