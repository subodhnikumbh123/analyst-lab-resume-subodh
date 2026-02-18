"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "nikumbhsubodh10@gmail.com"; // <-- replace
  const linkedin = "https://www.linkedin.com/in/subodhnikumbh/"; // <-- replace
  const github = "https://github.com/subodhnikumbh123"; // <-- replace

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-700/40 bg-slate-950/40 p-6 space-y-5">
        <div>
          <h3 className="text-base font-semibold text-slate-100">
            Let’s Connect
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Open to connecting with more like minded professionals. Feel free to
            reach out or download my resume
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3">
          <div>
            <p className="text-xs text-slate-400">Email</p>
            <p className="text-sm text-slate-200">{email}</p>
          </div>
          <button
            onClick={handleCopy}
            className="rounded-lg border border-slate-600 px-3 py-1 text-xs text-slate-300 hover:bg-slate-800 transition"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>

        {/* LinkedIn */}
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 hover:bg-slate-800 transition"
        >
          <div>
            <p className="text-xs text-slate-400">LinkedIn</p>
            <p className="text-sm text-slate-200">View Profile</p>
          </div>
          <span className="text-xs text-slate-400">↗</span>
        </a>

        {/* GitHub */}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 hover:bg-slate-800 transition"
        >
          <div>
            <p className="text-xs text-slate-400">GitHub</p>
            <p className="text-sm text-slate-200">View Projects</p>
          </div>
          <span className="text-xs text-slate-400">↗</span>
        </a>
      </div>
    </div>
  );
}
