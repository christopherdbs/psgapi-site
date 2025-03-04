import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signup } from "../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function isPasswordValid(value, context) {
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSymbole = /[!@#%&]/.test(value);
  let validConditions = 0;
  const numberOfMustBeValidConditions = 4;
  const conditions = [hasLowerCase, hasUpperCase, hasNumber, hasSymbole];
  conditions.forEach((condition) => (condition ? validConditions++ : null));
  if (validConditions >= numberOfMustBeValidConditions) {
    return true;
  }
  return false;
}

function Register() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [token, setToken] = useState();
  let schema = yup.object().shape({
    email: yup.string().min(5).max(40).email().required("Email is required"),
    pseudo: yup.string().min(3).max(20).required("Pseudo is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8)
      .test("isValidPass", "Password is not valid", (value, context) => {
        return isPasswordValid(value, context);
      }),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .min(8)
      .test("isValidPass", "", (value, context) => {
        return isPasswordValid(value, context);
      })
      .test("passwords-match", "", function (value) {
        return this.parent.password === value;
      }),
  });
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    Register(data);
  };

  async function Register(data) {
    const response = await signup(data);
    if (!response.success) {
      toast.error(response.message);
      if (response?.alreadyUsed && response.alreadyUsed.length > 0) {
        response.alreadyUsed.forEach((elt) =>
          setError(elt.prop, { type: "manual", message: elt.message })
        );
      }
    } else {
      toast.success(response.message);
      if (!response.mailedToken)
        toast.error("Sending token by mail failed. Please, try again.");
      setToken(response.token);
      setIsRegistered(true);
    }
  }

  return (
    <>
      {!isRegistered && (
        <div className="m-auto mb-12 mt-6 flex w-[500px] flex-col text-center">
          <h1 className="text-[2em] font-bold">Register</h1>
          <div id="login_status"></div>
          <form
            className="mt-8 flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative m-auto mb-2 mt-4 h-12 w-[300px] border-none">
              <input
                className="mt-6 w-full border-b-[1px] border-solid border-b-[rgba(0,0,0,0.1)] bg-neutral-50 pb-[2px] text-lg text-[rgba(0,0,0,0.8)] placeholder-zinc-300 outline-none focus:border-b-slate-800"
                {...register("email")}
                placeholder="firstname.lastname@example.com"
              />
              <span className="pointer-events-none absolute left-0 top-0 h-[-webkit-fill-available] transition-all duration-[0.2s] ease-ease">
                Email
              </span>
              <span className="float-right text-sm text-red-500">
                {errors.email?.message}
              </span>
            </div>
            <div className="relative m-auto mb-2 mt-4 h-12 w-[300px] border-none">
              <input
                className="mt-6 w-full border-b-[1px] border-solid border-b-[rgba(0,0,0,0.1)] bg-neutral-50 pb-[2px] text-lg text-[rgba(0,0,0,0.8)] placeholder-zinc-300 outline-none focus:border-b-slate-800"
                {...register("pseudo")}
                placeholder="User12081970"
              />
              <span className="pointer-events-none absolute left-0 top-0 h-[-webkit-fill-available] transition-all duration-[0.2s] ease-ease">
                Pseudo
              </span>
              <span className="float-right text-sm text-red-500">
                {errors.pseudo?.message}
              </span>
            </div>
            <div className="relative m-auto mb-2 mt-4 h-12 w-[300px] border-none">
              <input
                className="mt-6 w-full border-b-[1px] border-solid border-b-[rgba(0,0,0,0.1)] bg-neutral-50 pb-[2px] text-lg text-[rgba(0,0,0,0.8)] placeholder-zinc-300 outline-none focus:border-b-slate-800"
                {...register("password")}
                placeholder="/YouR-pA5sw0rd!"
              />
              <span className="pointer-events-none absolute left-0 top-0 h-[-webkit-fill-available] transition-all duration-[0.2s] ease-ease">
                Password
              </span>
              <span className="float-right text-sm text-red-500">
                {errors.password?.message}
              </span>
            </div>
            <div className="relative m-auto mb-2 mt-4 h-12 w-[300px] border-none">
              <input
                className="mt-6 w-full border-b-[1px] border-solid border-b-[rgba(0,0,0,0.1)] bg-neutral-50 pb-[2px] text-lg text-[rgba(0,0,0,0.8)] placeholder-zinc-300 outline-none focus:border-b-slate-800"
                {...register("confirmPassword")}
                placeholder="/YouR-pA5sw0rd!"
              />
              <span className="pointer-events-none absolute left-0 top-0 h-[-webkit-fill-available] transition-all duration-[0.2s] ease-ease">
                Repeat Password
              </span>
              <span className="float-right text-sm text-red-500">
                {errors.confirmPassword?.message}
              </span>
              {watch("confirmPassword") !== watch("password") &&
                watch("confirmPassword") !== "" &&
                watch("password") !== "" &&
                watch("confirmPassword").length >= 8 &&
                watch("password").length >= 8 && (
                  <span className=" float-right text-sm text-red-500">
                    Passwords are different
                  </span>
                )}
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block btn-large relative m-auto mt-10 h-12 w-[300px] border-none bg-neutral-200"
              id="valid"
            >
              Submit
            </button>
            <Toaster />
          </form>
          <div>
            <a href="/login"> Already have an account ? Log in</a>
          </div>
        </div>
      )}
      {isRegistered && (
        <div className="space m-auto flex w-[75vw] flex-col text-justify text-slate-900">
          <h2 className="mt-16 text-2xl font-bold">Welcome to the PSGAPI!</h2>

          <p className="mt-8">
            Thanks for registering, below is the token you need to include in
            your API calls. <br /> This token has been sent to your email and
            can only be recovered by email. You can see it on this page only
            now.
          </p>
          <div className="mt-8">
            <b>Api Key:</b>{" "}
            <div className="break-words bg-zinc-200 p-4">{token}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
