"use client";

import { FormProvider } from "react-hook-form";
import {
  AvatarInput,
  EmailInput,
  FirstNameInput,
  LastnameInput,
  PasswordInput,
  PhotosInput,
} from "./Inputs";
import { useRegister } from "./useRegister";
import Link from "next/link";
import { Spinner } from "@/components/shared/Spinner";

export function RegisterScreen() {
  const { formMethods, isLoading, onSubmit } = useRegister();

  return (
    <div className="flex justify-center items-center h-screen -mt-5">
      <div className="w-96">
        <h1 className="text-4xl font-bold mb-3">Register</h1>

        <FormProvider {...formMethods}>
          <form aria-disabled={isLoading} onSubmit={onSubmit} className="flex flex-col gap-4">
            <FirstNameInput />

            <LastnameInput />

            <EmailInput />

            <PasswordInput />

            <PhotosInput />

            <AvatarInput />

            <button
              type="submit"
              className="mt-5 bg-blue-500 disabled:bg-blue-200 text-white rounded-md py-2 flex justify-center items-center gap-2"
            >
              {isLoading ? <Spinner /> : "Register"}
            </button>
          </form>
        </FormProvider>

        <div className="mt-5">
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
