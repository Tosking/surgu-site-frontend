export default function AnimatedSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col fade-in">{children}</div>;
}
