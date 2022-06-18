import express from 'express';

import Logger from '@shared/logger';

const app = express();
app.use(express.json());

app.get('/list-games', (req, res) => {
  Logger.info('Entrou no list-games');
  res.send({ name: 'pac-man', year: '1981' });
});
app.listen(3000);
