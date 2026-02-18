"use client";

import type { Filters } from "@/lib/types";

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  tools: string[];
  industry: string;
  highlights: string[];
};

const ROLES: Role[] = [
  {
    company: "Yashtantra Technologies",
    title: "Sofware Development Engineer",
    period: "January 2021 – May 2023",
    location: "Mumbai, India",
    tools: ["SQL", "Python", "Figma", "Excel", "Sketch"],
    industry: "Operations",
    highlights: [
      "Designed and implemented design systems for client’s website campaigns using Figma and Sketch, improving consistency and user experience, which contributed to a 10% increase in user engagement",
      "Applied AI-driven analytics (heatmaps, clickstream tracking) to interpret user data and generate actionable business insights, optimizing engagement metrics by 15%",
      "Established comprehensive design documentation and style guide standards across all client projects by creating reusable component libraries that reduced design-to-development handoff time by 30%.",
      "Utilized data analysis, user testing, and process improvement frameworks to enhance product performance, reducing funnel drop-off by 25%",
    ],
  },
];

export default function Experience({ filters }: { filters: Filters }) {
  const filtered = ROLES.filter((role) => {
    const matchesSearch =
      !filters.search ||
      role.company.toLowerCase().includes(filters.search.toLowerCase()) ||
      role.title.toLowerCase().includes(filters.search.toLowerCase());

    const matchesTools =
      filters.tools.length === 0 ||
      filters.tools.every((tool) => role.tools.includes(tool));

    const matchesIndustry =
      filters.industry.length === 0 || filters.industry.includes(role.industry);

    return matchesSearch && matchesTools && matchesIndustry;
  });

  if (filtered.length === 0) {
    return (
      <div className="text-sm text-slate-400">
        No experience matches current filters.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {filtered.map((role, idx) => (
        <ExperienceCard key={idx} role={role} />
      ))}
    </div>
  );
}

function ExperienceCard({ role }: { role: Role }) {
  return (
    <div className="rounded-2xl border border-slate-700/40 bg-slate-950/40 p-5 space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-100">
            {role.title}
          </h3>
          <p className="text-sm text-slate-400">
            {role.company} · {role.location}
          </p>
        </div>
        <span className="text-xs text-slate-400">{role.period}</span>
      </div>

      <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
        {role.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-2">
        {role.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-slate-700/60 bg-slate-900 px-3 py-1 text-xs text-slate-300"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
