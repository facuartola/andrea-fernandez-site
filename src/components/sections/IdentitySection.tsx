import { Eyebrow } from "./Eyebrow";
import { Section } from "./Section";
import { FlipCard } from "@/components/FlipCard";
import { useI18n } from "@/i18n/I18nProvider";

export const IdentitySection = () => {
  const { t } = useI18n();
  return (
    <Section id="filosofia" alt>
      <div className="reveal"><Eyebrow>{t("id.eyebrow")}</Eyebrow></div>
      <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-14 max-w-[24ch]">{t("id.title")}</h2>

      <div className="grid md:grid-cols-3 gap-5 mb-5">
        {[["id.purpose.t","id.purpose.sub","id.purpose.d"],["id.vision.t","id.vision.sub","id.vision.d"],["id.print.t","id.print.sub","id.print.d"]].map(([tK, sK, dK]) => (
          <div key={tK}>
            <FlipCard ariaLabel={t(tK)} minHeight="min-h-[240px]"
              front={<div className="bg-gradient-navy text-primary-foreground border border-gold/20 h-full p-8 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-gold-light" /></div>
                <h3 className="font-display text-2xl font-bold">{t(tK)}</h3>
              </div>}
              back={<div className="bg-gradient-to-br from-gold to-gold-light h-full p-8 flex flex-col items-center justify-center text-center gap-3">
                <strong className="block text-[0.7rem] tracking-[0.22em] uppercase font-bold text-navy/70">{t(sK)}</strong>
                <p className="font-display text-lg italic text-navy leading-snug">{t(dK)}</p>
              </div>}
            />
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {[["val.amor.t","val.amor.d"],["val.comp.t","val.comp.d"],["val.grat.t","val.grat.d"],["val.amb.t","val.amb.d"],["val.apr.t","val.apr.d"],["val.per.t","val.per.d"]].map(([tK, dK]) => (
          <div key={tK}>
            <FlipCard ariaLabel={t(tK)} minHeight="min-h-[220px]"
              front={<div className="bg-card border border-border shadow-soft h-full p-7 flex flex-col items-center justify-center text-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-pale flex items-center justify-center"><span className="w-2 h-2 rounded-full bg-gold" /></div>
                <h3 className="font-display text-xl text-navy font-bold">{t(tK)}</h3>
              </div>}
              back={<div className="bg-gradient-navy text-primary-foreground h-full p-7 flex flex-col items-center justify-center text-center gap-2">
                <strong className="block text-[0.66rem] tracking-[0.22em] uppercase font-bold text-gold-light">{t(tK)}</strong>
                <p className="text-white/90 leading-relaxed text-[0.95rem]">{t(dK)}</p>
              </div>}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};