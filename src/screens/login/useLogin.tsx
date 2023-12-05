"use client";
import { useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "@/api/auth.api";
import { useRouter } from "next/navigation";
import { ApiError } from "@/api/types";
import { Inputs } from "./types";

export function useLogin() {
  const router = useRouter();

  const formMethods = useForm<Inputs>();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: Inputs) => {
    try {
      await login(data).unwrap();

      router.push("/");
    } catch (error) {
      setFormErrorFromApiError(formMethods.setError, error);
    }
  };

  return {
    formMethods,
    isLoading,
    onSubmit: formMethods.handleSubmit(onSubmit),
  };
}

function setFormErrorFromApiError(setError: any, error: any) {
  Object.entries(error as ApiError).forEach(([fieldName, message]) => {
    setError(fieldName?.toLowerCase() as keyof Inputs, {
      message: message as unknown as string,
    });
  });
}
