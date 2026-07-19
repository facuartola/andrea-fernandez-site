import { Eyebrow } from "./Eyebrow";
import { Section } from "./Section";
import { useI18n } from "@/i18n/I18nProvider";
import morelia from "@/assets/andrea-morelia.jpeg";

export const AboutSection = () => {
  const { t } = useI18n();
  return (
    <Section id="sobre-mi">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
        <div className="reveal relative order-2 lg:order-1">
          <div className="premium-frame group aspect-[4/5] max-w-[440px] mx-auto">
            <img src={morelia} alt="Andrea Fernández — Monarcas Morelia" className="img-cover" style={{ objectPosition: "center 25%" }} loading="lazy" />
          </div>
          <div className="hidden md:block absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-gold/60 rounded-bl-2xl pointer-events-none" />
          <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-gold/60 rounded-tr-2xl pointer-events-none" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="reveal"><Eyebrow>{t("about.eyebrow")}</Eyebrow></div>
          <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-8 text-balance max-w-[22ch]">
            {t("about.title")}
          </h2>
          <div className="space-y-5 text-pretty">
            <p className="reveal text-foreground text-[1.05rem] leading-relaxed">{t("about.p1")}</p>
            <p className="reveal text-muted-foreground leading-relaxed font-light">{t("about.p2")}</p>
            <p className="reveal text-muted-foreground leading-relaxed font-light">{t("about.p3")}</p>
          </div>
          <div className="reveal flex flex-wrap gap-2.5 mt-7">
            {["Coach PCC · ICF", "Newfield Network", "Tim Gallwey · LATAM", "Master Coach"].map((t) => (
              <span key={t} className="px-4 py-1.5 rounded-full bg-gold-pale text-gold border border-gold/30 text-[0.78rem] font-semibold tracking-wide">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};