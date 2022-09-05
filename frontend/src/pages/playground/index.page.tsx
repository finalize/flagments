import type { NextPage } from "next"
import Head from "next/head"

import { Flow } from "@/features/Flow"

import { Layout } from "./layout"

const Playground: NextPage = () => {
  return (
    <>
      <Head>
        <title>プレイグラウンド</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Flow />
      </Layout>
    </>
  )
}

export default Playground
