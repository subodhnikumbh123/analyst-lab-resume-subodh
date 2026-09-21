"use client";

export default function Education() {
  const education = [
    {
      school: "The University of Texas at Dallas",
      degree: "M.S., Information Technology and Management",
      detail: "Graduate certificate in Business Analytics and Data Mining",
      period: "Jan 2025 - May 2026",
    },
    {
      school: "Tufts University",
      degree: "M.S., Human Factors Engineering",
      detail: "Certificate in Human-Computer Interaction",
      period: "Sep 2023 - Dec 2024",
    },
    {
      school: "University of Mumbai",
      degree: "B.E., Information Technology",
      detail: "",
      period: "2016 - 2020",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {education.map((item) => (
          <div
            key={item.school}
            className="rounded-2xl border border-slate-700/40 bg-slate-950/40 p-5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-100">{item.school}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.degree}</p>
                {item.detail && <p className="mt-1 text-xs text-slate-500">{item.detail}</p>}
              </div>
              <span className="shrink-0 text-xs text-slate-400">{item.period}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-5">
        <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan-300">
          SELECTED PUBLICATION
        </p>
        <h3 className="mt-2 text-base font-semibold text-slate-100">
          Hate Speech Detection
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          International Journal of Innovation Research in Technology · April 2020
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Research on the challenges faced by automated approaches for detecting
          harmful language in online text.
        </p>
      </div>
    </div>
  );
}
