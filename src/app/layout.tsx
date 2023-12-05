import "./globals.css";

import { ReduxProvider } from "@/components/ReduxProvider";
import RootLayout from "@/components/layouts/root/Root.layout";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Demo App",
  description: "Generated by create next app",
};

export default function Root({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <RootLayout>{children}</RootLayout>
    </ReduxProvider>
  );
}
