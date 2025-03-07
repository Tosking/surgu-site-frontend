import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/src/components/semantic/Footer";
import Image from "next/image";
import Container from "@/src/components/common/Container/Container";
import Section from "@/src/components/semantic/Section";
import Vkontakte from "../public/Vkontakte.svg";
import Telegram from "../public/Telegram.svg";
import Rutube from "../public/Rutube.svg";
import Header from "@/src/components/common/Header/Header";

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
        <div className="wrapper flex flex-col w-full overflow-hidden">
          <Header />
          {children}
          <Footer className="w-full bg-sur-footer-dark pt-[72px]">
            <Section className="flex flex-col gap-[122px] contact-section pb-[95px]">
              <Container>
                <div className="top flex gap-[15px] justify-end ">
                  <Image width={35} height={35} src={Vkontakte} alt="#" />
                  <Image width={35} height={35} src={Telegram} alt="#" />
                  <Image width={35} height={35} src={Rutube} alt="#" />
                </div>
              </Container>
              <Container>
                <div className="contact-list flex gap-[50px] justify-end text-[16px] pr-[16px] leading-[1.3]">
                  <div className="flex flex-col gap-[35px] contact-col">
                    <div className="contact-group">
                      <h4 className="mb-[10px]">
                        Отдел по организации приема обучающихся
                      </h4>
                      <ul className="phone-list">
                        <li>
                          <Link href="tel:+73462763002">(3462) 76-30-02</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="contact-group">
                      <h4 className="mb-[10px]">Заочная форма обучения</h4>
                      <ul className="phone-list">
                        <li>
                          <Link href="tel:+73462762957">(3462) 76-29-57</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="contact-group">
                      <h4 className="mb-[10px]">Отдел кадров обучающихся</h4>
                      <ul className="phone-list">
                        <li>
                          <a href="tel:+73462762933">(3462) 76-29-33</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[35px] contact-col">
                    <div className="contact-group">
                      <h4 className="mb-[10px]">Канцелярия</h4>
                      <ul className="phone-list">
                        <li>
                          <a href="tel:+73462762933">(3462) 76-30-02</a>
                        </li>
                      </ul>
                    </div>
                    <div className="contact-group">
                      <h4 className="mb-[10px]">Аспирантура</h4>
                      <ul className="phone-list">
                        <li>
                          <a href="tel:+73462762933">(3462) 76-29-57</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Container>
            </Section>
            <div className="footer-copyright border-t border-white py-[44px]">
              <Container>
                <p>© Сургутский государственный университет 2025</p>
                <p>Все права защищены</p>
              </Container>
            </div>
          </Footer>
        </div>
      </body>
    </html>
  );
}
