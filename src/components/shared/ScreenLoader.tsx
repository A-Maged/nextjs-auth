import { Spinner } from "./Spinner";

export function ScreenLoader() {
  return (
    <div
      className="w-full flex justify-center items-center"
      style={{
        height: "calc(100vh - 64px)",
      }}
    >
      <Spinner />
    </div>
  );
}
