interface EyebrowProps { children: React.ReactNode }
export const Eyebrow = ({ children }: EyebrowProps) => (
  <div className="inline-flex items-center gap-3 mb-5">
    <span className="gold-rule" />
    <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-gold">
      {children}
    </span>
  </div>
);