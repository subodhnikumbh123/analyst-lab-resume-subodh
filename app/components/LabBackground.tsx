export default function LabBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070f] text-slate-100">
      {/* grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,.15)_1px,transparent_1px)] [background-size:44px_44px]" />
      {/* soft glows */}
      <div className="pointer-events-none absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-240px] left-[-240px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/5 blur-3xl" />

      {/* content */}
      <div className="relative">{children}</div>
    </div>
  );
}
