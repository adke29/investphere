import type { Metadata } from "next";
import { roboto } from "@/app/ui/fonts";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./globals.css";

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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
