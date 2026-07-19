import { Eyebrow } from "./Eyebrow";
import { Section } from "./Section";
import { FlipCard } from "@/components/FlipCard";
import { useI18n } from "@/i18n/I18nProvider";

export const MethodologySection = () => {
  const { t } = useI18n();
  return (
    <Section id="metodologia">
      <div className="reveal"><Eyebrow>{t("met.eyebrow")}</Eyebrow></div>
      <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-14 max-w-[28ch]">{t("met.title")}</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {[["01","met.1.t","met.1.d"],["02","met.2.t","met.2.d"],["03","met.3.t","met.3.d"],["04","met.4.t","met.4.d"]].map(([num, tK, dK]) => (
          <div key={num}>
            <FlipCard ariaLabel={t(tK)} minHeight="min-h-[300px] md:min-h-[340px]"
              front={<div className="relative bg-card border border-border shadow-soft h-full p-9 flex flex-col justify-end overflow-hidden">
                <span className="absolute top-3 right-5 font-display text-7xl font-black text-navy/[0.06] leading-none select-none">{num}</span>
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-gold" />
                <h3 className="relative font-display text-xl md:text-2xl text-navy font-bold max-w-[20ch] leading-tight">{t(tK)}</h3>
              </div>}
              back={<div className="bg-gradient-navy text-primary-foreground h-full p-9 flex flex-col justify-center gap-3">
                <span className="text-[0.66rem] tracking-[0.25em] uppercase font-bold text-gold-light">{num} {t("met.suffix")}</span>
                <p className="font-display italic text-lg text-gold-light/90">{t(tK)}</p>
                <p className="text-white/85 leading-relaxed text-[0.95rem]">{t(dK)}</p>
              </div>}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};