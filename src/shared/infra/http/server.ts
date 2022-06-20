import express from 'express';

import { router } from './routes';

const app = express();
app.disable('x-powered-by');

app.use(express.json());
app.use(router);

app.listen(3000);
