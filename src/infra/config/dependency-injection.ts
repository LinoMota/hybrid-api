
import { container } from 'tsyringe'
import ProductRepository from '../repository/ProductRepository'

container.register('IProductRepository', {
  useClass: ProductRepository,
})
