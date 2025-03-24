import Container from "@/src/components/common/Container/Container";
import HeaderSection from "@/src/components/common/HeaderSection/HeaderSection";
import Footer from "@/src/components/semantic/Footer";
import Link from "next/link";
import Vkontakte from "../public/Vkontakte.svg";
import Telegram from "../public/Telegram.svg";
import Rutube from "@/public/Rutube.svg";
import Image from "next/image";
import Section from "@/src/components/semantic/Section";
import Header from "@/src/components/common/Header/Header";
import Button from "@/src/components/ui/Button/Button";
import Template from "@/src/assets/template.jpg";
import NewsCard from "@/src/components/common/News/NewsCard";
import NewsCardTitle from "@/src/components/common/News/NewsCardTitle";
import NewsCardBody from "@/src/components/common/News/NewsCardBody";
import Marquee from "react-fast-marquee";
import Carousel from "@/src/components/common/Carousel";
export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <Header />
      <main className="w-full">
        <Section className="py-[80px]">
          <Container>
            <div className="flex flex-col text-sur-footer-dark">
              <div className="flex mb-[48px]">
                <div className="flex flex-1 flex-col gap-[8px]">
                  <h2 className="text-[48px] font-bold italic">Новости</h2>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[16px] h-[16px] aspect-[1/1] bg-[#15D315] rounded-lg"></div>
                    <p>
                      Важные события и достижения в учебной, научной и
                      культурной жизни университета.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-end">
                  <Button className=" italic border border-sur-footer-dark rounded-[40px] py-[5px] px-[15px] text-[16px] ">
                    Смотреть все новости
                  </Button>
                </div>
              </div>

              <div className="flex  flex-wrap gap-[16px] p-[16px] border border-black rounded-[20px]">
                <NewsCard>
                  <NewsCardTitle type="Сотрудникам" date="03.02.2025" />
                  <NewsCardBody img={Template} title="День родного языка" />
                </NewsCard>
                <NewsCard>
                  <NewsCardTitle type="Сотрудникам" date="03.02.2025" />
                  <NewsCardBody img={Template} title="День родного языка" />
                </NewsCard>
                <NewsCard>
                  <NewsCardTitle type="Сотрудникам" date="03.02.2025" />
                  <NewsCardBody img={Template} title="День родного языка" />
                </NewsCard>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="flex flex-col">
          <Marquee>
            <header className="flex italic">
              <h2 className="text-[72px] font-bold text-[#292A2D]">
                СКОРО В СУРГУ
              </h2>
              <h2 className="text-[72px] font-bold text-[#292A2D]">
                СКОРО В СУРГУ
              </h2>
              <h2 className="text-[72px] font-bold text-[#292A2D]">
                СКОРО В СУРГУ
              </h2>
              <h2 className="text-[72px] font-bold text-[#292A2D]">
                СКОРО В СУРГУ
              </h2>
              <h2 className="text-[72px] font-bold text-[#292A2D]">
                СКОРО В СУРГУ
              </h2>
            </header>
          </Marquee>
          <Container>
            <div className="flex text-[#423F3F] gap-[55px] flex-col lg:flex-row">
              <div className="flex flex-col items-start flex-[1] basis-0 lg:basis-[426px] shrink-0">
                <div className="flex items-start gap-[5px] ">
                  <div className="w-[16px] h-[16px] mt-[4px] aspect-[1/1] bg-[#15D315] rounded-lg"></div>
                  <p>
                    Сургутский государственный университет — это яркая
                    культурная жизнь и разнообразие событий: мастер-классы,
                    выставки, концерты и спорт.
                  </p>
                </div>
                <Button className="mt-[30px] border border-sur-footer-dark rounded-[40px] py-[5px] px-[15px] text-[16px]">
                  Смотреть все анонсы мероприятий
                </Button>
              </div>

              <div className="overflow-hidden ">
                <Carousel />
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer className="w-full bg-sur-footer-dark pt-[72px]">
        <Section className="flex flex-col gap-[122px] contact-section pb-[95px]">
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
    </div>
  );
}
