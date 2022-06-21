import { celebrate } from 'celebrate';
import { Router } from 'express';

import { CreateGameController } from '@modules/games/useCases/createGame/CreateGameController';
import { ListGamesController } from '@modules/games/useCases/listGames/ListGamesController';
import { createValidator } from '@shared/validator';

const registerGame = new CreateGameController();
const listGames = new ListGamesController();
const gameRoutes = Router();

gameRoutes.post('/', celebrate(createValidator), registerGame.handle);
gameRoutes.get('/', listGames.handle);

export { gameRoutes };
