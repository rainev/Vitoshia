import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const techChips = [
  "Drone Application",
  "Solar Irrigation",
  "GPS Land Mapping",
  "Crop Data Tracking",
  "Modern Equipment",
  "Trained Operators",
];

export default function StorySection() {
  return (
    <section className="w-full bg-brand-paper pt-14 pb-6 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-16">
        <div className="order-2 lg:order-1">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-orange sm:text-[12px] sm:tracking-[0.3em]">
            How We Can Help
          </p>
          <h2 className="font-serif font-bold leading-[1.1] text-[28px] text-brand-green-dark sm:text-[40px] lg:text-[46px]">
            End-to-end farm support, grounded in 20+ years on the field.
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-brand-muted sm:text-[16px] sm:leading-[1.65]">
            At Vitoshia Agri PH, we're here to help make farming easier, more efficient, and more profitable.
          </p>
          <p className="mt-3 text-[14px] leading-[1.6] text-brand-muted sm:text-[16px] sm:leading-[1.65]">
            From land surveying and preparation to crop planning, drone fertilizer and pesticide application, 
            solar water systems, harvesting, hauling, and drying, we provide the services needed to support your farm from start to finish.
            With over 20 years of experience through R. Benito Farming Services (RBFS), we combine proven agricultural expertise with modern 
            technology to help farmers and agri businesses grow with confidence.
          </p>
          <p className="mt-3 text-[14px] leading-[1.6] text-brand-muted sm:text-[16px] sm:leading-[1.65]">
            Instead of coordinating multiple suppliers and service providers, you can rely on one trusted partner 
            dedicated to helping your operation succeed.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
            {techChips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-brand-green/20 bg-white px-3 py-1.5 text-[11px] font-medium tracking-[0.08em] uppercase text-brand-green sm:px-4 sm:py-2 sm:text-[12px]"
              >
                {chip}
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="mt-7 h-11 rounded-md bg-brand-green-dark px-5 text-[12px] font-bold tracking-[0.13em] uppercase text-white hover:bg-brand-green sm:mt-8 sm:h-12 sm:px-6 sm:text-sm"
          >
            <Link href="/about">Learn About Us</Link>
          </Button>
        </div>

        <div className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] lg:order-2 lg:aspect-square">
          <Image
            src="/images/photo-07.png"
            alt="Vitoshia field operations"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
