import 'reflect-metadata';
import { errors } from 'celebrate';
import express from 'express';

import { router } from './routes';
import '@shared/container/index';

const app = express();
app.disable('x-powered-by');

app.use(express.json());
app.use(router);
app.use(errors());

app.listen(3000);
