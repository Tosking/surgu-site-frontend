import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const avenirNext = localFont({
  src: [
    {
      path: "../public/fonts/AvenirNext-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AvenirNext-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir-next",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "СурГУ: Сургутский государственный университет",
  description: "Сургутский государственный университет: СурГУ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${avenirNext.variable} ${openSans.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
