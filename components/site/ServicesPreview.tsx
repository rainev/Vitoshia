import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    slug: "surveying",
    name: "Land Surveying",
    description: "Accurate mapping for planning, titling, and layout.",
    image: "/images/photo-surveying.png",
  },
  {
    slug: "preparation",
    name: "Land Preparation",
    description: "Plowing, harrowing, and bed-shaping with our tractor fleet.",
    image: "/images/photo-09.png",
  },
  {
    slug: "planning",
    name: "Crop Planning",
    description: "Season planning around soil, water, and market timing.",
    image: "/images/photo-02.png",
  },
  {
    slug: "drone",
    name: "Drone Spraying",
    description: "Precision fertilizer and pesticide spraying. Faster, safer, less waste.",
    image: "/images/photo-06.png",
  },
  {
    slug: "solar-water",
    name: "Solar Water Systems",
    description: "Sun-powered irrigation. Lower diesel, reliable water year-round.",
    image: "/images/photo-solar-water.png",
  },
  {
    slug: "harvesting",
    name: "Harvesting",
    description: "Combine harvesting for rice and corn, with trained operators.",
    image: "/images/photo-10.png",
  },
  {
    slug: "hauling",
    name: "Hauling",
    description: "Field-to-buyer truck logistics, timed to your harvest.",
    image: "/images/photo-05.png",
  },
  {
    slug: "drying",
    name: "Drying",
    description: "Post-harvest drying. Grain ready for market or storage.",
    image: "/images/photo-drying.png",
  },
];

export default function ServicesPreview() {
  return (
    <section className="w-full bg-white pt-6 pb-14 sm:pt-8 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-16">
        <div className="max-w-[720px]">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-orange sm:text-[12px] sm:tracking-[0.3em]">
            What We Offer
          </p>
          <h2 className="font-serif font-bold leading-[1.1] text-[28px] text-brand-green-dark sm:text-[40px] lg:text-[46px]">
            Every step of the farm cycle.
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-brand-muted sm:text-[16px] sm:leading-[1.65]">
            Modern equipment, trained operators, and end-to-end coordination, from your first
            call to the dryer. Pick a single service or build a full-season plan.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-12 sm:mt-12 sm:gap-14 lg:mt-16 lg:gap-20">
          {services.map((service, i) => {
            const imageOnRight = i % 2 === 1;
            return (
              <li
                key={service.slug}
                id={`service-${service.slug}`}
                className={`group scroll-mt-20 lg:scroll-mt-40 lg:flex lg:items-center lg:gap-14 ${
                  imageOnRight ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[5/4] lg:w-1/2">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 lg:group-hover:scale-100"
                  />
                </div>
                <div className="mt-5 lg:mt-0 lg:flex-1">
                  <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-orange lg:text-[12px] lg:tracking-[0.3em]">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-[26px] font-bold leading-[1.15] text-brand-green-dark sm:text-[30px] lg:mt-3 lg:text-[40px] lg:leading-[1.1]">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-brand-muted sm:text-[16px] lg:mt-5 lg:max-w-[500px] lg:text-[17px] lg:leading-[1.6]">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-5 inline-flex h-11 rounded-md border-brand-green/30 bg-white px-5 text-[12px] font-bold tracking-[0.13em] uppercase text-brand-green-dark hover:bg-brand-green/5 hover:text-brand-green-dark sm:text-sm"
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn more →
                    </Link>
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-12 sm:gap-3 lg:mt-20">
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
