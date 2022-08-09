import { Controller } from '@/infra/http/definitions'
import { container } from 'tsyringe'
import SucessfulResponse from './responses/SucessfulResponse'

import CreateProduct from '@/domain/use-cases/CreateProduct'
import Product from '@/domain/entities/Product'

export default class CreateProductController implements Controller {
  
  async handle(
    request: CreateProductController.Request
  ): Promise<SucessfulResponse> {
    const createProduct = container.resolve(CreateProduct)

    const res = await createProduct.create(request)

    return new SucessfulResponse(res)
  }
}

export namespace CreateProductController {
  export type Request = Partial<Product>
}
