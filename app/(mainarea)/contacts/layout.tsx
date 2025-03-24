import Section from "@/src/components/semantic/Section";
export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Section className="flex items-center justify-center py-[89px]">
        <h1 className="uppercase font-semibold text-[96px] text-sur-footer-dark italic">
          Контакты
        </h1>
      </Section>
      {children}
    </main>
  );
}
