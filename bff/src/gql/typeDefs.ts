import { loadSchemaSync } from "@graphql-tools/load"
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader"
import { join } from "path"

export const typeDefs = loadSchemaSync(join(__dirname, "./**/*.gql"), {
  loaders: [new GraphQLFileLoader()],
})
