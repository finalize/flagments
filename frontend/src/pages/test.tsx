import { Box } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"

import FLow from "./direc"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box h="100vh">
        <FLow />
      </Box>
    </>
  )
}

export default Home
