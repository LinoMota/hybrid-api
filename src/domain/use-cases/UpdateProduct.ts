import Product from "../entities/Product"
import IProductRepository from "../../interfaces/repository/IProductRepository"
import IUpdateProduct from '../../interfaces/usecases/IUpdateProduct'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class UpdateProduct implements IUpdateProduct {
  constructor(
    @inject('IProductRepository')
    private readonly repository: IProductRepository
  ) {}
  async update (productId: string, data: Product): Promise<Product> {
    return await this.repository.updateProduct(productId, data)
  }
}
