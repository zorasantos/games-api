import { Request } from 'express';

import { getMockReq, getMockRes } from '@jest-mock/express';

import { ListGamesController } from './ListGamesController';

jest.mock('./ListGamesUseCase.ts');

describe('ListGamesController', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be able create to list game controller successfully', async () => {
    const listGamesController = new ListGamesController();

    const req: Request = getMockReq();
    const { res } = getMockRes();

    const response = await listGamesController.handle(req, res);

    expect(response).not.toBeNull();
    expect(response.status).toHaveBeenCalledWith(200);
  });
});
