'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledJsxRegistry from "./registry";
import { ThemeProvider } from "styled-components";

import theme from "./global/theme";
import { Providers } from "./Providers/providers";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "PDV - Hamburgueria",
//   description: "PDV - para hamburgueria",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
