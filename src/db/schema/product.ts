import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const cities = pgTable('product', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    price: integer('price'),
  });