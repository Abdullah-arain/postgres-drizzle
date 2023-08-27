import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
 
// declaring enum in database
 
export const countries = pgTable('countries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});
 