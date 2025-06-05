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
    <section className="py-20 bg-gray-50" id="highlights">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <HighlightText
          text="Career Highlights"
          className="text-3xl font-thin-200 text-center mb-12 text-black"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
