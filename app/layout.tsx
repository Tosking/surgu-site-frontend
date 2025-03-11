import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
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
      <body className={`${montserrat.variable} antialiased`}>
        <div className="wrapper flex flex-col justify-between min-h-dvh w-full overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
