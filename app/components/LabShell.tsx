"use client";

import { useMemo, useState } from "react";
import type { Filters, SectionKey } from "@/lib/types";
import LabBackground from "./LabBackground";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Figurine from "./Figureine";

export default function LabShell() {
  const [section, setSection] = useState<SectionKey>("about_me");
  const [filters, setFilters] = useState<Filters>({
    search: "",
    tools: [],
    industry: [],
  });

  const filtersDisabled =
    section === "about_me" || section === "education" || section === "contact";

  // mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);

  const header = useMemo(() => {
    const map: Record<SectionKey, { title: string; subtitle: string }> = {
      about_me: {
        title: "About Me",
        subtitle: "Get to know the analyst behind the data.",
      },
      experience: {
        title: "Experience",
        subtitle: "Translating data into outcomes that matter.",
      },
      projects: {
        title: "Projects",
        subtitle: "Case studies and analytical deep-dives.",
      },
      education: {
        title: "Education",
        subtitle: "Academic foundation and certifications.",
      },
      contact: {
        title: "Contact",
        subtitle: "Reach out or download or download the resume.",
      },
    };
    return map[section];
  }, [section]);

  return (
    <LabBackground>
      <div className="mx-auto max-w-6xl p-4 md:p-6">
        {/* top bar */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-semibold tracking-widest text-slate-400">
              CAREER CONSOLE
            </div>
            <h1 className="mt-1 text-2xl font-semibold text-slate-100">
              Subodh Nikumbh
            </h1>
            <p className="text-slate-300 italic tracking-wide">Analyst</p>
          </div>

          <div className="flex items-center gap-2">
            {/* mobile: open controls */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden rounded-xl border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-slate-200 hover:bg-slate-900/40"
            >
              Controls
            </button>

            <a
              href="/resume.pdf"
              download
              className="rounded-xl border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900/40"
            >
              Download Resume PDF
            </a>
          </div>
        </div>

        {/* desktop layout */}
        <div className="hidden md:grid md:grid-cols-[320px_1fr] gap-4">
          <LeftPanel
            section={section}
            setSection={setSection}
            filters={filters}
            setFilters={setFilters}
            filtersDisabled={filtersDisabled}
          />

          <RightPanel section={section} header={header} filters={filters} />
        </div>

        {/* mobile layout: right panel only + drawer controls */}
        <div className="md:hidden">
          <RightPanel section={section} header={header} filters={filters} />

          {mobileOpen && (
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black/60"
                onClick={() => setMobileOpen(false)}
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <LeftPanel
                  section={section}
                  setSection={setSection}
                  filters={filters}
                  setFilters={setFilters}
                  onCloseMobile={() => setMobileOpen(false)}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* figurine assistant */}
      <Figurine section={section} />
    </LabBackground>
  );
}
