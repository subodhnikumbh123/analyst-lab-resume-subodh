export default function AboutMe() {
  return (
    <div className="grid gap-7 lg:grid-cols-[176px_1fr] lg:items-start">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700/40 to-slate-900/40 blur-xl" />

        <img
          src="/profile.png"
          alt="Subodh Nikumbh"
          className="relative h-44 w-44 rounded-2xl border border-slate-700/60 object-cover shadow-xl"
        />
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-lg font-semibold text-slate-100">
            I turn operational data into clear decisions.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            I’m a Dallas-based data and business analyst with 2+ years of experience
            across analytics, business systems, and AI-enabled workflows. My work spans
            operational reporting, data quality, customer journeys, and decision-support
            tools built with Python, SQL, Power BI, and Excel.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["FOCUS", "BI, risk, and operations"],
            ["APPROACH", "Evidence before assumptions"],
            ["LOCATION", "Dallas, TX · open to relocation"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-700/40 bg-slate-950/40 p-4"
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] text-cyan-300">
                {label}
              </p>
              <p className="mt-2 text-sm text-slate-200">{value}</p>
            </div>
          ))}
        </div>

        <p className="max-w-2xl text-sm leading-6 text-slate-300">
          I’m especially interested in roles where analytics connects finance,
          supply chain, product, and responsible AI to measurable business outcomes.
        </p>
      </div>
    </div>
  );
}
