import { generateRandomData } from '@/utils/randomDataGenerator'
import { Database } from 'sqlite3'
import ICreateProduct from '@/interfaces/usecases/ICreateProduct'
import CreateProduct from '@/domain/use-cases/CreateProduct'
import { container } from 'tsyringe'

export async function migrateProducts(db: Database, randomData: boolean = false) {
  return new Promise(async (resolve) => {
    db.exec(
      `
        CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC NOT NULL,
        available BOOLEAN NOT NULL
      );`,
      resolve
    )

    const createProduct: ICreateProduct = container.resolve(CreateProduct)

    if (randomData) {
      const randN = 200
      const data = generateRandomData(randN)
      await Promise.all(data.map((product) => createProduct.create(product)))
    }
  })
}
