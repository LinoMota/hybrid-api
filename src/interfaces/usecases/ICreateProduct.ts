import Product from "../../domain/entities/Product"

export default interface ICreateProduct {
  create(data: Product): Promise<Product>
}
