import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import Link from "next/link";
import BentoGridSection from "./_components/bento-grid-section";

const HomePage = () => {
  return (
    <div>
      <section className="grid place-content-center place-items-center gap-6 text-center">
        <Badge size="sm">Get HIPAA Ready with DELVE</Badge>

        <h1 className="max-w-6xl">AI to make compliance effortless</h1>

        <p className="max-w-3xl">
          Delve helps fast-growing companies get compliant with an AI-automated
          platform.
        </p>

        <div className="flex items-center gap-3">
          <Button className="rounded-full">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-center">Key Features</h2>

        <BentoGridSection />
      </section>

      <section className="space-y-6 text-center">
        <h2>Don't drain your team's time on manual compliance.</h2>

        <p className="mx-auto max-w-2xl">
          Save hours while implementing a robust compliance program.
        </p>

        <Button className="rounded-full">
          <Link href="/login">Get Started</Link>
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
