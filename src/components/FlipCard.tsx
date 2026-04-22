import { ReactNode, useCallback, useState, KeyboardEvent } from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  /** Min height (e.g. "min-h-[240px]") */
  minHeight?: string;
  ariaLabel?: string;
}

/**
 * Premium flip card.
 * - Desktop: flips on hover (CSS).
 * - Mobile / keyboard: flips on tap or Enter/Space.
 * - Smooth 0.9s cubic-bezier easing.
 */
export const FlipCard = ({
  front,
  back,
  className = "",
  minHeight = "min-h-[240px]",
  ariaLabel,
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  const toggle = useCallback(() => {
    // Only force-toggle on touch / non-hover devices.
    if (window.matchMedia("(hover: none)").matches) {
      setFlipped((v) => !v);
    }
  }, []);

  const onKey = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((v) => !v);
    }
  }, []);

  return (
    <div
      className={`flip-card ${flipped ? "is-flipped" : ""} ${minHeight} ${className}`}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={onKey}
    >
      <div className="flip-inner">
        <div className="flip-face">{front}</div>
        <div className="flip-face flip-back">{back}</div>
      </div>
    </div>
  );
};

export default FlipCard;