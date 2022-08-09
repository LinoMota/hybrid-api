import { Database } from 'sqlite3'
import Product from '@/domain/entities/Product'
import IProductRepository from '@/interfaces/repository/IProductRepository'
import { inject, injectable } from 'tsyringe'
import db from '../database/db'
import { v4 } from 'uuid'

@injectable()
export default class ProductRepository implements IProductRepository {
  constructor() {}

  async createProduct(data: Partial<Product>): Promise<Product> {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        const id = v4()
        db.run(
          'INSERT INTO products VALUES ($id, $name, $description, $price, $available)',
          {
            $id: id,
            $name: data.name,
            $price: data.price,
            $description: data.description,
            $available: data.available,
          },
          (err) => {
            if (!err) resolve({ id, ...data } as Product)
            reject(err)
          }
        )
      })
    })
  }
  async getAllProducts(): Promise<Product[]> {
    return await new Promise((resolve) => {
      db.serialize(() => {
        db.all('SELECT * FROM products', [], (err: Error, rows) => {
          resolve((rows as Product[]) ?? [])
        })
      })
    })
  }
  async updateProduct(productId: string, data: Product): Promise<Product> {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.run(
          'UPDATE products SET id=$id, name=$name, description=$description, price=$price, available=$available where id=$productId',
          {
            $id: data.id,
            $name: data.name,
            $price: data.price,
            $available: data.available,
            $description: data.description,
            $productId: productId,
          },
          (err) => {
            if (!err) resolve(data)
            reject(err)
          }
        )
      })
    })
  }
  async deleteProduct(productId: string): Promise<Product> {
    return await new Promise((resolve, reject) => {
      db.serialize(() => {
        let product: Product
        db.all('SELECT * FROM products where id=$id', { $id: productId }, (err: Error, row: Product[]) => {
          if (!err) {
            product = row[0]
            db.run('DELETE FROM products where id=$id', { $id: productId }, (err: Error, row: Product) => {
              if (!err) resolve(product)
              reject(err)
            })
          } else reject({})
        })
      })
    })
  }
  async getProduct(productId: string): Promise<Product | {}> {
    return await new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all('SELECT * FROM products where id=$id', { $id: productId }, (err: Error, row: Product[]) => {
          if (!err) resolve(row[0])
          reject({})
        })
      })
    })
  }
}
