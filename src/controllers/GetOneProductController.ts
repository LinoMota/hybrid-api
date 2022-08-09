import { Controller } from '@/infra/http/definitions'
import { container } from 'tsyringe'
import SucessfulResponse from './responses/SucessfulResponse'
import GetProduct from '@/domain/use-cases/GetProduct'

export default class GetOneProductController implements Controller {
  async handle(
    request: GetOneProductController.Request
  ): Promise<SucessfulResponse> {
    let { id } = request

    const getProduct = container.resolve(GetProduct)

    const res = await getProduct.getOne(id)

    return new SucessfulResponse(res)
  }
}

export namespace GetOneProductController {
  export type Request = {
    id: string
  }
}
