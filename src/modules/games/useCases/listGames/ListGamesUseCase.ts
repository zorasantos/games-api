import { inject, injectable } from 'tsyringe';

import { Game } from '@modules/games/infra/entities/Game';
import { GameRepository } from '@modules/games/infra/repositories/GameRepository';

@injectable()
class ListGamesUseCase {
  constructor(
    @inject('GameRepository')
    private gameRepository: GameRepository
  ) {}
  async execute(): Promise<Game[]> {
    const result = await this.gameRepository.list();
    return result;
  }
}

export { ListGamesUseCase };
