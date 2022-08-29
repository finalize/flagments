import { Button, Flex } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

import { Main } from "@/layouts/Main"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Flex h="100vh" justifyContent="center" alignItems="center">
          <Link href="/playground">
            <a>
              <Button colorScheme="blue">Play</Button>
            </a>
          </Link>
        </Flex>
      </Main>
    </>
  )
}

export default Home
