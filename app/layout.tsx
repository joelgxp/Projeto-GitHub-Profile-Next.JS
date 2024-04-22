import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "GitHub Profile",
  description: "GitHub Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.variable} ${roboto.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
