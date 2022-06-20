import { ICreateGameDTO } from '@modules/games/dtos/ICreateGameDTO';
import { Game } from '@modules/games/infra/entities/Game';

interface IGameRepository {
  create(data: ICreateGameDTO): Promise<void>;
  list(): Promise<Game[]>;
}

export { IGameRepository };
