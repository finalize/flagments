import { makeVar } from "@apollo/client"

import { Template } from "@/styles/grid"

const initialValue = Template.a
export const templateVar = makeVar(initialValue)
