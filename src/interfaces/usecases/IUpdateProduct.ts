import Product from "../../domain/entities/Product"

export default interface IUpdateProduct {
  update(productId: string, data: Product): Promise<Product>
}
