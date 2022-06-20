import { Router } from 'express';

import { createGameFactory } from '@modules/games/useCases/createGame/GameFactory';

const gameFactor = createGameFactory();
const gameRoutes = Router();

gameRoutes.post('/', gameFactor.handle);

export { gameRoutes };
