import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { dict, type DictKey, type Lang } from "./dictionary";

interface I18nCtx {
  lang: Lang;
  t: (key: DictKey) => string;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const Ctx = createContext<I18nCtx | null>(null);

const STORAGE_KEY = "af.lang";

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : "es";
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(() => setLangState((l) => (l === "es" ? "en" : "es")), []);

  const t = useCallback(
    (key: DictKey) => dict[lang][key] ?? dict.es[key] ?? key,
    [lang]
  );

  const value = useMemo<I18nCtx>(() => ({ lang, t, setLang, toggle }), [lang, t, setLang, toggle]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
