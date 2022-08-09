import { generateRandomData } from './../src/utils/randomDataGenerator'
import DomainProduct from './../src/domain/entities/Product'
import { Product, Products } from './../src/infra/grpc/protos/Product_pb'
import fs from 'fs'

const protoOutFile = './protobuf-test/protoOutput.out'
const jsonOutFile = './protobuf-test/jsonOutput.out'

function readSerializedProto() {
  const timeLabel = 'Reading proto data'
  const file = fs.readFileSync(protoOutFile)

  console.time(timeLabel)
  const products = Products.deserializeBinary(file)
  console.timeEnd(timeLabel)

  return file.length
}

function readJson() {
  const timeLabel = 'Reading json data'
  const file = fs.readFileSync(jsonOutFile)

  console.time(timeLabel)

  const products = JSON.parse(file.toString('utf-8')) as DomainProduct[]

  console.timeEnd(timeLabel)

  return file.length
}

function savingDataAsSerializedProto(data: DomainProduct[]) {
  // usando protos
  const timeLabelConvert = 'Converting into proto data'
  const timeLabelWriteFile = 'Writing proto data'

  console.time(timeLabelConvert)

  const protoArray = new Products().setProductList(
    data.map((product) => {
      const { id, name, available, description, price } = product
      const converted = new Product()
      converted.setId(id)
      converted.setName(name)
      converted.setPrice(price)
      converted.setDescription(description)
      converted.setAvailable(available)
      return converted
    })
  )

  console.timeEnd(timeLabelConvert)

  const bin = protoArray.serializeBinary()

  console.time(timeLabelWriteFile)

  fs.writeFileSync(protoOutFile, bin)

  console.timeEnd(timeLabelWriteFile)
}

function savingDataAsJson(data: DomainProduct[]) {
  const timeLabelWriteFile = 'Writing json data'

  console.time(timeLabelWriteFile)

  fs.writeFileSync(jsonOutFile, JSON.stringify(data))

  console.timeEnd(timeLabelWriteFile)
}

function main() {
  const randN = process.argv[2] ?? 10

  console.log('JSON vs Serialized Protobufs')

  console.log(`Generating random data xD randN=${randN}`)

  const generatedData = generateRandomData(+randN)

  console.group ('Writing data:')

    console.log(`Wrinting as proto serialized binary into a file`)
    savingDataAsSerializedProto(generatedData)

    console.log(`Wrinting as json into a file`)
    savingDataAsJson(generatedData)

  console.groupEnd();

  console.group ('Reading data:')

    console.log(`Reading Proto serialized data from file`)
    const protoFileSizeInBytes = readSerializedProto()

    console.log(`Reading json data from file`)
    const jsonFileSizeInBytes = readJson()

  console.groupEnd();

  console.log(
    `\nByte diff when convert into proto protos=${protoFileSizeInBytes}, json=${jsonFileSizeInBytes}: (json - protos) ${
      jsonFileSizeInBytes - protoFileSizeInBytes
    }!`
  )
}

main()
