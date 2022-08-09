import { Router } from 'express'
import { container } from 'tsyringe'
import { httpRouterAdapter } from '@/adapters/http-router-adapter'

import GetOneProductController from '@/controllers/GetOneProductController'
import DeleteProductController from '@/controllers/DeleteProductController'
import GetAllProductsController from '@/controllers/GetAllProductsController'
import UpdateProductController from '@/controllers/UpdateProductController'
import CreateProductController from '@/controllers/CreateProductController'

export default async (router: Router): Promise<Router> => {
  const getAllProductContoller = container.resolve(GetAllProductsController)
  const getOneProductContoller = container.resolve(GetOneProductController)
  const updateProductContoller = container.resolve(UpdateProductController)
  const createProductContoller = container.resolve(CreateProductController)
  const deleteProductContoller = container.resolve(DeleteProductController)

  router.get('/product/', httpRouterAdapter(getAllProductContoller))
  router.get('/product/:id', httpRouterAdapter(getOneProductContoller))
  router.post('/product/', httpRouterAdapter(createProductContoller))
  router.put('/product/:id', httpRouterAdapter(updateProductContoller))
  router.delete('/product/:id', httpRouterAdapter(deleteProductContoller))

  return router
}
