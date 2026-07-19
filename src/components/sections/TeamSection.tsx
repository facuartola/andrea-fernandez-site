import { Eyebrow } from "./Eyebrow";
import { Section } from "./Section";
import { useI18n } from "@/i18n/I18nProvider";

const teamMembers = [
  "Viviana Adamo", "Javier Sotelo", "Oscar Corona", "David Vila",
  "Luis Rocco", "Roxana Saal", "Sabrina Fern\xE1ndez", "Gabriela Trotta",
  "Claudio B\xF3rtoli", "Fernando Frank", "Laura Frutos",
];

export const TeamSection = () => {
  const { t } = useI18n();
  return (
    <Section id="equipo" alt>
      <div className="reveal"><Eyebrow>{t("team.eyebrow")}</Eyebrow></div>
      <h2 className="reveal font-display text-navy leading-[1.05] text-[clamp(2rem,3.6vw,3.4rem)] font-bold mb-12 max-w-[24ch]">{t("team.title")}</h2>
      <div className="reveal bg-card rounded-2xl p-8 md:p-12 border border-border shadow-soft">
        <p className="text-muted-foreground leading-relaxed font-light max-w-3xl mb-10">{t("team.lead")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {teamMembers.map((name) => {
            const initials = name.split(" ").slice(0, 2).map((w) => w[0]).join("");
            return (
              <div key={name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-ivory transition-colors">
                <div className="w-11 h-11 rounded-full bg-gradient-navy flex items-center justify-center text-primary-foreground font-display font-bold text-sm flex-shrink-0">{initials}</div>
                <span className="text-sm font-medium text-navy">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};