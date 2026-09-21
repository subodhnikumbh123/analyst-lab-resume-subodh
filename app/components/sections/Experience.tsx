"use client";

import type { Filters } from "@/lib/types";

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  tools: string[];
  industry: string;
  summary: string;
};

const ROLES: Role[] = [
  {
    company: "Confer Solutions AI",
    title: "Data Analytics Consultant",
    period: "Jan 2026 - May 2026",
    location: "Dallas, TX",
    tools: ["Python", "AI Simulation", "Excel"],
    industry: "AI",
    summary:
      "Analyzed customer journeys for a global nonprofit and helped shape a conversational AI experience with integrated donation and location workflows.",
  },
  {
    company: "HeartMath Inc.",
    title: "Academic Project Intern",
    period: "Jan 2024 - May 2024",
    location: "Boston, MA · Hybrid",
    tools: ["Excel", "Figma"],
    industry: "Product",
    summary:
      "Developed client-specific concepts for emWave2 users with limited dexterity, with an emphasis on usability and product-risk reduction.",
  },
  {
    company: "Tufts University",
    title: "Student Services",
    period: "Sep 2023 - May 2024",
    location: "Boston, MA · On-site",
    tools: ["Excel"],
    industry: "Operations",
    summary:
      "Supported student-services administration and cross-team coordination in a fast-moving university environment.",
  },
  {
    company: "Robotics For All",
    title: "Academic Project Intern",
    period: "Sep 2023 - Dec 2023",
    location: "Boston, MA · Hybrid",
    tools: ["Figma"],
    industry: "Product",
    summary:
      "Supported a high-school robotics team for an Amazon-hosted competition and contributed permanent physical-design installations for its robotics club.",
  },
  {
    company: "Yashtantra Technologies",
    title: "Software Development Engineer",
    period: "Jan 2021 - May 2023",
    location: "Mumbai, India · Remote",
    tools: ["Python", "SQL", "Power BI", "Excel"],
    industry: "Operations",
    summary:
      "Built data-quality workflows, KPI reporting, and client-facing systems while supporting issue analysis and process improvement.",
  },
  {
    company: "MILESTONE (NGO)",
    title: "Software Engineer Intern",
    period: "Aug 2020 - Dec 2020",
    location: "Delhi, India · Remote",
    tools: ["Excel", "SQL"],
    industry: "Product",
    summary:
      "Supported software development, research, and delivery for a nonprofit organization.",
  },
  {
    company: "Void Consulting Services & Solutions",
    title: "Frontend Intern",
    period: "May 2020 - Jul 2020",
    location: "Trivandrum, India",
    tools: ["TypeScript", "SQL"],
    industry: "Product",
    summary:
      "Contributed to frontend implementation and database-connected web experiences for client work.",
  },
  {
    company: "The Shaadi Times",
    title: "Data Analyst Intern",
    period: "Jan 2020 - May 2020",
    location: "Mumbai, India · On-site",
    tools: ["Excel", "SQL"],
    industry: "Operations",
    summary:
      "Supported business reporting and exploratory analysis for a consumer-facing media organization.",
  },
];

export default function Experience({ filters }: { filters: Filters }) {
  const filtered = ROLES.filter((role) => {
    const q = filters.search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      [role.company, role.title, role.location, role.summary]
        .join(" ")
        .toLowerCase()
        .includes(q);
    const matchesTools =
      filters.tools.length === 0 ||
      filters.tools.some((tool) => role.tools.includes(tool));
    const matchesIndustry =
      filters.industry.length === 0 || filters.industry.includes(role.industry);

    return matchesSearch && matchesTools && matchesIndustry;
  });

  if (filtered.length === 0) {
    return <div className="text-sm text-slate-400">No experience matches current filters.</div>;
  }

  return (
    <div className="relative space-y-3 before:absolute before:bottom-4 before:left-[7px] before:top-4 before:w-px before:bg-slate-700/50">
      {filtered.map((role) => (
        <ExperienceCard key={`${role.company}-${role.period}`} role={role} />
      ))}
    </div>
  );
}

function ExperienceCard({ role }: { role: Role }) {
  return (
    <article className="relative pl-7">
      <span className="absolute left-0 top-6 h-[15px] w-[15px] rounded-full border-4 border-slate-950 bg-cyan-300" />
      <div className="rounded-2xl border border-slate-700/40 bg-slate-950/40 p-5 transition hover:border-slate-600/70">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-100">{role.title}</h3>
            <p className="mt-1 text-sm text-slate-400">
              {role.company} · {role.location}
            </p>
          </div>
          <span className="shrink-0 text-xs text-slate-400">{role.period}</span>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-300">{role.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
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
    </article>
  );
}
