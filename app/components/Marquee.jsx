"use client";

import { useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";

const subscribe = () => () => {};

// The server HTML holds one copy of the items. A second, aria-hidden copy is
// added in the browser only, so the loop is seamless without duplicate markup.
export default function Marquee({
  items,
  renderItem,
  label,
  duration = "16s",
  listClassName = "",
  controlClassName = "",
}) {
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const [paused, setPaused] = useState(false);

  return (
    <>
      <div
        className={`flex w-max ${isClient ? "animate-fast-scroll" : ""}`}
        style={{
          animationDuration: duration,
          animationPlayState: paused ? "paused" : undefined,
        }}
      >
        <ul className={`flex items-center shrink-0 ${listClassName}`} aria-label={label}>
          {items.map((item) => (
            <li key={item.src} className="shrink-0">
              {renderItem(item, false)}
            </li>
          ))}
        </ul>
        {isClient && (
          <ul className={`flex items-center shrink-0 ${listClassName}`} aria-hidden="true">
            {items.map((item) => (
              <li key={item.src} className="shrink-0">
                {renderItem(item, true)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="button"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? `Play ${label}` : `Pause ${label}`}
        aria-pressed={paused}
        className={`absolute right-2 bottom-0 md:right-[1vw] z-20 p-1.5 md:p-[0.4vw] rounded-full cursor-pointer motion-reduce:hidden ${controlClassName}`}
      >
        {paused ? (
          <Play className="w-3.5 h-3.5 md:w-[0.9vw] md:h-[0.9vw]" />
        ) : (
          <Pause className="w-3.5 h-3.5 md:w-[0.9vw] md:h-[0.9vw]" />
        )}
      </button>
    </>
  );
}
