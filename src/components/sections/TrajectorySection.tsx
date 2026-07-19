import { Eyebrow } from "./Eyebrow";
import { Section } from "./Section";
import { useI18n } from "@/i18n/I18nProvider";
import qatar from "@/assets/andrea-qatar.jpeg";
import ronaldinho1 from "@/assets/andrea-ronaldinho-1.jpg";
import ronaldinho2 from "@/assets/andrea-ronaldinho-2.jpeg";
import bbva from "@/assets/andrea-bbva.jpeg";

export const TrajectorySection = () => {
  const { t } = useI18n();
  return (
    <Section id="autoridad">
      <div className="reveal"><Eyebrow>{t("tr.eyebrow")}</Eyebrow></div>
      <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-14 max-w-[26ch]">{t("tr.title")}</h2>

      <div className="grid md:grid-cols-12 gap-5 md:gap-6 mb-8">
        <figure className="reveal md:col-span-7 group lift">
          <div className="premium-frame aspect-[4/5] md:aspect-[5/4]">
            <img src={qatar} alt="Mundial Qatar 2022 con Rodrigo De Paul" className="img-cover" style={{ objectPosition: "center 30%" }} loading="lazy" />
          </div>
          <figcaption className="mt-4 px-1">
            <p className="font-display text-lg text-navy font-bold">{t("tr.fig1.t")}</p>
            <p className="text-sm text-muted-foreground">{t("tr.fig1.d")}</p>
          </figcaption>
        </figure>
        <figure className="reveal reveal-delay-1 md:col-span-5 group lift">
          <div className="premium-frame aspect-[4/5] md:aspect-[4/5]">
            <img src={ronaldinho1} alt="Sesión de coaching con Ronaldinho" className="img-cover" style={{ objectPosition: "center 35%" }} loading="lazy" />
          </div>
          <figcaption className="mt-4 px-1">
            <p className="font-display text-lg text-navy font-bold">{t("tr.fig2.t")}</p>
            <p className="text-sm text-muted-foreground">{t("tr.fig2.d")}</p>
          </figcaption>
        </figure>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        <figure className="reveal group lift">
          <div className="premium-frame aspect-[4/5]">
            <img src={ronaldinho2} alt="Andrea con Ronaldinho — Querétaro" className="img-cover" style={{ objectPosition: "center 20%" }} loading="lazy" />
          </div>
          <figcaption className="mt-4 px-1">
            <p className="font-display text-lg text-navy font-bold">{t("tr.fig3.t")}</p>
            <p className="text-sm text-muted-foreground">{t("tr.fig3.d")}</p>
          </figcaption>
        </figure>
        <figure className="reveal reveal-delay-1 group lift">
          <div className="premium-frame aspect-[4/5]">
            <img src={bbva} alt="BBVA Liga Bancomer — México" className="img-cover" style={{ objectPosition: "center 25%" }} loading="lazy" />
          </div>
          <figcaption className="mt-4 px-1">
            <p className="font-display text-lg text-navy font-bold">{t("tr.fig4.t")}</p>
            <p className="text-sm text-muted-foreground">{t("tr.fig4.d")}</p>
          </figcaption>
        </figure>
        <article className="reveal reveal-delay-2 bg-gradient-navy rounded-2xl p-8 flex flex-col justify-between aspect-[4/5] text-primary-foreground shadow-luxe lift">
          <div>
            <span className="text-[0.7rem] tracking-[0.25em] uppercase font-bold text-gold-light">{t("tr.media.eyebrow")}</span>
            <h3 className="font-display text-2xl font-bold mt-3 leading-tight">{t("tr.media.title")}</h3>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Enlace pronto disponible"); }} className="group/link flex items-center justify-between gap-3 border-t border-white/15 pt-4 hover:text-gold-light transition-colors">
              <span>
                <p className="font-display italic text-lg">{t("tr.media.ole.t")}</p>
                <p className="text-xs text-white/70">{t("tr.media.ole.d")}</p>
              </span>
              <span className="text-gold-light group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Enlace pronto disponible"); }} className="group/link flex items-center justify-between gap-3 border-t border-white/15 pt-4 hover:text-gold-light transition-colors">
              <span>
                <p className="font-display italic text-lg">{t("tr.media.marca.t")}</p>
                <p className="text-xs text-white/70">{t("tr.media.marca.d")}</p>
              </span>
              <span className="text-gold-light group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </article>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-16">
        {[["tr.auth1.t",["Club Atlético Boca Juniors","Racing Club de Avellaneda","Club Sol de América","Monarcas Morelia","Club Querétaro","Ronaldinho, Rodrigo De Paul, Paulo Dybala"]],
          ["tr.auth2.t",["Nissan","McDonald's","Coca-Cola","tr.auth2.i1","tr.auth2.i2"]],
          ["tr.auth3.t",["tr.auth3.i1","tr.auth3.i2","tr.auth3.i3","tr.auth3.i4","tr.auth3.i5"]]
        ].map(([titleK, items]: [string, string[]]) => (
          <article key={titleK} className="reveal bg-card rounded-2xl p-8 border border-border shadow-soft lift">
            <div className="w-11 h-11 rounded-full bg-gold-pale mb-5 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-gold" /></div>
            <h3 className="font-display text-xl text-navy font-bold mb-4">{t(titleK)}</h3>
            <ul className="flex flex-col gap-2 text-[0.92rem] text-muted-foreground">
              {items.map((it) => (
                <li key={it} className="flex gap-2.5">
                  <span className="text-gold mt-2 flex-shrink-0">·</span>
                  <span>{it.startsWith("tr.") ? t(it as any) : it}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};