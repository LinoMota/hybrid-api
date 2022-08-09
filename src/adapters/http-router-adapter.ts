import { Controller } from '../infra/http/definitions/Controller'
import { Response, Request } from 'express'
import SucessfulResponse from '@/controllers/responses/SucessfulResponse'
// import ErrorResponse from '@/controllers/responses/ErrorResponse'

export const httpRouterAdapter = (controller: Controller) => {
  return async (expressRequest: Request, expressResponse: Response) => {
    const request = {
      ...(expressRequest.body || {}),
      ...(expressRequest.params || {}),
      ...(expressRequest.query || {}),
    }
    const endpointResponse = await controller.handle(request)

    const { code } = endpointResponse

    // if (endpointResponse instanceof ErrorResponse) {
    //   expressResponse.status(code).json(endpointResponse)
    // }

    if (endpointResponse instanceof SucessfulResponse)
      expressResponse.status(code).json(endpointResponse.data)
  }
}
