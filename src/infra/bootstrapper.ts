import { httpServer } from './http/httpServer'
import { grpcServer } from './grpc/grpcServer'
import dotenv from 'dotenv'

import './config/dependency-injection'

export const bootstrapper = async () => {
  dotenv.config()

  const runAs = process.env.RUN_AS ?? 'grpc'

  if (runAs === 'grpc') grpcServer()
  else httpServer()
}
