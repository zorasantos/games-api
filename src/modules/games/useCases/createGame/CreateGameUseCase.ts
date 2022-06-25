import { inject, injectable } from 'tsyringe';

import { ICreateGameDTO } from '@modules/games/dtos/ICreateGameDTO';

import Logger from '../../../../shared/logger';
import { IGameRepository } from '../../repositories/IGameRepository';

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
