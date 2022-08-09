// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_Product_pb = require('../protos/Product_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_CreateRequest(arg) {
  if (!(arg instanceof protos_Product_pb.CreateRequest)) {
    throw new Error('Expected argument of type product.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_CreateRequest(buffer_arg) {
  return protos_Product_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_DeleteRequest(arg) {
  if (!(arg instanceof protos_Product_pb.DeleteRequest)) {
    throw new Error('Expected argument of type product.DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_DeleteRequest(buffer_arg) {
  return protos_Product_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetOneRequest(arg) {
  if (!(arg instanceof protos_Product_pb.GetOneRequest)) {
    throw new Error('Expected argument of type product.GetOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetOneRequest(buffer_arg) {
  return protos_Product_pb.GetOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_Product(arg) {
  if (!(arg instanceof protos_Product_pb.Product)) {
    throw new Error('Expected argument of type product.Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Product(buffer_arg) {
  return protos_Product_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_Products(arg) {
  if (!(arg instanceof protos_Product_pb.Products)) {
    throw new Error('Expected argument of type product.Products');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Products(buffer_arg) {
  return protos_Product_pb.Products.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_UpdateRequest(arg) {
  if (!(arg instanceof protos_Product_pb.UpdateRequest)) {
    throw new Error('Expected argument of type product.UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_UpdateRequest(buffer_arg) {
  return protos_Product_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductCrudService = exports.ProductCrudService = {
  createProduct: {
    path: '/product.ProductCrud/CreateProduct',
    requestStream: false,
    responseStream: false,
    requestType: protos_Product_pb.CreateRequest,
    responseType: protos_Product_pb.Product,
    requestSerialize: serialize_product_CreateRequest,
    requestDeserialize: deserialize_product_CreateRequest,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
  updateProduct: {
    path: '/product.ProductCrud/UpdateProduct',
    requestStream: false,
    responseStream: false,
    requestType: protos_Product_pb.UpdateRequest,
    responseType: protos_Product_pb.Product,
    requestSerialize: serialize_product_UpdateRequest,
    requestDeserialize: deserialize_product_UpdateRequest,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
  deleteProduct: {
    path: '/product.ProductCrud/DeleteProduct',
    requestStream: false,
    responseStream: false,
    requestType: protos_Product_pb.DeleteRequest,
    responseType: protos_Product_pb.Product,
    requestSerialize: serialize_product_DeleteRequest,
    requestDeserialize: deserialize_product_DeleteRequest,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
  getAllProducts: {
    path: '/product.ProductCrud/getAllProducts',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: protos_Product_pb.Products,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_product_Products,
    responseDeserialize: deserialize_product_Products,
  },
  getOneProduct: {
    path: '/product.ProductCrud/getOneProduct',
    requestStream: false,
    responseStream: false,
    requestType: protos_Product_pb.GetOneRequest,
    responseType: protos_Product_pb.Product,
    requestSerialize: serialize_product_GetOneRequest,
    requestDeserialize: deserialize_product_GetOneRequest,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
};

exports.ProductCrudClient = grpc.makeGenericClientConstructor(ProductCrudService);
