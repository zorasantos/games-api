import { ICreateGameDTO } from '@modules/games/dtos/ICreateGameDTO';
import { IGameRepository } from '@modules/games/repositories/IGameRepository';
import Logger from '@shared/logger';

class CreateGameUseCase {
  constructor(private gameRepository: IGameRepository) {}
  async execute({
    nome,
    nomeCriador,
    dataLancamento,
    genero,
    estudio,
    plataforma
  }: ICreateGameDTO): Promise<void> {
    Logger.info('Entro método execute dentro do CreateGameUseCase');
    await this.gameRepository.create({
      nome,
      nomeCriador,
      dataLancamento,
      genero,
      estudio,
      plataforma
    });
  }
}

export { CreateGameUseCase };
