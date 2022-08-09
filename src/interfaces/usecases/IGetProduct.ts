import Product from "../../domain/entities/Product"

export default interface IGetProduct {
  getAll(): Promise<Product[]>
  getOne(productId: string): Promise<Product | {}>
}
