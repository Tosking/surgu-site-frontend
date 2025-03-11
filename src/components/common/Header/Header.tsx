import React from "react";
import SemanticHeader from "../../semantic/SemanticHeader";
import Container from "../Container/Container";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Nav from "../../semantic/Nav";
import Link from "next/link";
import Button from "../../ui/Button/Button";
import SearchIcon from "@/public/search.svg";
import EnglishIcon from "@/public/english.svg";
import BlindIcon from "@/public/blind.svg";
import HeaderMap from "@/public/headermap.png";
const Header = () => {
  return (
    <SemanticHeader className="w-full bg-white">
      <Container>
        <div className="flex items-center justify-between ">
          <Image src={Logo} alt="logo" />
          <div className="flex flex-col flex-1 justify-center items-end">
            <Nav className="text-black py-[16px]">
              <ul className="flex items-center gap-[50px]">
                <li>
                  <ul className="flex gap-[30px]">
                    <li>
                      <Link
                        className="hover:text-sur-primary-blue ease-out duration-300"
                        href={"/abiturient"}
                      >
                        Абитуриенту
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-sur-primary-blue ease-out duration-300"
                        href={"/student"}
                      >
                        Студенту
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-sur-primary-blue ease-out duration-300"
                        href={"/employee"}
                      >
                        Сотруднику
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="flex items-center gap-[40px]">
                  <ul className="flex items-center gap-[30px] ">
                    <li>
                      <Button>
                        <Image src={SearchIcon} alt="search" />
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Image src={EnglishIcon} alt="english" />
                      </Button>
                    </li>
                    <li>
                      <Button>
                        <Image src={BlindIcon} alt="blind" />
                      </Button>
                    </li>
                  </ul>
                  <Link
                    className="border border-[#3C3D41] py-[10px] px-[24px] rounded-[30px] text-[16px] leading-[normal]"
                    href={"/login"}
                  >
                    Войти
                  </Link>
                </li>
              </ul>
            </Nav>
            <Nav className="flex gap-[16px] text-black py-[16px]">
              <ul className="flex items-center gap-[40px]">
                <li>
                  <Link
                    className="hover:text-sur-primary-blue ease-out duration-300"
                    href={"/abiturient"}
                  >
                    Об университете
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-sur-primary-blue ease-out duration-300"
                    href={"/student"}
                  >
                    Наука
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-sur-primary-blue ease-out duration-300"
                    href={"/employee"}
                  >
                    Образование
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-sur-primary-blue ease-out duration-300"
                    href={"/employee"}
                  >
                    Оплата услуг
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-sur-primary-blue ease-out duration-300"
                    href={"/contacts"}
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
              <Link href="/map">
                <Image src={HeaderMap} alt="map" />
              </Link>
            </Nav>
          </div>
        </div>
      </Container>
    </SemanticHeader>
  );
};

export default Header;
