import type { Filters, SectionKey } from "@/lib/types";
import Panel from "./Panel";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function RightPanel({
  section,
  header,
  filters,
}: {
  section: SectionKey;
  header: { title: string; subtitle: string };
  filters: Filters;
}) {
  return (
    <Panel className="p-5">
      <div className="border-b border-slate-700/40 pb-4">
        <h2 className="text-xl font-semibold text-slate-100">{header.title}</h2>
        <p className="mt-1 text-sm text-slate-300">{header.subtitle}</p>

        {(filters.search.length > 0 ||
          filters.tools.length > 0 ||
          filters.industry.length > 0) && (
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
            {filters.search && (
              <span className="rounded-full border border-slate-700/60 bg-slate-950/40 px-3 py-1">
                Search: {filters.search}
              </span>
            )}
            {filters.tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-700/60 bg-slate-950/40 px-3 py-1"
              >
                Tool: {t}
              </span>
            ))}
            {filters.industry.map((i) => (
              <span
                key={i}
                className="rounded-full border border-slate-700/60 bg-slate-950/40 px-3 py-1"
              >
                Industry: {i}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-5">
        {section === "about_me" && <AboutMe />}
        {section === "experience" && <Experience filters={filters} />}
        {section === "projects" && <Projects filters={filters} />}
        {section === "education" && <Education />}
        {section === "contact" && <Contact />}
      </div>
    </Panel>
  );
}
