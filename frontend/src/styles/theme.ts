import { extendTheme } from "@chakra-ui/react"

export const Colors = {
  flow: {
    background: "#EDF2F7",
    handle: {
      backgounrd: "#555",
    },
  },
  brand: {
    100: "#f7fafc",
    900: "#1a202c",
  },
  red: {
    500: "#E53E3E",
  },
  blue: {
    50: "#EBF8FF",
    100: "#BEE3F8",
    300: "#63B3ED",
    400: "#4299E1",
  },
  green: {
    400: "#48BB78",
  },
  orange: {
    300: "#F6AD55",
  },
}

export const theme = extendTheme({
  colors: Colors,
})
