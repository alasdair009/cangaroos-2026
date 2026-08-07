import "../styles/global.css";
import { Footer, Header } from "@/entities";
import type { ReactNode } from "react";
import { Analytics } from '@vercel/analytics/next';

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
      <Analytics />
      </body>
    </html>
  );
}
