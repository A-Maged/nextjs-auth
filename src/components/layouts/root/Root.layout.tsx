import { ReactNode } from "react";
import { Nav } from "./Nav";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
}
