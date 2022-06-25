import { container } from 'tsyringe';

import { IGameRepository } from '@modules/games/repositories/IGameRepository';

import { GameRepository } from '../../modules/games/infra/repositories/GameRepository';

container.registerSingleton<IGameRepository>('GameRepository', GameRepository);
