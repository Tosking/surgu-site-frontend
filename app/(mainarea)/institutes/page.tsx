import Container from "@/src/components/common/Container/Container";
import Nav from "@/src/components/semantic/Nav";
import Link from "next/link";
export default function IntitutesPage() {
  return (
    <main className="flex flex-col">
      <Container>
        <Nav>
          <ul className="flex flex-col gap-[20px] text-[32px] text-black font-bold">
            <li>
              <Link href="/institutes/polytechnic">
                Политехнический институт
              </Link>
            </li>
            <li>
              <Link href="/institutes/medical">Медицинский институт</Link>
            </li>
            <li>
              <Link href="/institutes/secondary-medical-education">
                Институт среднего медицинского образования
              </Link>
            </li>

            <li>
              <Link href="/institutes/natural-technical-sciences">
                Институт естественных и технических наук
              </Link>
            </li>
            <li>
              <Link href="/institutes/state-law">
                Институт государства и права
              </Link>
            </li>
            <li>
              <Link href="/institutes/economics-management">
                Институт экономики и управления
              </Link>
            </li>
            <li>
              <Link href="/institutes/humanitarian-education-sports">
                Институт гуманитарного образования и спорта
              </Link>
            </li>
          </ul>
        </Nav>
      </Container>
    </main>
  );
}
