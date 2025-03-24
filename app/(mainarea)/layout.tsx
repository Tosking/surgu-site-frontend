import Header from "@/src/components/common/Header/Header";
import React from "react";
import Container from "@/src/components/common/Container/Container";
import Footer from "@/src/components/semantic/Footer";
import Link from "next/link";
import Vkontakte from "../../public/Vkontakte.svg";
import Telegram from "../../public/Telegram.svg";
import Rutube from "../../public//Rutube.svg";
import Section from "@/src/components/semantic/Section";
import Breadcrumbs from "@/src/components/features/BreadCrumbs/BreadCrumbs";
import Arrow from "@/src/assets/Arrow.svg";
import Image from "next/image";
export default function MainAria({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Container className="mt-[55px]">
        <Breadcrumbs
          homeElement={"Главная"}
          separator={<Image src={Arrow} alt="arrow" />}
          activeClasses="text-bold"
          containerClasses="flex  text-[#444444]"
          listClasses="hover:underline mx-2 text-[12px] italic "
          capitalizeLinks
        />
      </Container>
      {children}

      <Footer className="w-full bg-sur-footer-dark pt-[72px]">
        <Section className="flex flex-col gap-[122px] contact-section pb-[95px] ">
          <Container>
            <div className="top flex gap-[15px] justify-end ">
              <Link href={"https://vk.com/surgu"}>
                <Image width={35} height={35} src={Vkontakte} alt="#" />
              </Link>
              <Link href={"https://t.me/surgu_university"}>
                <Image width={35} height={35} src={Telegram} alt="#" />
              </Link>
              <Link href={"https://rutube.ru/channel/25613617/"}>
                <Image width={35} height={35} src={Rutube} alt="#" />
              </Link>
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
    </>
  );
}
