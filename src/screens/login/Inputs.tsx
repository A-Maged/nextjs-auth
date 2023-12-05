import { ErrorMsg } from "@/components/shared/ErrorMsg";
import { useFormContext } from "react-hook-form";
import { Inputs } from "./types";

export function EmailInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <label>
      <span>Email</span>
      <input type="email" id="email" {...register("email", { required: "email is required" })} />

      {errors.email && <ErrorMsg fieldError={errors.email} />}
    </label>
  );
}

export function PasswordInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <label>
      <span>Password</span>
      <input
        type="password"
        id="password"
        {...register("password", { required: "password is required" })}
      />

      {errors.password && <ErrorMsg fieldError={errors.password} />}
    </label>
  );
}

export function RoleInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <label>
      <span>Role</span>

      <select id="role" {...register("role", { required: "role is required" })}>
        <option value="client">Client</option>
      </select>

      {errors.role && <ErrorMsg fieldError={errors.role} />}
    </label>
  );
}
