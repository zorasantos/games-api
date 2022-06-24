import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';

import { PrismaClient } from '@prisma/client';

import prismaClient from './prisma/prismaClient';

jest.mock('./prisma/prismaClient.ts', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>()
}));

beforeEach(() => {
  // eslint-disable-next-line no-use-before-define
  mockReset(prismaMock);
});
export const prismaMock = prismaClient as unknown as DeepMockProxy<PrismaClient>;
