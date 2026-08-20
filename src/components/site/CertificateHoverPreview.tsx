import { useRef, useState } from "react";

type Item = { id: string; label: string; hint: string; src: string; alt: string };

/**
 * Two text links that reveal their certificate image in a popup that smoothly
 * follows the cursor while hovering and fades out on leave.
 */
export function CertificateHoverPreview({ items }: { items: Item[] }) {
  const [active, setActive] = useState<Item | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  const move = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      setPos({ x, y });
    });
  };

  return (
    <div className="mt-8" onMouseMove={move}>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActive(item)}
              onFocus={() => setActive(item)}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
              className="group flex items-baseline gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary"
            >
              <span className="font-display text-sm font-semibold uppercase tracking-wide group-hover:text-primary">
                {item.label}
              </span>
              <span className="text-xs text-muted-foreground">{item.hint}</span>
            </a>
          </li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-50 hidden transition-[opacity,transform] duration-200 ease-out md:block"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${pos.x + 24}px, ${pos.y - 140}px, 0) scale(${active ? 1 : 0.94})`,
          opacity: active ? 1 : 0,
        }}
      >
        {active ? (
          <img
            src={active.src}
            alt=""
            className="max-h-[19rem] w-auto max-w-[22rem] rounded-xl border border-border bg-card object-contain shadow-[var(--shadow-lift)]"
          />
        ) : null}
      </div>
    </div>
  );
}
