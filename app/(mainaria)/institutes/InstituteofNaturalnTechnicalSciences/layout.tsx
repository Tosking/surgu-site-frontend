import Section from "@/src/components/semantic/Section";
export default function IEITNLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col flex-1 w-full  ">
      <Section className="w-full flex text-center justify-center items-center min-h-[590px] sur-su-bg-natural-tech">
        <h1 className="font-bold text-[96px] uppercase">
          ИНСТИТУТ ЕСТЕСТВЕННЫХ <br /> И ТЕХНИЧЕСКИХ НАУК
        </h1>
      </Section>
      {children}
    </main>
  );
}
