import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import { PrismaClient } from '@prisma/client';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import { DateTimeResolver} from "graphql-scalars";

const prisma = new PrismaClient();

export const builder = new SchemaBuilder<{
    PrismaTypes: PrismaTypes,
    // Define Scalars to ensure that date can be processed correctly
    Scalars: {
        Date: {
          Input: Date;
          Output: Date;
        };
    };
  }>({
    plugins: [PrismaPlugin],
    prisma: {
      client: prisma,
    }
  })

builder.addScalarType("Date", DateTimeResolver, {});

