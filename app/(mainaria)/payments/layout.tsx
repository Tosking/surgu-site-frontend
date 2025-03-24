import Section from "@/src/components/semantic/Section";
export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Section className="flex items-center justify-center py-[89px]">
        <h1 className="uppercase font-semibold text-[96px] text-sur-footer-dark italic">
          Оплата услуг
        </h1>
      </Section>
      {children}
    </main>
  );
}
