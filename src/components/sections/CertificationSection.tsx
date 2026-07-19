import { Eyebrow } from "./Eyebrow";
import { Section } from "./Section";
import { useI18n } from "@/i18n/I18nProvider";

export const CertificationSection = () => {
  const { t } = useI18n();
  const certItems = ["cert.s.1","cert.s.2","cert.s.3","cert.s.4","cert.s.5","cert.s.6","cert.s.7","cert.s.8","cert.s.9","cert.s.10"];
  const modules = Array.from({length: 10}, (_, i) => i + 1);
  return (
    <Section id="certificacion" alt>
      <div className="reveal"><Eyebrow>{t("cert.eyebrow")}</Eyebrow></div>
      <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-12 max-w-[28ch]">{t("cert.title")}</h2>

      <div className="reveal relative bg-card rounded-2xl p-8 md:p-12 border border-border shadow-soft mb-8 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold" />
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-pale border border-gold/30 rounded-full text-gold text-[0.78rem] font-bold tracking-wider uppercase mb-5">{t("cert.badge")}</span>
        <h3 className="font-display text-2xl md:text-3xl text-navy font-bold mb-5">{t("cert.heading")}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4 font-light">{t("cert.p1")}</p>
        <p className="text-muted-foreground leading-relaxed font-light">{t("cert.p2")}</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6">
        <div className="reveal bg-card rounded-2xl p-9 border border-border shadow-soft">
          <p className="font-display text-xl text-navy font-bold mb-5">{t("cert.struct.t")}</p>
          <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-5 font-light">{t("cert.struct.d")}</p>
          <ul className="flex flex-col gap-2.5">
            {certItems.map((k) => (
              <li key={k} className="flex items-start gap-3 text-[0.92rem]">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gold-pale border border-gold/30 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                </span>
                <span className="text-foreground/90">{t(k)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal bg-gradient-navy rounded-2xl p-9 shadow-luxe">
          <p className="font-display text-xl text-primary-foreground font-bold mb-6">{t("cert.mods.t")}</p>
          <div className="flex flex-col gap-2">
            {modules.map((i) => (
              <div key={i} className="group/mod flex items-baseline gap-4 py-2.5 px-2 -mx-2 rounded-lg border-b border-white/10 last:border-0 transition-all duration-500 ease-out hover:bg-white/[0.04] hover:-translate-y-[2px] hover:border-white/20">
                <span className="text-gold-light text-[0.72rem] tracking-[0.18em] uppercase font-bold w-20 flex-shrink-0 transition-colors duration-500 group-hover/mod:text-gold">{t("mod.label")} {i}</span>
                <span className="text-white/95 text-[0.95rem] transition-colors duration-500 group-hover/mod:text-white">{t(`mod.${i}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};