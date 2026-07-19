import { useI18n } from "@/i18n/I18nProvider";

export const FooterSection = () => {
  const { t } = useI18n();
  return (
    <footer id="contacto" className="bg-ivory-dark/60 py-16 md:py-20 border-t border-border">
      <div className="mx-auto w-[min(calc(100%-40px),1200px)]">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <div className="font-display text-2xl font-bold text-navy">
              Andrea Fernández
              <em className="not-italic block font-sans text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-gold mt-0.5">{t("brand.subtitle")}</em>
            </div>
            <p className="text-muted-foreground mt-4 leading-relaxed font-light max-w-md">{t("footer.tagline")}</p>
          </div>
          <div>
            <p className="font-display text-lg text-navy font-bold mb-5">{t("footer.contact")}</p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+5491141457744" className="hover:text-gold transition-colors">+54 9 11 4145-7744</a>
              <a href="mailto:info@andreatucoach.com" className="hover:text-gold transition-colors">info@andreatucoach.com</a>
              <a href="mailto:certi@andreatucoach.com" className="hover:text-gold transition-colors">certi@andreatucoach.com</a>
              <a href="https://www.instagram.com/andreacoaching/" target="_blank" rel="noopener" className="hover:text-gold transition-colors">@andreacoaching</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>{t("footer.rights")}</p>
          <p>{t("footer.evolving")}</p>
        </div>
      </div>
    </footer>
  );
};