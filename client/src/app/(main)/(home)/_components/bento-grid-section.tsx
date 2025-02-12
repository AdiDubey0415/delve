import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Code2, Component, LockKeyhole, Palette } from "lucide-react";

const features = [
  {
    Icon: Component,
    name: "Integrate directly",
    description:
      "Integrate Delve with your entire tech ecosystem, from AWS to Github and to internal tools.",
    href: "https://delve.co",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <div />,
  },
  {
    Icon: LockKeyhole,
    name: "Spin up a Delve AI agent",
    description:
      "Delve will deploy AI agents to automatically scan across your entire company setup, identifying compliance gaps.",
    href: "https://delve.co",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div />,
  },
  {
    Icon: Code2,
    name: "Automate evidence gathering",
    description:
      "Stay compliant on an ongoing basis with agents that continue to automate manual evidence gathering in the background.",
    href: "https://delve.co",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <div />,
  },
];

const BentoGridSection = () => {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default BentoGridSection;
