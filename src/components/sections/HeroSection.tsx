import { Eyebrow } from "./Eyebrow";
import { useI18n } from "@/i18n/I18nProvider";
import portrait from "@/assets/andrea-portrait.jpeg";

interface HeroSectionProps {
  ornamentRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection = ({ ornamentRef }: HeroSectionProps) => {
  const { t } = useI18n();

  return (
    <section id="inicio" className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-gradient-ivory">
      <div ref={ornamentRef} className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-gold/15 animate-drift will-change-transform">
        <div className="absolute inset-10 rounded-full border border-gold/10" />
        <div className="absolute inset-20 rounded-full border border-gold/5" />
      </div>

      <div className="relative mx-auto w-[min(calc(100%-40px),1200px)] grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        <div>
          <div className="reveal"><Eyebrow>{t("hero.eyebrow")}</Eyebrow></div>
          <h1 className="reveal font-display font-black text-navy leading-[0.95] text-[clamp(2.8rem,6vw,5.5rem)] mb-7">
            {t("hero.title.a")}
            <em className="text-gold not-italic font-black italic">{t("hero.title.b")}</em>
            {t("hero.title.c")}
          </h1>
          <p className="reveal text-muted-foreground text-base md:text-lg leading-relaxed max-w-[52ch] font-light">
            {t("hero.lead")}
          </p>
          <div className="reveal flex flex-wrap gap-3.5 mt-9 mb-9">
            <a href="#certificacion" className="inline-flex items-center gap-2 bg-navy text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-navy-mid hover:-translate-y-0.5 hover:shadow-elegant transition-all">
              {t("hero.cta.cert")}
            </a>
            <a href="#sobre-mi" className="inline-flex items-center gap-2 border border-gold/40 text-gold px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gold-pale hover:border-gold hover:-translate-y-0.5 transition-all">
              {t("hero.cta.about")}
            </a>
          </div>
          <div className="reveal grid grid-cols-3 border border-gold/30 rounded-2xl overflow-hidden bg-white/60 backdrop-blur">
            {[["hero.stat1.n", "hero.stat1.l"], ["hero.stat2.n", "hero.stat2.l"], ["hero.stat3.n", "hero.stat3.l"]].map(([n, l], i) => (
              <div key={n} className={`px-4 py-5 text-center ${i < 2 ? "border-r border-gold/30" : ""}`}>
                <strong className="block font-display font-black text-navy text-3xl md:text-4xl leading-none">{t(n)}</strong>
                <span className="block mt-1.5 text-[0.72rem] tracking-wider uppercase text-muted-foreground">{t(l)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal relative">
          <div className="premium-frame group aspect-[4/5] max-w-[460px] mx-auto">
            <div className="absolute inset-0 z-[1] h-1.5 bg-gradient-gold" />
            <img src={portrait} alt="Andrea Fernández" className="img-cover" style={{ objectPosition: "center 30%" }} loading="eager" />
          </div>
          <div className="relative -mt-10 mx-4 md:mx-8 bg-gradient-navy rounded-2xl p-7 md:p-8 text-primary-foreground shadow-luxe overflow-hidden">
            <span aria-hidden className="absolute -top-3 left-5 font-display text-[7rem] leading-none text-white/[0.07] select-none">&ldquo;</span>
            <blockquote className="relative font-display italic text-lg md:text-xl leading-snug mb-3">{t("hero.quote")}</blockquote>
            <cite className="not-italic text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-gold-light">{t("hero.quote.author")}</cite>
          </div>
        </div>
      </div>
    </section>
  );
};