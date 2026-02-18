export default function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-slate-700/50 bg-slate-950/60 shadow-2xl backdrop-blur",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
