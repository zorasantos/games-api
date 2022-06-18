import express from 'express';

const app = express();
app.use(express.json());

app.get('/list-games', (req, res) => {
  res.send({ name: 'pac-man', year: '1981' });
});
app.listen(3000);
