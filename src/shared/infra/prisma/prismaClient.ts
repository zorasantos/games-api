/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient({
  log: ['error', 'info', 'query', 'warn']
});

export default prismaClient;
