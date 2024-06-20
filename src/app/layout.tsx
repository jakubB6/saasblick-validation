import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaSBlick | SaaS Managment Tool",
  description: "Simple tool to make SaaS management easier",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
