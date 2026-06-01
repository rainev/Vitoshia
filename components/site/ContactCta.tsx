import Link from "next/link";
import { Button } from "@/components/ui/button";

const contactDetails = [
  { label: "Email", value: "hello@vitoshia.ph" },
  { label: "Phone", value: "+63 9XX XXX XXXX" },
  { label: "Location", value: "Philippines · Serving local & international clients" },
  { label: "Hours", value: "Mon–Sat · 8:00 AM – 6:00 PM" },
];

export default function ContactCta() {
  return (
    <section className="w-full bg-brand-green-dark py-14 text-white sm:py-20 lg:py-24">
      <div className="grid w-full grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16">
        <div>
          <p className="mb-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-yellow sm:text-[12px] sm:tracking-[0.3em]">
            Get in Touch
          </p>
          <h2 className="font-serif font-bold leading-[1.1] text-[28px] sm:text-[40px] lg:text-[46px]">
            Tell us about your farm.
          </h2>
          <p className="mt-4 max-w-[520px] text-[14px] leading-[1.6] text-[#cfe0c9] sm:text-[16px] sm:leading-[1.65]">
            Whether you need one service or a full-season plan, our team will respond within one
            business day with a clear quote and timeline.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
            <Button
              asChild
              className="h-11 rounded-md bg-brand-yellow px-5 text-[12px] font-bold tracking-[0.13em] uppercase text-brand-green-dark hover:bg-brand-yellow/90 sm:h-12 sm:px-6 sm:text-sm"
            >
              <Link href="/contact">Send a Message</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-md border-white/40 bg-white/[0.08] px-5 text-[12px] font-bold tracking-[0.13em] uppercase text-white hover:bg-white/15 hover:text-white sm:h-12 sm:px-6 sm:text-sm"
            >
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:grid-cols-2 sm:gap-5 sm:p-8 lg:gap-6">
          {contactDetails.map((item) => (
            <li key={item.label} className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-yellow sm:text-[11px]">
                {item.label}
              </span>
              <span className="text-[14px] leading-[1.5] text-white sm:text-[15px]">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
