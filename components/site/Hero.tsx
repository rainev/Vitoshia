import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const heroOverlay =
  "linear-gradient(180deg, rgba(1,36,15,0.55) 0%, rgba(1,36,15,0.85) 100%)";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[440px] w-full flex-col justify-end overflow-hidden text-white sm:min-h-[560px] lg:min-h-[600px]">
      <Image
        src="/images/photo-03.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: heroOverlay }}
      />

      <div className="w-full max-w-[820px] px-5 pt-24 pb-8 sm:px-8 sm:pt-32 sm:pb-14 lg:px-16">
        <p className="mb-2.5 text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-yellow sm:mb-3 sm:text-[13px] sm:tracking-[0.4em] lg:text-[14px]">
          IT &amp; Agri Solutions · Philippines
        </p>
        <h1 className="font-serif font-bold leading-[1.1] text-[26px] sm:text-[48px] sm:leading-[1.05] md:text-[56px] lg:text-[60px]">
          Modern farming services, from soil prep to harvest.
        </h1>
        <p className="mt-3 max-w-[600px] text-[14px] leading-[1.5] text-[#e8efe5] sm:mt-5 sm:text-[17px] sm:leading-[1.55]">
          Land surveying, drone fertilizer &amp; pesticide application, solar water systems,
          harvesting, hauling, and drying — delivered by a team that knows the land and the
          technology that moves it forward.
        </p>

        <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
          <Button
            asChild
            className="h-10 rounded-md bg-brand-orange px-5 text-[12px] font-bold tracking-[0.13em] uppercase text-white hover:bg-brand-orange-deep sm:h-12 sm:px-6 sm:text-sm"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-10 rounded-md border-white/40 bg-white/[0.08] px-5 text-[12px] font-bold tracking-[0.13em] uppercase text-white hover:bg-white/15 hover:text-white sm:h-12 sm:px-6 sm:text-sm"
          >
            <Link href="/contact">Talk to Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
