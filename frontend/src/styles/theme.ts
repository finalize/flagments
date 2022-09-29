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
  black: {
    300: "#333333",
    400: "#444444",
  },
  gray: {
    50: "#f9f9fa",
    100: "#eceeef",
    200: "#dee1e3",
    300: "#cfd3d7",
    400: "#bfc5c9",
  },
  red: {
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
  },
  blue: {
    50: "#EBF8FF",
    100: "#BEE3F8",
    300: "#63B3ED",
    400: "#4299E1",
  },
  cyan: {
    300: "#76E4F7",
    400: "#0BC5EA",
  },
  indigo: {
    50: "#f9f9fe",
    100: "#ebedfb",
    200: "#dddff8",
    300: "#cdd1f5",
    400: "#bcc0f2",
    500: "#a9aeee",
    600: "#929ae9",
    700: "#7780e4",
  },
  green: {
    300: "#68D391",
    400: "#48BB78",
  },
  orange: {
    300: "#F6AD55",
    400: "#ED8936",
  },
  yellow: {
    300: "#F6E05E",
    400: "#ECC94B",
  },
  teal: {
    300: "#4FD1C5",
    400: "#38B2AC",
  },
  purple: {
    300: "#B794F4",
    400: "#9F7AEA",
  },
  pink: {
    300: "#F687B3",
    400: "#ED64A6",
  },
}

export const theme = extendTheme({
  colors: Colors,
})
