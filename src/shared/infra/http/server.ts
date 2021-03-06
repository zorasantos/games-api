import 'reflect-metadata';
import { CelebrateError } from 'celebrate';
import express, { NextFunction, Request, Response } from 'express';

import { AppError } from '../../errors/AppError';
import { router } from './routes';

import '../../container';

const port = process.env.PORT || 5000;

const app = express();
app.disable('x-powered-by');

app.use(express.json());
app.use(router);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }

  if (err instanceof CelebrateError) {
    const errorBody = err.details.get('body');
    return res.status(400).json({
      message: errorBody?.details[0].message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  });
});

app.listen(port);
