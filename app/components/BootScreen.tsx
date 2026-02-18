"use client";

import { useEffect, useMemo, useState } from "react";

type BootScreenProps = {
  onDone: () => void;
  durationMs?: number;
};

export default function BootScreen({
  onDone,
  durationMs = 2200,
}: BootScreenProps) {
  const lines = useMemo(
    () => [
      "Initializing Career Console…",
      "Loading model: Subodh_Nikumbh",
      "Calibrating analytical framework…",
      "Warming up dashboards…",
      "Ready.",
    ],
    [],
  );

  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [cursorOn, setCursorOn] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let i = 0;
    const step = Math.max(250, Math.floor(durationMs / (lines.length + 1)));

    const id = setInterval(() => {
      setVisibleLines((prev) => {
        if (!lines[i]) return prev;
        return [...prev, lines[i]];
      });
      i += 1;
      if (i >= lines.length) {
        clearInterval(id);
        setReady(true);
      }
    }, step);

    const cursor = setInterval(() => setCursorOn((c) => !c), 450);

    return () => {
      clearInterval(id);
      clearInterval(cursor);
    };
  }, [durationMs, lines]);

  useEffect(() => {
    if (!ready) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onDone();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [ready, onDone]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070f] text-slate-100">
      {/* grid / glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,.15)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />

      {/* console card */}
      <div className="mx-auto flex min-h-screen max-w-3xl items-center p-6">
        <div className="w-full rounded-2xl border border-slate-700/50 bg-slate-950/60 p-6 shadow-2xl backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-xs font-semibold tracking-widest text-slate-400">
              LAB BOOT SEQUENCE
            </div>
            <div className="text-xs text-slate-400">v3.0</div>
          </div>

          <div className="font-mono text-sm leading-6">
            {visibleLines.map((l, idx) => (
              <div key={`${idx}-${l}`} className="text-slate-200">
                <span className="text-cyan-300">$</span> {l}
              </div>
            ))}

            <div className="mt-4 text-slate-300">
              <span className="text-cyan-300">$</span>{" "}
              {ready ? (
                <span className="text-green-400">System Ready.</span>
              ) : (
                <>
                  <span className="opacity-90">Booting...</span>
                  <span className={cursorOn ? "opacity-100" : "opacity-0"}>
                    ▍
                  </span>
                </>
              )}
            </div>

            {ready && (
              <button
                onClick={onDone}
                className="mt-4 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-2 text-sm font-semibold text-black transition hover:scale-105"
              >
                Launch Interface...
              </button>
            )}
          </div>

          {/* progress */}
          <div className="mt-6">
            <div className="h-2 w-full rounded-full bg-slate-800">
              <div className="h-2 w-[72%] animate-[boot_2.2s_ease_forwards] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Preparing workspace…
            </div>
          </div>

          {/* key hint */}
          <div className="mt-6 text-xs text-slate-500">
            Welcome to my resume lab. Press{" "}
            <span className="font-mono">Enter</span> or click the button.
          </div>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes boot {
          from {
            width: 8%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
