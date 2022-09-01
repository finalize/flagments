import { ApolloProvider } from "@apollo/client"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { ReactFlowProvider } from "react-flow-renderer"

import { client } from "@/libs/apollo-client"
import { theme } from "@/styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <ReactFlowProvider>
          <Component {...pageProps} />
        </ReactFlowProvider>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
