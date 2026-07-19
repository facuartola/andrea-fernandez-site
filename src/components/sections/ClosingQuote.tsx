import { useI18n } from "@/i18n/I18nProvider";

export const ClosingQuote = () => {
  const { t } = useI18n();
  return (
    <section className="relative py-28 md:py-36 bg-gradient-navy text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30 grain pointer-events-none" />
      <div className="relative mx-auto w-[min(calc(100%-40px),900px)] text-center">
        <div className="reveal flex justify-center mb-8"><span className="gold-rule" /></div>
        <blockquote className="reveal font-display italic text-2xl md:text-4xl leading-[1.25] text-balance">{t("close.quote")}</blockquote>
        <div className="reveal flex justify-center mt-8 mb-5"><span className="gold-rule" /></div>
        <cite className="reveal not-italic text-[0.78rem] tracking-[0.3em] uppercase font-semibold text-gold-light">{t("close.author")}</cite>
      </div>
    </section>
  );
};