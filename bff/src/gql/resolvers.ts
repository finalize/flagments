import { User } from "./User"
import { Node } from "./Node"
import { Resolvers } from "types"

export const resolvers: Resolvers = {
  Query: { ...User.queries, ...Node.queries },
}
