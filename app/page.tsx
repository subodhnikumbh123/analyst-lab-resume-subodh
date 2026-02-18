"use client";

import { useEffect, useState } from "react";
import BootScreen from "@/app/components/BootScreen";
import LabShell from "@/app/components/LabShell";

export default function Page() {
  const [booted, setBooted] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("booted");
    setBooted(seen === "1");
    setChecked(true);
  }, []);

  const handleDone = () => {
    sessionStorage.setItem("booted", "1");
    setBooted(true);
  };

  if (!checked) return null; 
  if (!booted) return <BootScreen onDone={handleDone} durationMs={3000} />;

  return <LabShell />;
}
