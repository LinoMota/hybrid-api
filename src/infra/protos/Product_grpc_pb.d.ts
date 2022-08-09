// package: product
// file: protos/Product.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as protos_Product_pb from "../protos/Product_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IProductCrudService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createProduct: IProductCrudService_ICreateProduct;
    updateProduct: IProductCrudService_IUpdateProduct;
    deleteProduct: IProductCrudService_IDeleteProduct;
    getAllProducts: IProductCrudService_IgetAllProducts;
    getOneProduct: IProductCrudService_IgetOneProduct;
}

interface IProductCrudService_ICreateProduct extends grpc.MethodDefinition<protos_Product_pb.CreateRequest, protos_Product_pb.Product> {
    path: "/product.ProductCrud/CreateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_Product_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<protos_Product_pb.CreateRequest>;
    responseSerialize: grpc.serialize<protos_Product_pb.Product>;
    responseDeserialize: grpc.deserialize<protos_Product_pb.Product>;
}
interface IProductCrudService_IUpdateProduct extends grpc.MethodDefinition<protos_Product_pb.UpdateRequest, protos_Product_pb.Product> {
    path: "/product.ProductCrud/UpdateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_Product_pb.UpdateRequest>;
    requestDeserialize: grpc.deserialize<protos_Product_pb.UpdateRequest>;
    responseSerialize: grpc.serialize<protos_Product_pb.Product>;
    responseDeserialize: grpc.deserialize<protos_Product_pb.Product>;
}
interface IProductCrudService_IDeleteProduct extends grpc.MethodDefinition<protos_Product_pb.DeleteRequest, protos_Product_pb.Product> {
    path: "/product.ProductCrud/DeleteProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_Product_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<protos_Product_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<protos_Product_pb.Product>;
    responseDeserialize: grpc.deserialize<protos_Product_pb.Product>;
}
interface IProductCrudService_IgetAllProducts extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, protos_Product_pb.Products> {
    path: "/product.ProductCrud/getAllProducts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<protos_Product_pb.Products>;
    responseDeserialize: grpc.deserialize<protos_Product_pb.Products>;
}
interface IProductCrudService_IgetOneProduct extends grpc.MethodDefinition<protos_Product_pb.GetOneRequest, protos_Product_pb.Product> {
    path: "/product.ProductCrud/getOneProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_Product_pb.GetOneRequest>;
    requestDeserialize: grpc.deserialize<protos_Product_pb.GetOneRequest>;
    responseSerialize: grpc.serialize<protos_Product_pb.Product>;
    responseDeserialize: grpc.deserialize<protos_Product_pb.Product>;
}

export const ProductCrudService: IProductCrudService;

export interface IProductCrudServer extends grpc.UntypedServiceImplementation {
    createProduct: grpc.handleUnaryCall<protos_Product_pb.CreateRequest, protos_Product_pb.Product>;
    updateProduct: grpc.handleUnaryCall<protos_Product_pb.UpdateRequest, protos_Product_pb.Product>;
    deleteProduct: grpc.handleUnaryCall<protos_Product_pb.DeleteRequest, protos_Product_pb.Product>;
    getAllProducts: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, protos_Product_pb.Products>;
    getOneProduct: grpc.handleUnaryCall<protos_Product_pb.GetOneRequest, protos_Product_pb.Product>;
}

export interface IProductCrudClient {
    createProduct(request: protos_Product_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    createProduct(request: protos_Product_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    createProduct(request: protos_Product_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    updateProduct(request: protos_Product_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    updateProduct(request: protos_Product_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    updateProduct(request: protos_Product_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    deleteProduct(request: protos_Product_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    deleteProduct(request: protos_Product_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    deleteProduct(request: protos_Product_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    getAllProducts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Products) => void): grpc.ClientUnaryCall;
    getAllProducts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Products) => void): grpc.ClientUnaryCall;
    getAllProducts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Products) => void): grpc.ClientUnaryCall;
    getOneProduct(request: protos_Product_pb.GetOneRequest, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    getOneProduct(request: protos_Product_pb.GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    getOneProduct(request: protos_Product_pb.GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
}

export class ProductCrudClient extends grpc.Client implements IProductCrudClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createProduct(request: protos_Product_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public createProduct(request: protos_Product_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public createProduct(request: protos_Product_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public updateProduct(request: protos_Product_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public updateProduct(request: protos_Product_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public updateProduct(request: protos_Product_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: protos_Product_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: protos_Product_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: protos_Product_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public getAllProducts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Products) => void): grpc.ClientUnaryCall;
    public getAllProducts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Products) => void): grpc.ClientUnaryCall;
    public getAllProducts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Products) => void): grpc.ClientUnaryCall;
    public getOneProduct(request: protos_Product_pb.GetOneRequest, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public getOneProduct(request: protos_Product_pb.GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
    public getOneProduct(request: protos_Product_pb.GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_Product_pb.Product) => void): grpc.ClientUnaryCall;
}
