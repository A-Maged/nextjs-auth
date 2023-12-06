"use client";
import { useForm } from "react-hook-form";
import { Inputs } from "./types";
import { useRegisterMutation } from "@/api/auth.api";
import { ApiError } from "@/api/types";
import { useRouter } from "next/navigation";
import { NEW_REGISTER_LOCAL_STORAGE } from "@/utils/constants";

export function useRegister() {
  const router = useRouter();

  const formMethods = useForm<Inputs>({
    mode: "onChange",
  });

  const [register, { isLoading, error, isError }] = useRegisterMutation();

  const onSubmit = async function (data: Inputs) {
    const photosValid = data?.photos?.length && data?.photos?.length >= 4;

    if (!photosValid) {
      formMethods.setError("photos", {
        type: "manual",
        message: "Must upload at least 4 photos",
      });

      return;
    }

    var bodyFormData = new FormData();
    bodyFormData.append("firstName", data.firstname);
    bodyFormData.append("lastName", data.lastname);
    bodyFormData.append("email", data.email);
    bodyFormData.append("password", data.password);
    bodyFormData.append("avatar", data.avatar);
    data.photos?.forEach((photo) => {
      bodyFormData.append("photos", photo);
    });

    try {
      await register(bodyFormData).unwrap();

      localStorage.setItem(NEW_REGISTER_LOCAL_STORAGE, "true");

      router.push("/completed-registration");
    } catch (error) {
      Object.entries(error as ApiError).forEach(([fieldName, message]) => {
        formMethods.setError(fieldName?.toLowerCase() as keyof Inputs, {
          message: message as unknown as string,
        });
      });
    }
  };

  return {
    formMethods,
    isLoading,
    isError,
    error,
    onSubmit: formMethods.handleSubmit(onSubmit),
  };
}
