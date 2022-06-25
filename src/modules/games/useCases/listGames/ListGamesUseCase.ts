import { inject, injectable } from 'tsyringe';

import { Game } from '@modules/games/infra/entities/Game';

import { IGameRepository } from '../../repositories/IGameRepository';

@injectable()
class ListGamesUseCase {
  constructor(
    @inject('GameRepository')
    private gameRepository: IGameRepository
  ) {}
  async execute(): Promise<Game[]> {
    const result = await this.gameRepository.list();
    return result;
  }
}

export { ListGamesUseCase };
