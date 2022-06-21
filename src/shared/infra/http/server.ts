import 'reflect-metadata';
import { CelebrateError } from 'celebrate';
import express, { NextFunction, Request, Response } from 'express';

import { AppError } from '@shared/errors/AppError';

import { router } from './routes';

import '@shared/container/index';

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
    const {
      details: [errorDetails]
    } = errorBody;
    return res.status(400).json({
      message: errorDetails.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  });
});

app.listen(3000);
