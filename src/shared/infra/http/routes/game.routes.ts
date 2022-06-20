import { Router } from 'express';

import { CreateGameController } from '@modules/games/useCases/createGame/CreateGameController';

const gameFactor = new CreateGameController();
const gameRoutes = Router();

gameRoutes.post('/', gameFactor.handle);

export { gameRoutes };
