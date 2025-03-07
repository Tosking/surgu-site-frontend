import Container from "@/src/components/common/Container/Container";
import HeaderSection from "@/src/components/common/HeaderSection/HeaderSection";
import Footer from "@/src/components/semantic/Footer";
import Link from "next/link";
import Vkontakte from "../public/Vkontakte.svg";
import Telegram from "../public/Telegram.svg";
import Rutube from "../public/Rutube.svg";
import Image from "next/image";
import Section from "@/src/components/semantic/Section";
import Header from "@/src/components/common/Header/Header";
export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <Header />
      <main className="w-full bg-sur-sections-dark ">
        <section className="w-full py-[60px] ">
          <Container>
            <div className="flex flex-col ">
              <HeaderSection color="white" title="Онлайн-сервисы" />
              <div className="flex flex-col gap-[10px] mx-0     mt-[98px]">
                <div className="flex flex-col sm:flex-row items-center justify-center  gap-[10px]  ">
                  <div className="flex flex-1 flex-shrink-0 max-w-[242px]  relative text-center flex-col justify-center rounded-[20px] items-center border border-white p-[15px] gap-[15px] min-h-[184px]">
                    <span className="text-white font-bold text-[22px] ">
                      АИС студент
                    </span>
                    <p className="text-center">
                      Платформа для продвижения проектов
                    </p>
                    <Link
                      href={"https://student.surgu.ru/"}
                      className="absolute w-full h-full inset-0 opacity-0 hover:opacity-100 flex justify-center items-center hover:transition-opacity duration-300 ease-in cursor-pointer hover:bg-white hover:rounded-[20px] text-black"
                    >
                      Перейти
                    </Link>
                  </div>
                  <div className=" flex flex-1 flex-shrink-0 max-w-[242px]  relative text-center flex-col justify-center rounded-[20px] items-center border border-white p-[15px] gap-[15px] min-h-[184px]">
                    <span className="text-white font-bold text-[22px] ">
                      Электронная библиотека
                    </span>
                    <p className="text-center">
                      Доступ к учебной и научной литературе
                    </p>
                    <Link
                      href={"https://elib.surgu.ru/"}
                      className="absolute w-full h-full inset-0 opacity-0 hover:opacity-100 flex justify-center items-center hover:transition-opacity duration-300 ease-in cursor-pointer hover:bg-white hover:rounded-[20px] text-black"
                    >
                      Перейти
                    </Link>
                  </div>
                  <div className=" flex  flex-1 flex-shrink-0 max-w-[242px] relative text-center flex-col justify-center rounded-[20px] items-center border border-white p-[15px] gap-[15px] min-h-[184px]">
                    <span className="text-white font-bold text-[22px] ">
                      Абитуриент СурГУ
                    </span>
                    <p className="text-center">Платформа для поступающих</p>
                    <Link
                      href={"https://go.surgu.ru/"}
                      className="absolute w-full h-full inset-0 opacity-0 hover:opacity-100 flex justify-center items-center hover:transition-opacity duration-300 ease-in cursor-pointer hover:bg-white hover:rounded-[20px] text-black"
                    >
                      Перейти
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col sm:flex-row gap-[10px]">
                  <div className=" flex max-w-[242px]  relative text-center flex-col justify-center rounded-[20px] items-center border border-white p-[15px] gap-[15px] min-h-[184px]">
                    <span className="text-white font-bold text-[22px] ">
                      Абитуриент СурГУ
                    </span>
                    <p className="text-center">Платформа для поступающих</p>
                    <Link
                      href={"https://go.surgu.ru/"}
                      className="absolute w-full h-full inset-0 opacity-0 hover:opacity-100 flex justify-center items-center hover:transition-opacity duration-300 ease-in cursor-pointer hover:bg-white hover:rounded-[20px] text-black"
                    >
                      Перейти
                    </Link>
                  </div>
                  <div className=" flex max-w-[242px]  relative text-center flex-col justify-center rounded-[20px] items-center border border-white p-[15px] gap-[15px] min-h-[184px]">
                    <span className="text-white font-bold text-[22px] ">
                      АРГО
                    </span>
                    <p className="text-center">
                      Центр дополнительного образования детей
                    </p>
                    <Link
                      href={"https://go.surgu.ru/"}
                      className="absolute w-full h-full inset-0 opacity-0 hover:opacity-100 flex justify-center items-center hover:transition-opacity duration-300 ease-in cursor-pointer hover:bg-white hover:rounded-[20px] text-black"
                    >
                      Перейти
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
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
  );
}
