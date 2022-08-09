## A layed node Application that you can change the way to expose it without basically any changes

## Enviromnent file
You can change RUN_AS to http
```
APP_HTTP_PORT=3333
APP_GRPC_PORT=3334
RUN_MIGRATIONS=true
RUN_AS=grpc
```

## Running the app 
`npm run start:dev`

# Postman workspace for testing
https://www.postman.com/linomota/workspace/hybrid-api-grpc-http
