import DomainProduct from '@/domain/entities/Product'

import { container } from 'tsyringe'

import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'
import { IProductCrudServer } from '../protos/Product_grpc_pb'
import { UntypedHandleCall } from '@grpc/grpc-js'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { Product, Products, GetOneRequest, CreateRequest, UpdateRequest, DeleteRequest } from '../protos/Product_pb'

import ProductAdapter from '../adapter/ProductAdapter'
import GetOneProductController from '@/controllers/GetOneProductController'
import GetAllProductsController from '@/controllers/GetAllProductsController'
import CreateProductController from '@/controllers/CreateProductController'
import UpdateProductController from '@/controllers/UpdateProductController'
import DeleteProductController from '@/controllers/DeleteProductController'

export class ProductCrudServer implements IProductCrudServer {
  async getOneProduct(call: ServerUnaryCall<GetOneRequest, Product>, callback: sendUnaryData<Product>) {
    const request = {
      id: call.request.getId(),
    }

    const controller = container.resolve(GetOneProductController)
    const response = await controller.handle(request)

    callback(null, ProductAdapter.toMessage({ ...response.data, id: request.id } as DomainProduct))
  }

  async getAllProducts(call: ServerUnaryCall<Empty, Products>, callback: sendUnaryData<Products>) {
    const controller = container.resolve(GetAllProductsController)
    const response = await controller.handle({})

    const list = (response.data as DomainProduct[]).map(ProductAdapter.toMessage)
    const productList = new Products()

    productList.setProductList(list)

    callback(null, productList)
  }

  async createProduct(call: ServerUnaryCall<CreateRequest, Product>, callback: sendUnaryData<Product>) {
    const request = {
      name: call.request.getProduct()?.getName() ?? '',
      price: call.request.getProduct()?.getPrice() ?? 0,
      available: call.request.getProduct()?.getAvailable() ?? false,
      description: call.request.getProduct()?.getDescription() ?? '',
    }

    const controller = container.resolve(CreateProductController)
    const response = await controller.handle(request)

    callback(null, ProductAdapter.toMessage(response.data as DomainProduct))
  }

  async updateProduct(call: ServerUnaryCall<UpdateRequest, Product>, callback: sendUnaryData<Product>) {
    const request = {
      id: call.request.getId(),
      name: call.request.getProduct()?.getName() ?? '',
      price: call.request.getProduct()?.getPrice() ?? 0,
      available: call.request.getProduct()?.getAvailable() ?? false,
      description: call.request.getProduct()?.getDescription() ?? '',
    }

    const controller = container.resolve(UpdateProductController)
    const response = await controller.handle(request)

    callback(null, ProductAdapter.toMessage(response.data as DomainProduct))
  }

  async deleteProduct(call: ServerUnaryCall<DeleteRequest, Product>, callback: sendUnaryData<Product>) {
    const request = {
      id: call.request.getId(),
    }

    const controller = container.resolve(DeleteProductController)
    const response = await controller.handle(request)

    callback(null, ProductAdapter.toMessage(response.data as DomainProduct))
  }

  [name: string]: UntypedHandleCall
}
