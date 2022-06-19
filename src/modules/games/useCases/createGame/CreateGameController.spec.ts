import { CreateGameController } from './CreateGameController';

describe('CreateGameController', () => {
  test('should return 400 id no name is provider', () => {
    const SUT = new CreateGameController();
    const httpRequest = {
      body: {
        nomeCriador: 'Test name creator',
        genero: 'Jogo eletrônico de labirinto',
        plataforma: 'Atari 2600, Arcade, Android, Microsoft Windows',
        estudio: 'Bandai Namco Entertainment, Namco',
        dataLancamento: '1980'
      }
    };

    const httpResponse = SUT.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Missing param: name'));
  });
});
