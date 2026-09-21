"use client";

import { useEffect, useMemo, useState } from "react";
import type { SectionKey } from "@/lib/types";

const TIPS: Record<SectionKey, { title: string; body: string }> = {
  about_me: {
    title: "Portfolio guide",
    body: "Start here for the shortest version of my analytics focus and the business problems I like solving.",
  },
  experience: {
    title: "Experience guide",
    body: "Use the search and filters to scan my work by company, tool, or business area.",
  },
  projects: {
    title: "Project guide",
    body: "Open a live project to see the decision experience, then review the source for implementation details.",
  },
  education: {
    title: "Education guide",
    body: "My academic work combines information systems, analytics, human factors, and applied AI research.",
  },
  contact: {
    title: "Contact",
    body: "Connect with me on LinkedIn or download the latest resume from the top of the page.",
  },
};

export default function Figurine({ section }: { section: SectionKey }) {
  const tip = useMemo(() => TIPS[section], [section]);
  const [open, setOpen] = useState(false);

  // pop open briefly on section change
  useEffect(() => {
    setOpen(true);
    const t = setTimeout(() => setOpen(false), 5000);
    return () => clearTimeout(t);
  }, [section]);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end gap-3">
      {/* speech bubble */}
      {open && (
        <div className="max-w-[260px] rounded-2xl border border-slate-700/50 bg-slate-950/80 p-3 text-sm shadow-2xl backdrop-blur">
          <div className="text-xs font-semibold tracking-wide text-slate-300">
            {tip.title}
          </div>
          <div className="mt-1 text-slate-200">{tip.body}</div>
          <button
            onClick={() => setOpen(false)}
            className="mt-2 text-xs text-slate-400 hover:text-slate-200"
          >
            dismiss
          </button>
        </div>
      )}

      {/* figurine */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative grid h-14 w-14 place-items-center rounded-full border border-slate-700/50 bg-slate-950/70 shadow-2xl backdrop-blur hover:bg-slate-900/70"
        aria-label="Assistant"
        type="button"
      >
        {/* simple “mascot” face */}
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400/80 to-indigo-400/80" />
        <div className="absolute top-[18px] left-[22px] h-1.5 w-1.5 rounded-full bg-slate-900" />
        <div className="absolute top-[18px] left-[32px] h-1.5 w-1.5 rounded-full bg-slate-900" />
        <div className="absolute top-[28px] left-[26px] h-1 w-4 rounded-full bg-slate-900/80" />

        <div className="pointer-events-none absolute -top-7 rounded-full bg-slate-950/80 px-2 py-1 text-[10px] text-slate-200 opacity-0 shadow group-hover:opacity-100">
          Assistant
        </div>
      </button>
    </div>
  );
}
