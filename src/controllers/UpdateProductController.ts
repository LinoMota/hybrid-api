import { Controller } from '@/infra/http/definitions'
import { container } from 'tsyringe'
import SucessfulResponse from './responses/SucessfulResponse'
import UpdateProduct from '@/domain/use-cases/UpdateProduct'
import Product from '@/domain/entities/Product'

export default class UpdateProductController implements Controller {
  async handle(request: UpdateProductController.Request): Promise<SucessfulResponse> {
    const updateProduct = container.resolve(UpdateProduct)

    const { id } = request

    const res = await updateProduct.update(id, request)

    return new SucessfulResponse(res)
  }
}

export namespace UpdateProductController {
  export type Request = Product
}
