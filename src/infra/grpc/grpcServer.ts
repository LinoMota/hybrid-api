import { Server, ServerCredentials} from '@grpc/grpc-js';
import { ProductCrudService } from './protos/Product_grpc_pb'
import { ProductCrudServer } from './servers/ProductCrudServer'

export const grpcServer = () => {
    const server = new Server();
    const appPort =  process.env.APP_GRPC_PORT ?? 4000
    server.addService(ProductCrudService, new ProductCrudServer());

    server.bindAsync(`0.0.0.0:${appPort}`, ServerCredentials.createInsecure(), () => {
        console.log(`Application GRPC running on port ${appPort}`);
        server.start();
    });
}
