"use client";

import { useEffect, useMemo, useState } from "react";
import type { SectionKey } from "@/lib/types";

const TIPS: Record<SectionKey, { title: string; body: string }> = {
  about_me: {
    title: "Lab Note: About Me",
    body: "Get to know me! A quick snapshot of who I am, what drives me, and the unique perspective I bring to data analysis.",
  },
  experience: {
    title: "Lab Note: Experience",
    body: "Get to know my work history: where I’ve been, what I’ve done, and the impact I’ve made. A showcase of my professional journey, highlighting key roles, responsibilities, and achievements that have shaped my career.",
  },
  projects: {
    title: "Lab Note: Projects",
    body: "Get to know my projects! A showcase of my hands-on experience, problem-solving skills, and the real-world impact of my work. Each project highlights the tools I used, the challenges I overcame, and the results I achieved.",
  },
  education: {
    title: "Lab Note: Education",
    body: "Get to know my educational background! A summary of my academic journey.",
  },
  contact: {
    title: "Lab Note: Contact",
    body: "Feel free to reach out! Whether you have questions, want to connect, or are interested in collaborating, I’m always open to hearing from fellow data enthusiasts and professionals. Let’s connect and explore opportunities together!",
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
