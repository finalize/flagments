import { customAlphabet } from "nanoid"

const charactors = "1234567890"

const nanoid = customAlphabet(charactors, 10)

export const uuid = (length = 20) => nanoid(length)
