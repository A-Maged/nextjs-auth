import { FieldError, Merge } from "react-hook-form";

export function ErrorMsg({ fieldError }: { fieldError?: Merge<FieldError, (FieldError | undefined)[]> }) {
  if (!fieldError) {
    return null;
  }

  const msg = Array.isArray(fieldError.message) ? (
    fieldError.message.map((m) => (
      <li key={m} className="first-letter:capitalize">
        {m}
      </li>
    ))
  ) : (
    <li className="first-letter:capitalize">{fieldError.message}</li>
  );

  return <ul className="text-red-600 mt-3 flex flex-col gap-2">{msg}</ul>;
}
