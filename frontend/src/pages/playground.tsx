import type { NextPage } from "next"
import Head from "next/head"

import { Edit } from "@/layouts/Edit"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Edit />
    </>
  )
}

export default Home
