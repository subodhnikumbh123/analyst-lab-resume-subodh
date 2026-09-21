import type { Metadata } from "next";
import SentinelDemo from "./SentinelDemo";

export const metadata: Metadata = {
  title: "SentinelAI | Fraud Risk Decision Platform",
  description:
    "Interactive fraud-risk decision platform with cost-sensitive policy simulation and adversarial AI safety testing.",
};

export default function SentinelAIPage() {
  return <SentinelDemo />;
}
