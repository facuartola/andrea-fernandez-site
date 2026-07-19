interface SectionProps { id?: string; alt?: boolean; children: React.ReactNode }
export const Section = ({ id, alt = false, children }: SectionProps) => (
  <section id={id} className={`relative py-24 md:py-32 ${alt ? "bg-ivory-soft" : ""}`}>
    <div className="mx-auto w-[min(calc(100%-40px),1200px)]">{children}</div>
  </section>
);