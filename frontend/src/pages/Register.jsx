import React from "react"
import { useForm } from "react-hook-form"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  return (
    <div className="flex flex-col gap-8 justify-center w-full h-120 mx-auto items-center border">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-zinc-500 text-4xl">Register</h1>
        <p>Create your new account and get started</p>
      </div>
      <form className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-zinc-700 ml-1"
          >
            Full Name:
          </label>
          <input
            type="text"
            {...register("fullname", { required: "Full name is required!" })}
            placeholder="Enter your full name"
            className="border p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-zinc-700 ml-1"
          >
            Email:
          </label>
          <input
            type="text"
            {...register("email", {
              required: "email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            placeholder="Enter your email"
            className="border p-1 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor=""
            className="text-zinc-700 ml-1"
          >
            Password:
          </label>
          <input
            placeholder="Enter your password"
            type="text"
            {...register("password",{required:"password is required"})}
            className="border p-1 rounded-md"
          />
        </div>
        <button className="bg-gray-900 text-white p-2 rounded-md mt-2 font-bold">Register</button>
        <p className="text-zinc-400">Already have an account? <span className="font-bold text-blue-500">Login</span></p>
      </form>
    </div>
  )
}

export default Register
