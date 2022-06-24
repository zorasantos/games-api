import { Request } from 'express';

import { getMockReq, getMockRes } from '@jest-mock/express';

import { CreateGameController } from './CreateGameController';

jest.mock('./CreateGameUseCase.ts');

describe('CreateGameController', () => {
  it('should be able create a new register game', async () => {
    const createGameController = new CreateGameController();

    const req: Request = getMockReq();
    const { res } = getMockRes();

    const response = await createGameController.handle(req, res);

    expect(response).not.toBeNull();
    expect(response.status).toHaveBeenCalledWith(201);
    expect(response.send).toHaveBeenCalledWith({ message: 'Register created successfully' });
  });
});
