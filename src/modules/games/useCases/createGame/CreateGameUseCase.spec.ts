import { CreateGameUseCase } from './CreateGameUseCase';

describe('CreateGameUseCase', () => {
  const data = {
    name: 'Pole Position',
    designer: 'Kazunori, Sawano Sho Osugi, Shinichiro Okamoto',
    genre: 'Racing',
    platform: 'Arcade',
    developer: 'Namco',
    mode: 'Single-player',
    releaseData: '16/09/1982'
  };

  test('should be able create a new register game', async () => {
    const mockRepository = {
      create: jest.fn().mockResolvedValueOnce({}),
      list: jest.fn().mockResolvedValueOnce({})
    };
    const createGameUseCase = new CreateGameUseCase(mockRepository);
    const result = await createGameUseCase.execute(data);

    expect(result).toBe(undefined);
  });
});
