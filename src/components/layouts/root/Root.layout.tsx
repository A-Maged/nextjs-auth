import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Nav } from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-zinc-900 !text-white">
      <body className={inter.className}>
        <Nav />

        {children}
      </body>
    </html>
  );
}
