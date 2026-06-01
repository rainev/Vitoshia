"use client";

import { useEffect, useRef, useState } from "react";
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
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const stripRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    const targets = cycleSteps
      .map((step) => document.getElementById(`service-${step.slug}`))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (intersecting.length > 0) {
          const id = intersecting[0].target.id;
          setActiveSlug(id.replace("service-", ""));
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  // Keep the active pill centered in the mobile horizontal strip.
  useEffect(() => {
    if (!activeSlug) return;
    const el = itemRefs.current[activeSlug];
    const strip = stripRef.current;
    if (!el || !strip) return;
    if (strip.scrollWidth <= strip.clientWidth) return;
    const elRect = el.getBoundingClientRect();
    const stripRect = strip.getBoundingClientRect();
    const offset = elRect.left - stripRect.left - (stripRect.width - elRect.width) / 2;
    strip.scrollBy({ left: offset, behavior: "smooth" });
  }, [activeSlug]);

  return (
    <section className="sticky top-0 z-20 w-full border-b border-brand-green/10 bg-brand-paper/95 backdrop-blur lg:py-5">
      <div className="mx-auto w-full max-w-[1500px] px-3 py-2 sm:px-8 lg:px-16 lg:py-0">
        <ol
          ref={stripRef}
          className="flex gap-2 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-8 lg:gap-2 lg:overflow-visible"
        >
          {cycleSteps.map((step, i) => {
            const { Icon } = step;
            const isActive = activeSlug === step.slug;
            return (
              <li
                key={step.slug}
                ref={(node) => {
                  itemRefs.current[step.slug] = node;
                }}
                className="shrink-0 lg:shrink"
              >
                <a
                  href={`#service-${step.slug}`}
                  className={`group flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 transition-colors lg:flex-col lg:gap-1 lg:rounded-lg lg:px-1 lg:py-2 ${
                    isActive
                      ? "border-brand-orange bg-brand-orange/5"
                      : "border-brand-green/15 bg-white hover:border-brand-green/40 hover:bg-brand-green/5"
                  }`}
                >
                  <span className="hidden text-[9px] font-semibold tracking-[0.18em] text-brand-orange lg:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className={`h-4 w-4 transition-transform group-hover:scale-110 lg:h-6 lg:w-6 ${
                      isActive ? "text-brand-orange" : "text-brand-green-dark"
                    }`}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h4
                    className={`font-sans text-[11px] font-semibold tracking-[0.06em] uppercase lg:text-[10px] ${
                      isActive ? "text-brand-orange" : "text-brand-green-dark"
                    }`}
                  >
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
