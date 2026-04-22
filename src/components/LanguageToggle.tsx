import { useI18n } from "@/i18n/I18nProvider";

/**
 * Minimal premium ES / EN switch.
 * Two-letter pill with an animated active background.
 */
export const LanguageToggle = () => {
  const { lang, setLang } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative inline-flex items-center rounded-full border border-gold/30 bg-white/60 backdrop-blur-sm p-0.5 text-[0.7rem] font-semibold tracking-[0.15em] uppercase select-none"
    >
      <span
        aria-hidden
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-navy transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          lang === "en" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-500 ${
          lang === "es" ? "text-primary-foreground" : "text-navy/70 hover:text-navy"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-500 ${
          lang === "en" ? "text-primary-foreground" : "text-navy/70 hover:text-navy"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
