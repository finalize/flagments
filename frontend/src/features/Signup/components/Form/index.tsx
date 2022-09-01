import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  name: string
  email: string
  password: string
}

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div className="bg-grey-lighter flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-sm flex-1 flex-col items-center justify-center px-2">
        <div className="w-full rounded bg-white px-6 py-8 text-black shadow-md">
          <h1 className="mb-8 text-center text-3xl">Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="border-grey-light mt-4 block w-full rounded border p-3"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}

            <input
              type="text"
              className="border-grey-light mt-4 block w-full rounded border p-3"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}

            <input
              type="text"
              className="border-grey-light mt-4 block w-full rounded border p-3"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}

            <button
              type="submit"
              className="hover:bg-green-dark my-1 mt-4 w-full rounded bg-black py-3 text-center text-white focus:outline-none"
            >
              Create Account
            </button>
          </form>
          <div className="text-grey-dark mt-4 text-center text-sm">
            <span>By signing up, you agree to the</span>
            <a
              className="border-grey-dark text-grey-dark ml-1 border-b no-underline"
              href="#"
            >
              Terms of Service
            </a>
            <span className="ml-1">and</span>
            <a
              className="border-grey-dark text-grey-dark ml-1 border-b no-underline"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
