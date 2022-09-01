import type { NextPage } from "next"
import Head from "next/head"

import { FlowEdit } from "@/features/Flow"

import { Layout } from "./layout"

const Playground: NextPage = () => {
  return (
    <>
      <Head>
        <title>プレイグラウンド</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <FlowEdit />
      </Layout>
    </>
  )
}

export default Playground
