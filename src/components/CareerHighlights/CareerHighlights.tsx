"use client";

import { useState } from "react";
import HighlightCard from "./HighlightCard";
import HighlightModal from "./HighlightModal";
import { highlightsData } from "./highlightsData";
import type { HighlightData } from "./types";
import { HighlightText } from "../ui/highlightText";

const CareerHighlights = () => {
  const [selected, setSelected] = useState<null | HighlightData>(null);

  return (
    <section
      className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-24"
      id="highlights"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6">
        <p className="section-label mb-3">Selected work</p>
        <HighlightText
          text="Career highlights"
          className="mb-4 text-center text-3xl font-semibold tracking-[-0.02em] sm:text-4xl"
        />
        <p className="mb-14 max-w-xl text-center text-sm leading-relaxed text-[var(--fg-muted)]">
          Deep dives into systems where backend choices directly moved revenue,
          velocity, or reliability.
        </p>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlightsData.map((highlight) => (
            <HighlightCard
              key={highlight.title}
              {...highlight}
              onClick={() => setSelected(highlight)}
            />
          ))}
        </div>
        <HighlightModal
          open={!!selected}
          onClose={() => setSelected(null)}
          highlight={selected}
        />
      </div>
    </section>
  );
};

export default CareerHighlights;
