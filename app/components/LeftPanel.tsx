"use client";

import type { Filters, SectionKey } from "@/lib/types";
import Panel from "./Panel";

const TOOLS = ["SQL", "Python", "Excel", "Tableau", "Power BI", "Figma", "Sketch"];
const INDUSTRIES = ["Finance", "Operations", "Product", "Supply Chain"];

function Pill({
  label,
  active,
  onClick,
  disabled = false,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={[
        "rounded-full px-3 py-1 text-xs transition",
        active
          ? "bg-slate-100 text-slate-950"
          : "bg-slate-900 text-slate-300 hover:bg-slate-800",
        disabled ? "opacity-40 cursor-not-allowed hover:bg-slate-900" : "",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export default function LeftPanel({
  section,
  setSection,
  filters,
  setFilters,
  onCloseMobile,
  filtersDisabled,
}: {
  section: SectionKey;
  setSection: (s: SectionKey) => void;
  filters: Filters;
  setFilters: (f: Filters) => void;
  onCloseMobile?: () => void;
  filtersDisabled?: boolean;
}) {
  const nav = [
    { key: "about_me" as const, label: "About me" },
    { key: "experience" as const, label: "Experience" },
    { key: "projects" as const, label: "Projects" },
    { key: "education" as const, label: "Education" },
    { key: "contact" as const, label: "Contact" },
  ];

  const toggle = (arr: string[], value: string) =>
    arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value];

  const hideFacetFilters = !!filtersDisabled;

  return (
    <Panel className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold tracking-widest text-slate-400">
            CONTROL PANEL
          </div>
        </div>

        {onCloseMobile && (
          <button
            type="button"
            onClick={onCloseMobile}
            className="rounded-xl border border-slate-700/60 bg-slate-950/40 px-3 py-1 text-xs text-slate-200 hover:bg-slate-900/40"
          >
            Close
          </button>
        )}
      </div>

      <div className="mt-4 grid gap-2">
        {nav.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => {
              setSection(item.key);
              onCloseMobile?.();
            }}
            className={[
              "flex items-center justify-between rounded-xl px-3 py-2 text-sm",
              section === item.key
                ? "bg-slate-100 text-slate-950"
                : "bg-slate-950/40 text-slate-200 hover:bg-slate-900/40",
            ].join(" ")}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-4">
        {/* SEARCH stays visible */}
        <div>
          <div className="mb-2 text-xs font-semibold tracking-widest text-slate-400">
            SEARCH
          </div>
          <input
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            placeholder="company, keyword, project…"
            className="w-full rounded-xl border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-slate-300/60"
          />
        </div>

        {/* TOOLS hidden on About */}
        {!hideFacetFilters && (
          <div>
            <div className="mb-2 text-xs font-semibold tracking-widest text-slate-400">
              TOOLS
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <Pill
                  key={t}
                  label={t}
                  active={filters.tools.includes(t)}
                  onClick={() =>
                    setFilters({ ...filters, tools: toggle(filters.tools, t) })
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* INDUSTRY hidden on About */}
        {!hideFacetFilters && (
          <div>
            <div className="mb-2 text-xs font-semibold tracking-widest text-slate-400">
              INDUSTRY
            </div>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map((i) => (
                <Pill
                  key={i}
                  label={i}
                  active={filters.industry.includes(i)}
                  onClick={() =>
                    setFilters({
                      ...filters,
                      industry: toggle(filters.industry, i),
                    })
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* Optional: hide reset too when facet filters are hidden */}
        {!hideFacetFilters && (
          <button
            type="button"
            onClick={() => setFilters({ search: "", tools: [], industry: [] })}
            className="w-full rounded-xl border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900/40"
          >
            Reset Filters
          </button>
        )}
      </div>
    </Panel>
  );
}
