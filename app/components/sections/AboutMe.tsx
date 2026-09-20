export default function AboutMe() {
  return (
    <div className="flex items-start gap-6">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-700/40 to-slate-900/40 blur-xl" />

        <img
          src="/profile.png"
          alt="Profile"
          className="relative h-40 w-40 rounded-2xl border border-slate-700/60 shadow-xl object-cover"
        />
      </div>

      <div className="flex-1 space-y-4">
        <p className="text-slate-300">
          Hi, I’m Subodh. I have recently graduated with a M.S. in Information Technology and Management from UT Dallas 
          and specializing in Business Intelligence, Operations and Data Analytics. 
          Experienced in transforming complex data into actionable insights using tools such as Power BI, Tableau,
          SQL, Python and Advanced Excel.
        </p>

        <p className="text-slate-300 leading-6">
          Skilled at building interactive dashboards, automating reporting
          workflows, and supporting data-driven decision-making across finance, strategy
          and operations.
        </p>

        <p className="text-slate-300 leading-6">
          Passionate about leveraging analytics and AI-driven automation to
          enhance operational efficiency and accelerate digital transformation.
        </p>
      </div>
    </div>
  );
}
