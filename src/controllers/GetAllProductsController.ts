import { Controller } from '@/infra/http/definitions'
import { container } from 'tsyringe'
import SucessfulResponse from './responses/SucessfulResponse'
import GetProduct from '@/domain/use-cases/GetProduct'

export default class GetAllProductsController implements Controller {
  async handle(
    request: GetAllProductsController.Request
  ): Promise<SucessfulResponse> {
    const getProduct = container.resolve(GetProduct)

    const res = await getProduct.getAll()

    return new SucessfulResponse(res)
  }
}

export namespace GetAllProductsController {
  export type Request = {
  }
}
