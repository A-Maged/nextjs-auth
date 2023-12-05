import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { Inputs } from "./types";
import { ErrorMsg } from "../../components/ErrorMsg";

export function FirstNameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <div>
      <label className="flex flex-col ">First name</label>

      <input {...register("firstname", { required: "firstname is required" })} />

      <ErrorMsg fieldError={errors.firstname} />
    </div>
  );
}

export function LastnameInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <div>
      <label className="flex flex-col ">Last name</label>

      <input {...register("lastname", { required: "lastname is required" })} />
      {errors.lastname && <ErrorMsg fieldError={errors.lastname} />}
    </div>
  );
}

export function EmailInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <div>
      <label className="flex flex-col ">Email</label>

      <input {...register("email", { required: "email is required" })} />
      {errors.email && <ErrorMsg fieldError={errors.email} />}
    </div>
  );
}

export function PasswordInput() {
  const {
    register,
    formState: { errors },
  } = useFormContext<Inputs>();

  return (
    <div>
      <label className="flex flex-col ">Password</label>

      <input {...register("password", { required: "password is required" })} type="password" />
      {errors.password && <ErrorMsg fieldError={errors.password} />}
    </div>
  );
}

export function PhotosInput() {
  const {
    formState: { errors },
    clearErrors,
    setValue,
  } = useFormContext<Inputs>();

  const photosDropzone = useDropzone({
    onDrop: (acceptedFiles) => {
      clearErrors("photos");
      setValue("photos", acceptedFiles);
    },
  });

  const photosFiles = photosDropzone.acceptedFiles.map((file) => (
    <li className="list-disc" key={file.name}>
      {file.name}
    </li>
  ));

  const x = errors.photos;

  return (
    <div>
      <div {...photosDropzone.getRootProps({ className: "dropzone" })}>
        <input {...photosDropzone.getInputProps()} />
        <em>Photo Files: Drag 'n' drop</em>
      </div>

      {photosDropzone?.acceptedFiles?.length !== 0 && <ul>{photosFiles}</ul>}

      {errors.photos && <ErrorMsg fieldError={errors.photos} />}
    </div>
  );
}

export function AvatarInput() {
  const {
    formState: { errors },
    setValue,
  } = useFormContext<Inputs>();

  const avatarDropzone = useDropzone({
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setValue("avatar", acceptedFiles[0]);
    },
  });

  const avatarFile = avatarDropzone.acceptedFiles.map((file) => (
    <li className="list-disc" key={file.name}>
      {file.name}
    </li>
  ));
  return (
    <div>
      <div {...avatarDropzone.getRootProps({ className: "dropzone" })}>
        <input {...avatarDropzone.getInputProps()} />
        <em>Avatar File: Drag 'n' drop</em>
      </div>

      {avatarDropzone?.acceptedFiles?.length !== 0 && <ul>{avatarFile}</ul>}

      {errors.avatar && <ErrorMsg fieldError={errors.avatar} />}
    </div>
  );
}
