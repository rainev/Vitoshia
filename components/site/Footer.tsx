import Image from "next/image";
import Link from "next/link";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#011a0a] text-white/85">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 sm:gap-12 sm:px-8 sm:py-14 lg:grid-cols-4 lg:px-16">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1 sm:h-10 sm:w-10">
              <Image
                src="/logo.png"
                alt="Vitoshia PH"
                width={40}
                height={40}
                className="h-auto w-auto"
              />
            </span>
            <span className="text-sm font-bold tracking-[0.04em] text-white sm:text-base">
              VITOSHIA PH
            </span>
          </Link>
          <p className="mt-4 max-w-[420px] text-[13px] leading-[1.6] text-white/70 sm:text-[14px]">
            Modern farming services: land surveying, drone application, solar irrigation,
            harvesting, hauling, and drying. Delivered by a Filipino team serving local and
            international clients.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-yellow sm:text-[12px] sm:tracking-[0.3em]">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] text-white/80 transition-colors hover:text-brand-yellow sm:text-[14px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-yellow sm:text-[12px] sm:tracking-[0.3em]">
            Reach Us
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-[13px] text-white/80 sm:text-[14px]">
            <li>hello@vitoshia.ph</li>
            <li>+63 9XX XXX XXXX</li>
            <li>Mon–Sat · 8:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-5 sm:px-8 lg:px-16">
          <p className="text-[11px] tracking-[0.08em] text-white/55 sm:text-[12px]">
            © {year} Vitoshia PH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
