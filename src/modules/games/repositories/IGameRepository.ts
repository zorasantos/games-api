import { ICreateGameDTO } from '@modules/games/dtos/ICreateGameDTO';

interface IGameRepository {
  create(data: ICreateGameDTO): Promise<void>;
}

export { IGameRepository };
