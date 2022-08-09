import { faker } from '@faker-js/faker'
import Product from '@/domain/entities/Product'
import { v4 as uuid } from 'uuid'

export function generateRandomData(randN = 5) {
  const products = []

  for (let i = 0; i < randN; i++)
    products.push({
      id: uuid(),
      name: faker.name.firstName(),
      description: faker.name.middleName().repeat(100),
      price: +faker.finance.amount(),
      available: true,
    } as Product)

  return products
}
