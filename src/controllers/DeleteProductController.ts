import { Controller } from '@/infra/http/definitions'
import { container } from 'tsyringe'
import SucessfulResponse from './responses/SucessfulResponse'
import DeleteProduct from '@/domain/use-cases/DeleteProduct'

export default class DeleteProductController implements Controller {
  async handle(request: DeleteProductController.Request): Promise<SucessfulResponse> {
    let { id } = request

    const deleteProduct = container.resolve(DeleteProduct)

    const res = await deleteProduct.delete(id)

    return new SucessfulResponse(res)
  }
}

export namespace DeleteProductController {
  export type Request = {
    id: string
  }
}
