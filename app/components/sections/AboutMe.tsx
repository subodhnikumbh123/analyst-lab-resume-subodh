import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="grid gap-7 lg:grid-cols-[176px_1fr] lg:items-start">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700/40 to-slate-900/40 blur-xl" />

        <Image
          src="/profile.png"
          alt="Subodh Nikumbh"
          width={176}
          height={176}
          className="relative h-44 w-44 rounded-2xl border border-slate-700/60 object-cover shadow-xl"
        />
      </div>

      <div className="space-y-5">
        <div className="max-w-2xl space-y-4 text-sm leading-6 text-slate-300">
          <p>
            Hi, I’m Subodh. I have recently graduated with a M.S. in Information
            Technology and Management from UT Dallas and specializing in Business
            Intelligence, Operations and Data Analytics.
          </p>
          <p>
            I have 2+ years of experience in industries related to AI, Financial Data
            Analytics and Supply Chain. Majority of my work focused on transforming
            complex data into actionable insights using tools such as SQL, Python,
            Power BI, Tableau, and Advanced Excel.
          </p>
          <p>
            Skilled at building interactive dashboards, automating reporting workflows,
            and supporting data-driven decision-making across finance, strategy and
            operations.
          </p>
          <p>
            Passionate about leveraging analytics and AI-driven automation to enhance
            operational efficiency and accelerate digital transformation.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["FOCUS", "Data Analytics, Risk Management, Operations"],
            ["APPROACH", "Evidence before Assumptions"],
            ["LOCATION", "Dallas, TX"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-700/40 bg-slate-950/40 p-4"
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan-300">
                {label}
              </p>
              <p className="mt-2 text-sm text-slate-200">{value}</p>
              {label === "LOCATION" && (
                <p className="mt-1 text-sm text-slate-200">Open to Relocation</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
