import { Drone, Droplets, Map, Sprout, Sun, Tractor, Truck, Wheat } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type CycleStep = {
  Icon: LucideIcon;
  label: string;
  slug: string;
};

const cycleSteps: CycleStep[] = [
  { Icon: Map, label: "Surveying", slug: "surveying" },
  { Icon: Tractor, label: "Preparation", slug: "preparation" },
  { Icon: Sprout, label: "Planning", slug: "planning" },
  { Icon: Drone, label: "Drone", slug: "drone" },
  { Icon: Droplets, label: "Solar Water", slug: "solar-water" },
  { Icon: Wheat, label: "Harvesting", slug: "harvesting" },
  { Icon: Truck, label: "Hauling", slug: "hauling" },
  { Icon: Sun, label: "Drying", slug: "drying" },
];

export default function FarmCycle() {
  return (
    <section className="w-full bg-brand-paper pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">
      <div className="w-full px-5 sm:px-8 lg:px-16">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-orange sm:text-[12px] sm:tracking-[0.3em]">
          The Farm Cycle
        </p>
        <p className="mt-2 text-[12px] text-brand-muted sm:text-[13px]">
          Tap an icon to jump to its service.
        </p>

        <ol className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4 lg:grid-cols-8 lg:gap-5">
          {cycleSteps.map((step, i) => {
            const { Icon } = step;
            return (
              <li key={step.slug}>
                <a
                  href={`#service-${step.slug}`}
                  className="group flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-brand-green/15 bg-white px-2 py-4 text-center transition-colors hover:border-brand-green/40 hover:bg-brand-green/5"
                >
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-brand-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className="h-7 w-7 text-brand-green-dark transition-transform group-hover:scale-110 sm:h-8 sm:w-8"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h4 className="font-sans text-[11px] font-semibold tracking-[0.06em] uppercase text-brand-green-dark sm:text-[12px]">
                    {step.label}
                  </h4>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
