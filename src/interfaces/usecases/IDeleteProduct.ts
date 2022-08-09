import Product from "../../domain/entities/Product"

export default interface IDeleteProduct {
  delete(productId: string): Promise<Product>
}
