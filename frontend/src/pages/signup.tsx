import type { NextPage } from "next"
import Head from "next/head"
import { SignupForm } from "features/Signup/components/Form"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen flex-col items-center bg-zinc-500">
        <SignupForm />
      </main>
    </div>
  )
}

export default Home
