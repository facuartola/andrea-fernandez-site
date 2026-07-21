import { useEffect, useRef } from "react";
import { FlipCard } from "@/components/FlipCard";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useI18n } from "@/i18n/I18nProvider";
import portrait from "@/assets/andrea-portrait.jpeg";
import qatar from "@/assets/andrea-qatar.jpeg";
import morelia from "@/assets/andrea-morelia.jpeg";
import ronaldinho1 from "@/assets/andrea-ronaldinho-1.jpg";
import ronaldinho2 from "@/assets/andrea-ronaldinho-2.jpeg";
import bbva from "@/assets/andrea-bbva.jpeg";

/* Reveal-on-scroll hook */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    // Safety fallback: if the observer misses elements (e.g. anchor jumps
    // past the threshold, or layout shifts), force-reveal anything in the
    // viewport. Runs once after mount and on every scroll.
    const sweep = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 80 && rect.bottom > -80) {
          el.classList.add("in-view");
        }
      });
    };
    const fallback = window.setTimeout(sweep, 400);
    window.addEventListener("scroll", sweep, { passive: true });
    window.addEventListener("hashchange", sweep);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("hashchange", sweep);
    };
  }, []);
}

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-3 mb-5">
    <span className="gold-rule" />
    <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-gold">
      {children}
    </span>
  </div>
);

