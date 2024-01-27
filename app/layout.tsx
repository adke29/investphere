import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./globals.css";

const defaultFont = Roboto({ subsets: ["latin"],weight:'400' });

export const metadata: Metadata = {
  title: "Investsphere",
  description: "Your Investation Asset Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={defaultFont.className}>{children}</body>
    </html>
  );
}
