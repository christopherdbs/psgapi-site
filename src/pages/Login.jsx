import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Login() {
  const { login } = useAuth();

  let schema = yup.object().shape({
    email: yup.string().min(5).max(40).email().required("Email is required"),
    password: yup.string().required("Password is required").min(8),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    Connect(data);
  };

  async function Connect(data) {
    const response = await login(data);
    if (!response.success) {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  }

  return (
    <div className="m-auto mb-12 mt-6 flex w-[500px] flex-col text-center">
      <h1 className="text-[2em] font-bold">Login</h1>
      <div id="login_status"></div>
      <form className="mt-8 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative m-auto mb-2 mt-2 h-12 w-[300px] border-none">
          <input
            className="mt-6 w-full border-b-[1px] border-solid border-b-[rgba(0,0,0,0.1)] bg-neutral-50 pb-[2px] text-lg text-[rgba(0,0,0,0.8)] placeholder-zinc-300 outline-none focus:border-b-slate-800"
            {...register("email")}
            placeholder="firstname.lastname@example.com"
          />
          <span className="pointer-events-none absolute  left-0 top-0 h-[-webkit-fill-available]  transition-all duration-[0.2s] ease-ease">
            Email
          </span>
          {errors.email?.message}
        </div>
        <div className="relative m-auto mt-2 h-12 w-[300px] border-none">
          <input
            className="mt-6 w-full border-b-[1px] border-solid border-b-[rgba(0,0,0,0.1)] bg-neutral-50 pb-[2px] text-lg text-[rgba(0,0,0,0.8)] placeholder-zinc-300 outline-none focus:border-b-slate-800"
            {...register("password")}
            placeholder="/YouR-pA5sw0rd!"
          />
          <span className="pointer-events-none absolute left-0 top-0 h-[-webkit-fill-available] transition-all duration-[0.2s] ease-ease ">
            Password
          </span>
          {errors.password?.message}
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block btn-large relative m-auto mt-10 h-12 w-[300px] border-none bg-neutral-200"
          id="valid"
        >
          Log in
        </button>
        <Toaster />
      </form>
      <div>
        <a href="/register">Don't have an account yet ? Sign up</a>
      </div>
    </div>
  );
}

export default Login;
