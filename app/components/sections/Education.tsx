"use client";

export default function Education() {
  return (
    <div className="space-y-6">
      {/* UT Dallas */}
      <div className="rounded-2xl border border-slate-700/40 bg-slate-950/40 p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-100">
              The University of Texas at Dallas
            </h3>
            <p className="text-sm text-slate-400">
              Master of Science, Information Technology Management
            </p>
            <p className="text-xs text-slate-500">
              Concentration: Business Intelligence and Data Analytics
            </p>
          </div>
          <span className="text-xs text-slate-400">May 2026</span>
        </div>
      </div>

      {/* University of Mumbai */}
      <div className="rounded-2xl border border-slate-700/40 bg-slate-950/40 p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-100">
              University of Mumbai
            </h3>
            <p className="text-sm text-slate-400">
              Bachelor of Engineering, Information Technology
            </p>
          </div>
          <span className="text-xs text-slate-400">October 2020</span>
        </div>
      </div>
    </div>
  );
}
