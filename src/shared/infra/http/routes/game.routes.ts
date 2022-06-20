import { Router } from 'express';

import { CreateGameController } from '@modules/games/useCases/createGame/CreateGameController';
import { ListGamesController } from '@modules/games/useCases/listGames/ListGamesController';

const registerGame = new CreateGameController();
const listGames = new ListGamesController();
const gameRoutes = Router();

gameRoutes.post('/', registerGame.handle);
gameRoutes.get('/', listGames.handle);

export { gameRoutes };
