import { ListGamesUseCase } from './ListGamesUseCase';

describe('ListGamesUseCase', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  const data = {
    id: '48800d2b-74eb-4b55-887e-21f58d1d67e5'
  };

  test('should be able to list games', async () => {
    const mockRepository = {
      create: jest.fn().mockResolvedValueOnce({}),
      list: jest.fn().mockResolvedValueOnce(data)
    };
    const listGamesUseCase = new ListGamesUseCase(mockRepository);
    const result = await listGamesUseCase.execute();

    expect(result).toEqual(data);
    expect(result).toHaveProperty('id');
  });
});
