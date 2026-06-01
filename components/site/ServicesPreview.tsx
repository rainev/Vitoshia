import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    slug: "surveying",
    name: "Land Surveying",
    description: "Accurate measurement and mapping for planning, titling, and pre-planting layout.",
    image: "/images/photo-surveying.png",
  },
  {
    slug: "preparation",
    name: "Land Preparation",
    description: "Plowing, harrowing, and bed-shaping with our fleet of tractors and implements.",
    image: "/images/photo-09.png",
  },
  {
    slug: "planning",
    name: "Crop Planning",
    description: "Season-by-season planning aligned with soil type, water access, and market timing.",
    image: "/images/photo-05.png",
  },
  {
    slug: "drone",
    name: "Drone Spraying",
    description: "Precision fertilizer & pesticide application — faster coverage, less waste, safer for workers.",
    image: "/images/photo-06.png",
  },
  {
    slug: "solar-water",
    name: "Solar Water Systems",
    description: "Off-grid irrigation powered by the sun — lower diesel costs, reliable water year-round.",
    image: "/images/photo-solar-water.png",
  },
  {
    slug: "harvesting",
    name: "Harvesting",
    description: "Combine harvester services for rice and corn with trained operators and field support.",
    image: "/images/photo-10.png",
  },
  {
    slug: "hauling",
    name: "Hauling",
    description: "Truck logistics from field to warehouse or buyer — coordinated with your harvest schedule.",
    image: "/images/photo-02.png",
  },
  {
    slug: "drying",
    name: "Drying",
    description: "Post-harvest drying to keep grain quality high and ready for market or storage.",
    image: "/images/photo-drying.png",
  },
];

export default function ServicesPreview() {
  return (
    <section className="w-full bg-white pt-6 pb-14 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
      <div className="w-full px-5 sm:px-8 lg:px-16">
        <div className="max-w-[720px]">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-orange sm:text-[12px] sm:tracking-[0.3em]">
            What We Offer
          </p>
          <h2 className="font-serif font-bold leading-[1.1] text-[28px] text-brand-green-dark sm:text-[40px] lg:text-[46px]">
            Every step of the farm cycle.
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-brand-muted sm:text-[16px] sm:leading-[1.65]">
            Modern equipment, trained operators, and end-to-end coordination — from your first
            call to the dryer. Pick a single service or build a full-season plan.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {services.map((service) => (
            <li
              key={service.slug}
              id={`service-${service.slug}`}
              className="group scroll-mt-8 overflow-hidden rounded-xl border border-[#eee] bg-white transition-shadow hover:shadow-md sm:scroll-mt-12"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="font-serif text-[18px] font-bold text-brand-green-dark sm:text-[20px]">
                  {service.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-brand-muted sm:text-[14px]">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-12 sm:gap-3">
          <Button
            asChild
            className="h-11 rounded-md bg-brand-orange px-5 text-[12px] font-bold tracking-[0.13em] uppercase text-white hover:bg-brand-orange-deep sm:h-12 sm:px-6 sm:text-sm"
          >
            <Link href="/services">View All Services</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-11 rounded-md border-brand-green/30 bg-white px-5 text-[12px] font-bold tracking-[0.13em] uppercase text-brand-green-dark hover:bg-brand-green/5 hover:text-brand-green-dark sm:h-12 sm:px-6 sm:text-sm"
          >
            <Link href="/contact">Request a Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
