import { ApolloServer } from "apollo-server"
import { resolvers, typeDefs } from "./gql"

export async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    context: ({ req }) => req,
  })
  const { url } = await server.listen()
  console.log(`🚀 Server ready at ${url}`)
}
