import Product from "../../domain/entities/Product"

export default interface IProductRepository {
  createProduct(data: Partial<Product>): Promise<Product>
  getAllProducts(): Promise<Product[]>
  updateProduct(productId: string, data: Product): Promise<Product>
  deleteProduct(productId: string): Promise<Product>
  getProduct(productId: string): Promise<Product | {}>
}
