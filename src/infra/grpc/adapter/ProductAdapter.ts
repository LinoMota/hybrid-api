import Product from '@/domain/entities/Product'
import { Product as MessageProduct } from './../protos/Product_pb'

export default class ProductAdapter {
  static toMessage(product: Product): MessageProduct {
    const messageProduct: MessageProduct = new MessageProduct()

    messageProduct.setId(product.id)
    messageProduct.setName(product.name)
    messageProduct.setPrice(product.price)
    messageProduct.setAvailable(product.available)
    messageProduct.setDescription(product.description)

    return messageProduct
  }
}
