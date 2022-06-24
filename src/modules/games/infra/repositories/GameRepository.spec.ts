import { prismaMock } from '../../../../../singleton';
import { GameRepository } from './GameRepository';

describe('GameRepository', () => {
  const { create, list } = new GameRepository();

  test('should be able create a new register game', async () => {
    const game = {
      id: '48800d2b-74eb-4b55-887e-21f58d1d67e5',
      name: 'Test name',
      designer: 'Toru Iwatani',
      genre: 'Maze',
      platform: 'Arcade',
      developer: 'Namco',
      releaseData: '22/05/1980',
      mode: 'Single-player multiplayer',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    prismaMock.games.create.mockResolvedValue(game);
    const result = await create(game);
    expect(result).toEqual(undefined);
  });

  test('should be able to list games', async () => {
    prismaMock.games.findMany();
    const result = await list();

    expect(result).toEqual(undefined);
  });
});
