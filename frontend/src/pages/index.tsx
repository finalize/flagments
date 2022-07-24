import type { NextPage } from "next"
import Head from "next/head"
import { Main } from "layouts/Main"
import { Flow } from "features/Flow/components/Flow"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <main className="flex h-screen flex-col items-center justify-center gap-y-4">
          <Flow />
        </main>
      </Main>
    </div>
  )
}

export default Home
