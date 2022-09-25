import type { NextPage } from "next"
import Head from "next/head"

import { Layout } from "./layout"

const Playground: NextPage = () => {
  return (
    <>
      <Head>
        <title>プレイグラウンド</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Roboto&display=swap)
        </style>
      </Head>

      <Layout />
    </>
  )
}

export default Playground