const Section = ({
  id,
  alt = false,
  children,
}: {
  id?: string;
  alt?: boolean;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className={`relative py-24 md:py-32 ${alt ? "bg-ivory-soft" : ""}`}
  >
    <div className="mx-auto w-[min(calc(100%-40px),1200px)]">{children}</div>
  </section>
);

const Index = () => {
  useReveal();
  const { t, lang } = useI18n();
  const headerRef = useRef<HTMLElement | null>(null);
  const ornamentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return;
      headerRef.current.classList.toggle("shadow-elegant", window.scrollY > 20);
      headerRef.current.classList.toggle("bg-ivory/90", window.scrollY > 20);
      // Gentle parallax on hero ornament
      if (ornamentRef.current && window.scrollY < 800) {
        const y = window.scrollY * 0.08;
        const r = window.scrollY * 0.02;
        ornamentRef.current.style.transform = `translate3d(${y}px, ${-y}px, 0) rotate(${r}deg)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      key={lang}
      className="min-h-screen bg-ivory text-foreground overflow-x-hidden animate-[fadeIn_0.5s_ease-out]"
    >
      {/* HEADER */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 backdrop-blur-xl bg-ivory/70 border-b border-border transition-all"
      >
        <div className="mx-auto w-[min(calc(100%-40px),1200px)] flex items-center justify-between min-h-[80px] gap-5">
          <a href="#inicio" className="font-display text-2xl font-bold text-navy leading-none">
            Andrea Fernández
            <em className="not-italic block font-sans text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-gold mt-0.5">
              {t("brand.subtitle")}
            </em>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {[
              ["#sobre-mi", t("nav.about")],
              ["#filosofia", t("nav.identity")],
              ["#metodologia", t("nav.method")],
              ["#certificacion", t("nav.cert")],
              ["#autoridad", t("nav.path")],
              ["#equipo", t("nav.team")],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground px-3.5 py-2 rounded-full hover:text-navy hover:bg-navy/5 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 bg-navy text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-navy-mid transition-colors"
            >
              {t("nav.contact")}
            </a>
            <div className="ml-3"><LanguageToggle /></div>
          </nav>
          <div className="lg:hidden"><LanguageToggle /></div>
        </div>
      </header>

      {/* HERO — single dominant editorial image */}
      <section
        id="inicio"
        className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-gradient-ivory"
      >
        {/* concentric gold ornament — gentle parallax + slow drift */}
        <div
          ref={ornamentRef}
          className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-gold/15 animate-drift will-change-transform"
        >
          <div className="absolute inset-10 rounded-full border border-gold/10" />
          <div className="absolute inset-20 rounded-full border border-gold/5" />
        </div>

        <div className="relative mx-auto w-[min(calc(100%-40px),1200px)] grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="reveal">
              <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
            </div>
            <h1 className="reveal font-display font-black text-navy leading-[0.95] text-[clamp(2.8rem,6vw,5.5rem)] mb-7">
              {t("hero.title.a")}
              <em className="text-gold not-italic font-black italic">{t("hero.title.b")}</em>
              {t("hero.title.c")}
            </h1>
            <p className="reveal text-muted-foreground text-base md:text-lg leading-relaxed max-w-[52ch] font-light">
              {t("hero.lead")}
            </p>

            <div className="reveal flex flex-wrap gap-3.5 mt-9 mb-9">
              <a
                href="#certificacion"
                className="inline-flex items-center gap-2 bg-navy text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-navy-mid hover:-translate-y-0.5 hover:shadow-elegant transition-all"
              >
                {t("hero.cta.cert")}
              </a>
              <a
                href="#sobre-mi"
                className="inline-flex items-center gap-2 border border-gold/40 text-gold px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-gold-pale hover:border-gold hover:-translate-y-0.5 transition-all"
              >
                {t("hero.cta.about")}
              </a>
            </div>

            <div className="reveal grid grid-cols-3 border border-gold/30 rounded-2xl overflow-hidden bg-white/60 backdrop-blur">
              {[
                [t("hero.stat1.n"), t("hero.stat1.l")],
                [t("hero.stat2.n"), t("hero.stat2.l")],
                [t("hero.stat3.n"), t("hero.stat3.l")],
              ].map(([n, l], i) => (
                <div
                  key={i}
                  className={`px-4 py-5 text-center ${i < 2 ? "border-r border-gold/30" : ""}`}
                >
                  <strong className="block font-display font-black text-navy text-3xl md:text-4xl leading-none">
                    {n}
                  </strong>
                  <span className="block mt-1.5 text-[0.72rem] tracking-wider uppercase text-muted-foreground">
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* HERO IMAGE — single, dominant, premium */}
          <div className="reveal relative">
            <div className="premium-frame group aspect-[4/5] max-w-[460px] mx-auto">
              <div className="absolute inset-0 z-[1] h-1.5 bg-gradient-gold" />
              <img
                src={portrait}
                alt="Andrea Fernández"
                className="img-cover"
                style={{ objectPosition: "center 30%" }}
                loading="eager"
              />
            </div>
            {/* Floating quote card */}
            <div className="relative -mt-10 mx-4 md:mx-8 bg-gradient-navy rounded-2xl p-7 md:p-8 text-primary-foreground shadow-luxe overflow-hidden">
              <span
                aria-hidden
                className="absolute -top-3 left-5 font-display text-[7rem] leading-none text-white/[0.07] select-none"
              >
                &ldquo;
              </span>
              <blockquote className="relative font-display italic text-lg md:text-xl leading-snug mb-3">
                {t("hero.quote")}
              </blockquote>
              <cite className="not-italic text-[0.72rem] tracking-[0.22em] uppercase font-semibold text-gold-light">
                {t("hero.quote.author")}
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <div className="py-8 border-y border-border bg-white/40">
        <div className="mx-auto w-[min(calc(100%-40px),1200px)]">
          <p className="text-center text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground/80 mb-4">
            {t("strip.label")}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Boca Juniors", "Racing Club", "Sol de América", "Monarcas Morelia",
              "Club Querétaro", "Ronaldinho", "Paulo Dybala", "Rodrigo De Paul",
              "Nissan", "McDonald's", "Coca-Cola",
            ].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-ivory-soft text-sm font-semibold text-navy"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SOBRE ANDREA — 1 strong image, elegant framing */}
      <Section id="sobre-mi">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* About image — uses Morelia portrait, clean asymmetry */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="premium-frame group aspect-[4/5] max-w-[440px] mx-auto">
              <img
                src={morelia}
                alt="Andrea Fernández — Monarcas Morelia"
                className="img-cover"
                style={{ objectPosition: "center 25%" }}
                loading="lazy"
              />
            </div>
            {/* gold accent corner */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-gold/60 rounded-bl-2xl pointer-events-none" />
            <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-gold/60 rounded-tr-2xl pointer-events-none" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="reveal">
              <Eyebrow>{t("about.eyebrow")}</Eyebrow>
            </div>
            <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-8 text-balance max-w-[22ch]">
              {t("about.title")}
            </h2>

            <div className="space-y-5 text-pretty">
              <p className="reveal text-foreground text-[1.05rem] leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="reveal text-muted-foreground leading-relaxed font-light">
                {t("about.p2")}
              </p>
              <p className="reveal text-muted-foreground leading-relaxed font-light">
                {t("about.p3")}
              </p>
            </div>

            <div className="reveal flex flex-wrap gap-2.5 mt-7">
              {["Coach PCC · ICF", "Newfield Network", "Tim Gallwey · LATAM", "Master Coach"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-4 py-1.5 rounded-full bg-gold-pale text-gold border border-gold/30 text-[0.78rem] font-semibold tracking-wide"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* IDENTIDAD — pure typography, no images */}
      <Section id="filosofia" alt>
        <div className="reveal">
          <Eyebrow>{t("id.eyebrow")}</Eyebrow>
        </div>
        <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-14 max-w-[24ch]">
          {t("id.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {[
            [t("id.purpose.t"), t("id.purpose.sub"), t("id.purpose.d")],
            [t("id.vision.t"), t("id.vision.sub"), t("id.vision.d")],
            [t("id.print.t"), t("id.print.sub"), t("id.print.d")],
          ].map(([title, sub, d]) => (
            <div
              key={title}
              className=""
            >
              <FlipCard
                ariaLabel={title}
                minHeight="min-h-[240px]"
                front={
                  <div className="bg-gradient-navy text-primary-foreground border border-gold/20 h-full p-8 flex flex-col items-center justify-center text-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-gold-light" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">{title}</h3>
                  </div>
                }
                back={
                  <div className="bg-gradient-to-br from-gold to-gold-light h-full p-8 flex flex-col items-center justify-center text-center gap-3">
                    <strong className="block text-[0.7rem] tracking-[0.22em] uppercase font-bold text-navy/70">
                      {sub}
                    </strong>
                    <p className="font-display text-lg italic text-navy leading-snug">{d}</p>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            [t("val.amor.t"), t("val.amor.d")],
            [t("val.comp.t"), t("val.comp.d")],
            [t("val.grat.t"), t("val.grat.d")],
            [t("val.amb.t"), t("val.amb.d")],
            [t("val.apr.t"), t("val.apr.d")],
            [t("val.per.t"), t("val.per.d")],
          ].map(([title, d]) => (
            <div key={title}>
              <FlipCard
                ariaLabel={title}
                minHeight="min-h-[220px]"
                front={
                  <div className="bg-card border border-border shadow-soft h-full p-7 flex flex-col items-center justify-center text-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-pale flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <h3 className="font-display text-xl text-navy font-bold">{title}</h3>
                  </div>
                }
                back={
                  <div className="bg-gradient-navy text-primary-foreground h-full p-7 flex flex-col items-center justify-center text-center gap-2">
                    <strong className="block text-[0.66rem] tracking-[0.22em] uppercase font-bold text-gold-light">
                      {title}
                    </strong>
                    <p className="text-white/90 leading-relaxed text-[0.95rem]">{d}</p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </Section>

      {/* METODOLOGÍA */}
      <Section id="metodologia">
        <div className="reveal">
          <Eyebrow>{t("met.eyebrow")}</Eyebrow>
        </div>
        <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-14 max-w-[28ch]">
          {t("met.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            ["01", t("met.1.t"), t("met.1.d")],
            ["02", t("met.2.t"), t("met.2.d")],
            ["03", t("met.3.t"), t("met.3.d")],
            ["04", t("met.4.t"), t("met.4.d")],
          ].map(([num, title, d]) => (
            <div key={num}>
              <FlipCard
                ariaLabel={title}
                minHeight="min-h-[300px] md:min-h-[340px]"
                front={
                  <div className="relative bg-card border border-border shadow-soft h-full p-9 flex flex-col justify-end overflow-hidden">
                    <span className="absolute top-3 right-5 font-display text-7xl font-black text-navy/[0.06] leading-none select-none">
                      {num}
                    </span>
                    <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-gold" />
                    <h3 className="relative font-display text-xl md:text-2xl text-navy font-bold max-w-[20ch] leading-tight">
                      {title}
                    </h3>
                  </div>
                }
                back={
                  <div className="bg-gradient-navy text-primary-foreground h-full p-9 flex flex-col justify-center gap-3">
                    <span className="text-[0.66rem] tracking-[0.25em] uppercase font-bold text-gold-light">
                      {num} {t("met.suffix")}
                    </span>
                    <p className="font-display italic text-lg text-gold-light/90">{title}</p>
                    <p className="text-white/85 leading-relaxed text-[0.95rem]">{d}</p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </Section>

      {/* CERTIFICACIÓN */}
      <Section id="certificacion" alt>
        <div className="reveal">
          <Eyebrow>{t("cert.eyebrow")}</Eyebrow>
        </div>
        <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-12 max-w-[28ch]">
          {t("cert.title")}
        </h2>

        <div className="reveal relative bg-card rounded-2xl p-8 md:p-12 border border-border shadow-soft mb-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-gold" />
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-pale border border-gold/30 rounded-full text-gold text-[0.78rem] font-bold tracking-wider uppercase mb-5">
            {t("cert.badge")}
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-navy font-bold mb-5">
            {t("cert.heading")}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4 font-light">
            {t("cert.p1")}
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            {t("cert.p2")}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6">
          <div className="reveal bg-card rounded-2xl p-9 border border-border shadow-soft">
            <p className="font-display text-xl text-navy font-bold mb-5">{t("cert.struct.t")}</p>
            <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-5 font-light">
              {t("cert.struct.d")}
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                t("cert.s.1"), t("cert.s.2"), t("cert.s.3"),
                t("cert.s.4"), t("cert.s.5"),
                t("cert.s.6"), t("cert.s.7"),
                t("cert.s.8"),
                t("cert.s.9"),
                t("cert.s.10"),
              ].map((it) => (
                <li key={it} className="flex items-start gap-3 text-[0.92rem]">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gold-pale border border-gold/30 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </span>
                  <span className="text-foreground/90">{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal bg-gradient-navy rounded-2xl p-9 shadow-luxe">
            <p className="font-display text-xl text-primary-foreground font-bold mb-6">{t("cert.mods.t")}</p>
            <div className="flex flex-col gap-2">
              {[
                [`${t("mod.label")} 1`, t("mod.1")],
                [`${t("mod.label")} 2`, t("mod.2")],
                [`${t("mod.label")} 3`, t("mod.3")],
                [`${t("mod.label")} 4`, t("mod.4")],
                [`${t("mod.label")} 5`, t("mod.5")],
                [`${t("mod.label")} 6`, t("mod.6")],
                [`${t("mod.label")} 7`, t("mod.7")],
                [`${t("mod.label")} 8`, t("mod.8")],
                [`${t("mod.label")} 9`, t("mod.9")],
                [`${t("mod.label")} 10`, t("mod.10")],
              ].map(([n, title]) => (
                <div
                  key={n}
                  className="group/mod flex items-baseline gap-4 py-2.5 px-2 -mx-2 rounded-lg border-b border-white/10 last:border-0 transition-all duration-500 ease-out hover:bg-white/[0.04] hover:-translate-y-[2px] hover:border-white/20"
                >
                  <span className="text-gold-light text-[0.72rem] tracking-[0.18em] uppercase font-bold w-20 flex-shrink-0 transition-colors duration-500 group-hover/mod:text-gold">
                    {n}
                  </span>
                  <span className="text-white/95 text-[0.95rem] transition-colors duration-500 group-hover/mod:text-white">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* TRAYECTORIA — Editorial gallery, max 3 cols, balanced asymmetry */}
      <Section id="autoridad">
        <div className="reveal">
          <Eyebrow>{t("tr.eyebrow")}</Eyebrow>
        </div>
        <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-14 max-w-[26ch]">
          {t("tr.title")}
        </h2>

        {/* Editorial gallery layout — 4 unique photos, no repeats, intentional spacing */}
        <div className="grid md:grid-cols-12 gap-5 md:gap-6 mb-8">
          {/* Large feature: Qatar World Cup with De Paul */}
          <figure className="reveal md:col-span-7 group lift">
            <div className="premium-frame aspect-[4/5] md:aspect-[5/4]">
              <img
                src={qatar}
                alt="Mundial Qatar 2022 con Rodrigo De Paul"
                className="img-cover"
                style={{ objectPosition: "center 30%" }}
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 px-1">
              <p className="font-display text-lg text-navy font-bold">{t("tr.fig1.t")}</p>
              <p className="text-sm text-muted-foreground">
                {t("tr.fig1.d")}
              </p>
            </figcaption>
          </figure>

          {/* Right column: Ronaldinho training session */}
          <figure className="reveal reveal-delay-1 md:col-span-5 group lift">
            <div className="premium-frame aspect-[4/5] md:aspect-[4/5]">
              <img
                src={ronaldinho1}
                alt="Sesión de coaching con Ronaldinho"
                className="img-cover"
                style={{ objectPosition: "center 35%" }}
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 px-1">
              <p className="font-display text-lg text-navy font-bold">{t("tr.fig2.t")}</p>
              <p className="text-sm text-muted-foreground">
                {t("tr.fig2.d")}
              </p>
            </figcaption>
          </figure>
        </div>

        {/* Second row: 3 col editorial grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          <figure className="reveal group lift">
            <div className="premium-frame aspect-[4/5]">
              <img
                src={ronaldinho2}
                alt="Andrea con Ronaldinho — Querétaro"
                className="img-cover"
                style={{ objectPosition: "center 20%" }}
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 px-1">
              <p className="font-display text-lg text-navy font-bold">{t("tr.fig3.t")}</p>
              <p className="text-sm text-muted-foreground">
                {t("tr.fig3.d")}
              </p>
            </figcaption>
          </figure>

          <figure className="reveal reveal-delay-1 group lift">
            <div className="premium-frame aspect-[4/5]">
              <img
                src={bbva}
                alt="BBVA Liga Bancomer — México"
                className="img-cover"
                style={{ objectPosition: "center 25%" }}
                loading="lazy"
              />
            </div>
            <figcaption className="mt-4 px-1">
              <p className="font-display text-lg text-navy font-bold">{t("tr.fig4.t")}</p>
              <p className="text-sm text-muted-foreground">
                {t("tr.fig4.d")}
              </p>
            </figcaption>
          </figure>

          {/* Editorial press card — replaces image, completes 3-col grid */}
          <article className="reveal reveal-delay-2 bg-gradient-navy rounded-2xl p-8 flex flex-col justify-between aspect-[4/5] text-primary-foreground shadow-luxe lift">
            <div>
              <span className="text-[0.7rem] tracking-[0.25em] uppercase font-bold text-gold-light">
                {t("tr.media.eyebrow")}
              </span>
              <h3 className="font-display text-2xl font-bold mt-3 leading-tight">
                {t("tr.media.title")}
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://share.google/5G4Hvtrf1cVudvzlS"
                target="_blank"
                rel="noopener"
                className="group/link flex items-center justify-between gap-3 border-t border-white/15 pt-4 hover:text-gold-light transition-colors"
              >
                <span>
                  <p className="font-display italic text-lg">{t("tr.media.ole.t")}</p>
                  <p className="text-xs text-white/70">{t("tr.media.ole.d")}</p>
                </span>
                <span className="text-gold-light group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="https://share.google/U2vmrBZ4JVIR77PnY"
                target="_blank"
                rel="noopener"
                className="group/link flex items-center justify-between gap-3 border-t border-white/15 pt-4 hover:text-gold-light transition-colors"
              >
                <span>
                  <p className="font-display italic text-lg">{t("tr.media.marca.t")}</p>
                  <p className="text-xs text-white/70">{t("tr.media.marca.d")}</p>
                </span>
                <span className="text-gold-light group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </article>
        </div>

        {/* Authority cards */}
        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {[
            [t("tr.auth1.t"), [
              "Club Atlético Boca Juniors", "Racing Club de Avellaneda",
              "Club Sol de América", "Monarcas Morelia", "Club Querétaro",
              "Ronaldinho, Rodrigo De Paul, Paulo Dybala",
            ]],
            [t("tr.auth2.t"), [
              "Nissan", "McDonald's", "Coca-Cola",
              t("tr.auth2.i1"),
              t("tr.auth2.i2"),
            ]],
            [t("tr.auth3.t"), [
              t("tr.auth3.i1"), t("tr.auth3.i2"),
              t("tr.auth3.i3"), t("tr.auth3.i4"),
              t("tr.auth3.i5"),
            ]],
          ].map(([title, items]) => (
            <article
              key={title as string}
              className="reveal bg-card rounded-2xl p-8 border border-border shadow-soft lift"
            >
              <div className="w-11 h-11 rounded-full bg-gold-pale mb-5 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <h3 className="font-display text-xl text-navy font-bold mb-4">{title as string}</h3>
              <ul className="flex flex-col gap-2 text-[0.92rem] text-muted-foreground">
                {(items as string[]).map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <span className="text-gold mt-2 flex-shrink-0">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* EQUIPO */}
      <Section id="equipo" alt>
        <div className="reveal">
          <Eyebrow>{t("team.eyebrow")}</Eyebrow>
        </div>
        <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-12 max-w-[24ch]">
          {t("team.title")}
        </h2>

        <div className="reveal bg-card rounded-2xl p-8 md:p-12 border border-border shadow-soft">
          <p className="text-muted-foreground leading-relaxed font-light max-w-3xl mb-10">
            {t("team.lead")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              "Viviana Adamo", "Javier Sotelo", "Oscar Corona", "David Vila",
              "Luis Rocco", "Roxana Saal", "Sabrina Fernández", "Gabriela Trotta",
              "Claudio Bórtoli", "Fernando Frank", "Laura Frutos",
            ].map((name) => {
              const initials = name.split(" ").slice(0, 2).map((w) => w[0]).join("");
              return (
                <div
                  key={name}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-ivory transition-colors"
                >
                  <div className="w-11 h-11 rounded-full bg-gradient-navy flex items-center justify-center text-primary-foreground font-display font-bold text-sm flex-shrink-0">
                    {initials}
                  </div>
                  <span className="text-sm font-medium text-navy">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CLOSING QUOTE */}
      <section className="relative py-28 md:py-36 bg-gradient-navy text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-30 grain pointer-events-none" />
        <div className="relative mx-auto w-[min(calc(100%-40px),900px)] text-center">
          <div className="reveal flex justify-center mb-8">
            <span className="gold-rule" />
          </div>
          <blockquote className="reveal font-display italic text-2xl md:text-4xl leading-[1.25] text-balance">
            {t("close.quote")}
          </blockquote>
          <div className="reveal flex justify-center mt-8 mb-5">
            <span className="gold-rule" />
          </div>
          <cite className="reveal not-italic text-[0.78rem] tracking-[0.3em] uppercase font-semibold text-gold-light">
            {t("close.author")}
          </cite>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-ivory-dark/60 py-16 md:py-20 border-t border-border">
        <div className="mx-auto w-[min(calc(100%-40px),1200px)]">
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <div className="font-display text-2xl font-bold text-navy">
                Andrea Fernández
                <em className="not-italic block font-sans text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-gold mt-0.5">
                  {t("brand.subtitle")}
                </em>
              </div>
              <p className="text-muted-foreground mt-4 leading-relaxed font-light max-w-md">
                {t("footer.tagline")}
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-navy font-bold mb-5">{t("footer.contact")}</p>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <a href="tel:+5491141457744" className="hover:text-gold transition-colors">
                  +54 9 11 4145-7744
                </a>
                <a href="mailto:info@andreatucoach.com" className="hover:text-gold transition-colors">
                  info@andreatucoach.com
                </a>
                <a href="mailto:certi@andreatucoach.com" className="hover:text-gold transition-colors">
                  certi@andreatucoach.com
                </a>
                <a href="#" className="hover:text-gold transition-colors">
                  @andreacoaching
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
            <p>{t("footer.rights")}</p>
            <p>{t("footer.evolving")}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5491141457744"
        target="_blank"
        rel="noopener"
        aria-label={t("wa.aria")}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-luxe hover:scale-110 transition-transform"
      >
        💬
      </a>
    </div>
  );
};

export default Index;
