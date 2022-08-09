import Product from '../entities/Product'
import IProductRepository from '../../interfaces/repository/IProductRepository'
import IGetProduct from '../../interfaces/usecases/IGetProduct'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class GetProduct implements IGetProduct {
  constructor(
    @inject('IProductRepository')
    private repository: IProductRepository
  ) {}

  async getOne(productId: string): Promise<{} | Product> {
    return await this.repository.getProduct(productId)
  }

  async getAll(): Promise<Product[]> {
    return await this.repository.getAllProducts()
  }
}
