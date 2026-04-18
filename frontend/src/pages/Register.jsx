import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import {Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const [isShowPassword,setIsShowPassword]= useState(false);

  const submitHandler=(data)=>{
     try {
       console.log(data);
       
     } catch (error) {
      
     }
  }

  return (
    <div className="flex max-auto py-10">
      <div className="flex flex-col gap-8 justify-center mx-auto items-center border p-5 rounded-md">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-zinc-500 text-4xl">Register</h1>
          <p>Create your new account and get started</p>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(submitHandler)}>
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
            <p className="text-[12px] text-red-500 ml-1">{errors?.fullname?.message}</p>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-zinc-700 ml-1"
            >
              Email:
            </label>
            <input
              type="email"
              {...register("email", {
                required: "email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              placeholder="Enter your email"
              className="border p-1 rounded-md"
            />
            <p className="text-[12px] text-red-500 ml-1">{errors?.email?.message}</p>
          </div>
          <div className="flex flex-col relative">
            <label
              htmlFor=""
              className="text-zinc-700 ml-1"
            >
              Password:
            </label>
            <input
              placeholder="Enter your password"
              type={isShowPassword?"text":"password"}
              {...register("password", { required: "password is required" })}
              className="border p-1 rounded-md"
            />
            <p className="absolute top-7 left-48 text-zinc-500" onClick={()=>setIsShowPassword(!isShowPassword)}>{isShowPassword?  <Eye /> :    <EyeOff />}</p>
            <p className="text-[12px] text-red-500 ml-1">{errors?.password?.message}</p>
          </div>
          <button
            disabled={isSubmitting}
            className="bg-gray-900 text-white p-2 rounded-md mt-2 font-bold hover:bg-gray-700 cursor-pointer"
          >
            {isSubmitting ? "Submitting" : "Register"}
          </button>
          <p className="text-zinc-400">
            Already have an account? <span className="font-bold text-blue-500 cursor-pointer" onClick={()=>navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
