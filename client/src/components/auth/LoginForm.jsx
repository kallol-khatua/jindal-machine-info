import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import PasswordInput from "./PasswordInput";
import useLogin from "../../hooks/useLogin";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
  });

  const onSubmit = (values) => {
    console.log("onSubmit called");
    console.log(values);

    mutate(values, {
      onSuccess: (response) => {
        console.log("Login success", response);

        login(response.data);

        toast.success("Login Successful");

        navigate("/admin/dashboard", {
          replace: true,
        });
      },

      

      onError: (error) => {
        console.error("Login error", error);

        toast.error(
          error.response?.data?.message || error.message || "Login failed",
        );
      },
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-full max-w-md rounded-2xl bg-white p-10 shadow-xl"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>

        <p className="mt-2 text-slate-500">Sign in to continue</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* EMAIL */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="admin@jindal.com"
            autoComplete="email"
            {...register("email", {
              required: "Email is required",

              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* PASSWORD */}

        <PasswordInput register={register} error={errors.password} />

        {/* REMEMBER */}

        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              {...register("remember")}
              className="h-4 w-4 rounded"
            />
            Remember Me
          </label>
        </div>

        {/* LOGIN BUTTON */}

        <button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? (
            <>
              <svg
                className="mr-3 h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-25"
                />

                <path
                  fill="currentColor"
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Logging In...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>

      <div className="mt-8 border-t pt-5 text-center">
        <p className="text-sm text-slate-400">Machine Information System</p>

        <p className="text-xs text-slate-400">
          Jindal Steel Pellet Plant • Version 1.0
        </p>
      </div>
    </motion.div>
  );
}
