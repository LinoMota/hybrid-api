#/bin/bash

INPUT_DIR='./protos/*.proto'
OUT_DIR='./src/infra/grpc/'

npx grpc_tools_node_protoc \
 --js_out=import_style=commonjs,binary:$OUT_DIR \
 --ts_out=generate_package_definition:$OUT_DIR \
 --grpc_out=grpc_js:$OUT_DIR $INPUT_DIR

# npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./src/infra/grpc/--ts_out=generate_package_definition:./src/infra/grpc/--grpc_out=grpc_js:./src/infra/grpc/./protos/*.proto
