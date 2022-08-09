import Product from "../entities/Product"
import IProductRepository from "../../interfaces/repository/IProductRepository"
import IDeleteProduct from '../../interfaces/usecases/IDeleteProduct'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class DeleteProduct implements IDeleteProduct {
  constructor(
    @inject('IProductRepository')
    private readonly repository: IProductRepository
  ) {}

  async delete (productId: string): Promise<Product> {
    return await this.repository.deleteProduct(productId)
  }
}
