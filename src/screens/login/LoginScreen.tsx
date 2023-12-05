"use client";

import { FormProvider } from "react-hook-form";
import { EmailInput, PasswordInput, RoleInput } from "./Inputs";
import { useLogin } from "./useLogin";
import Link from "next/link";

export function LoginScreen() {
  const { formMethods: methods, isLoading, onSubmit } = useLogin();

  return (
    <div className="flex justify-center items-center h-screen -mt-5">
      <div className="w-96">
        <h1 className="text-4xl font-bold mb-3">Login</h1>

        <FormProvider {...methods}>
          <form aria-disabled={isLoading} onSubmit={onSubmit} className="flex flex-col gap-4">
            <EmailInput />

            <PasswordInput />

            <RoleInput />

            <button
              type="submit"
              className="mt-5 bg-blue-500 disabled:bg-blue-200 text-white rounded-md py-2"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </FormProvider>

        <div className="mt-5">
          <p>
            Don't have an account? <Link href="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
