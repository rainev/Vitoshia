import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/site/MobileNav";
import { CONTACT, telHref } from "@/lib/contact";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-3 px-5 pt-6 pb-3.5 text-white sm:gap-6 sm:px-8 sm:pt-8 sm:pb-4 lg:px-16">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1 sm:h-10 sm:w-10">
            <Image
              src="/logo.png"
              alt="Vitoshia PH"
              width={40}
              height={40}
              className="h-auto w-auto"
            />
          </span>
          <span className="text-sm font-bold tracking-[0.04em] sm:text-base">VITOSHIA PH</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-[13px] font-medium tracking-[0.18em] uppercase lg:gap-[26px] lg:text-[14px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-yellow transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA cluster — hidden on mobile, MobileNav takes over there */}
        <div className="hidden items-center gap-4 md:flex lg:gap-5">
          <a
            href={telHref}
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] text-white/90 transition-colors hover:text-brand-yellow"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {CONTACT.phoneDisplay}
          </a>
          <Button
            asChild
            className="h-10 rounded-md bg-brand-orange px-5 text-sm font-bold tracking-[0.13em] uppercase text-white hover:bg-brand-orange-deep"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
