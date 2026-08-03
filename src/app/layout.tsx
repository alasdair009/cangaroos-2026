import type { Metadata } from "next";

import "../styles/global.css";
import {Footer, Header} from "@/entities";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
