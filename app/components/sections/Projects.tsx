"use client";

import type { Filters } from "@/lib/types";
type Project = {
  title: string;
  tools: string[];
  industry: string;
  highlights: string[];
};

const PROJECTS: Project[] = [
  {
    title: "HeartMath Wearable Heart Rate Monitor",
    tools: ["Python", "SQL", "Tableau", "Excel"],
    industry: "Product",
    highlights: [
      "Collaborated with HeartMath’s Inner Balance Coherence and emWave2 clients with limited dexterity to track heart rate variability, improving tracking accuracy by 20% through tailored support",
      "Conducted risk analysis (PFMEA) and ensured compliance with FCC guidelines to design client-specific solutions that reduced potential product risks by 10%",
      "Supported clients by 3D printing custom finger-sensor supports, enabling autonomous use of HeartMath’s ecosystem, which increased client’s independence by 75%",
    ],
  },
  {
    title: "Cargo Aviation Analysis",
    tools: ["Power BI", "Excel"],
    industry: "Finance",
    highlights: [
      "Analyzed global airport cargo data for performance insights and industry trends",
      "Focused on key metrics including Average Revenue per Flight, Yield, Load Rate, and Revenue per Load",
      "Developed Power BI dashboards to track revenue and yield trends, helping identify top-performing routes",
    ],
  },
  {
    title: "End-to-End SQL Scripting for Indian Railways",
    tools: ["SQL"],
    industry: "Operations",
    highlights: [
      "Created an end-to-end database from scratch, integrating raw data into Visual Studio Code based MySQL database",
      "Developed an ER diagram for Indian Railways Database with 30,000 trains in the Central Zone of Indian Railway",
      "Conducted thorough data cleaning in Excel, eliminating 575 duplicates, 350 null values, and filtering outliers",
      "Designed a streamlined MySQL database based on the ER diagram, reducing redundancy by 20%",
    ],
  },
];

export default function Projects({ filters }: { filters: Filters }) {
  const filtered = PROJECTS.filter((project) => {
    const q = filters.search.trim().toLowerCase();

    const matchesSearch =
      q === "" ||
      project.title.toLowerCase().includes(q) ||
      project.highlights.some((h) => h.toLowerCase().includes(q)) ||
      project.tools.some((t) => t.toLowerCase().includes(q)) ||
      project.industry.toLowerCase().includes(q);

    const matchesTools =
      filters.tools.length === 0 ||
      filters.tools.some((tool) => project.tools.includes(tool));

    const matchesIndustry =
      filters.industry.length === 0 ||
      filters.industry.includes(project.industry);

    return matchesSearch && matchesTools && matchesIndustry;
  });

  if (filtered.length === 0) {
    return (
      <div className="text-sm text-slate-400">
        No projects match current filters.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {filtered.map((project, idx) => (
        <div
          key={idx}
          className="rounded-2xl border border-slate-700/40 bg-slate-950/40 p-5 space-y-3"
        >
          <h3 className="text-base font-semibold text-slate-100">
            {project.title}
          </h3>

          <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-slate-700/60 bg-slate-900 px-3 py-1 text-xs text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
