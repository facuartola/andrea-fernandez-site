import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useI18n } from "@/i18n/I18nProvider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface HeaderProps {
  headerRef: React.RefObject<HTMLElement | null>;
}

const navItems = ["about", "identity", "method", "cert", "path", "team"] as const;
const navMap: Record<string, string> = {
  about: "sobre-mi",
  identity: "filosofia",
  method: "metodologia",
  cert: "certificacion",
  path: "autoridad",
  team: "equipo",
};

export const Header = ({ headerRef }: HeaderProps) => {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 backdrop-blur-xl bg-ivory/70 border-b border-border transition-all"
    >
      <div className="mx-auto w-[min(calc(100%-40px),1200px)] flex items-center justify-between min-h-[80px] gap-5">
        <a href="#inicio" className="font-display text-2xl font-bold text-navy leading-none">
          Andrea Fern\xE1ndez
          <em className="not-italic block font-sans text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-gold mt-0.5">
            {t("brand.subtitle")}
          </em>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((key) => (
            <a
              key={key}
              href={`#${navMap[key]}`}
              className="text-sm font-medium text-muted-foreground px-3.5 py-2 rounded-full hover:text-navy hover:bg-navy/5 transition-colors"
            >
              {t(`nav.${key}`)}
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

        {/* Mobile: hamburger + lang toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir men\xFA"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-navy/5 transition-colors"
              >
                <Menu className="w-5 h-5 text-navy" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-ivory border-l border-border pt-16 w-72">
              <nav className="flex flex-col gap-2">
                {navItems.map((key) => (
                  <a
                    key={key}
                    href={`#${navMap[key]}`}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-muted-foreground px-4 py-3 rounded-xl hover:text-navy hover:bg-navy/5 transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </a>
                ))}
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="mt-2 bg-navy text-primary-foreground text-sm font-semibold px-5 py-3 rounded-full hover:bg-navy-mid transition-colors text-center"
                >
                  {t("nav.contact")}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};