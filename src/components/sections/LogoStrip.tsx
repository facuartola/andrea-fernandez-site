import { useI18n } from "@/i18n/I18nProvider";

const brands = [
  "Boca Juniors", "Racing Club", "Sol de Am\xE9rica", "Monarcas Morelia",
  "Club Quer\xE9taro", "Ronaldinho", "Paulo Dybala", "Rodrigo De Paul",
  "Nissan", "McDonald\u2019s", "Coca-Cola",
];

export const LogoStrip = () => {
  const { t } = useI18n();
  return (
    <div className="py-8 border-y border-border bg-white/40">
      <div className="mx-auto w-[min(calc(100%-40px),1200px)]">
        <p className="text-center text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground/80 mb-4">
          {t("strip.label")}
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {brands.map((b) => (
            <span key={b} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-ivory-soft text-sm font-semibold text-navy">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};