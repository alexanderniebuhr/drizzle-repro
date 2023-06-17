import type { InferModel } from 'drizzle-orm'
// temporary fix
// import type { PgTableWithColumns, TableConfig } from 'drizzle-orm/pg-core'
// type unused = PgTableWithColumns<TableConfig>

import { doublePrecision, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const products = pgTable('products', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name'),
	description: text('description'),
	price: doublePrecision('price'),
})

export type Product = InferModel<typeof products>
export type NewProduct = InferModel<typeof products, 'insert'>
