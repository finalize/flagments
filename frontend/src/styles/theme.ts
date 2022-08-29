import { extendTheme } from "@chakra-ui/react"

export const Colors = {
  flow: {
    background: "#EDF2F7",
  },
  brand: {
    100: "#f7fafc",
    900: "#1a202c",
  },
  red: {
    500: "#E53E3E",
  },
  blue: {
    400: "#4299E1",
  },
  green: {
    400: "#48BB78",
  },
}

export const theme = extendTheme({
  colors: Colors,
})
