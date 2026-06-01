"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type NavLink = { label: string; href: string };

export default function MobileNav({ links }: { links: NavLink[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[280px] border-l-0 bg-brand-green p-0 text-white sm:w-[320px]"
      >
        <SheetHeader className="border-b border-white/10 px-6 py-5">
          <SheetTitle className="font-sans text-sm font-bold tracking-[0.04em] text-white">
            VITOSHIA PH
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col px-6 py-6">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <SheetClose asChild>
                  <Link
                    href={link.href}
                    className="block rounded-md px-2 py-3 text-[15px] font-medium tracking-[0.18em] uppercase text-white/85 transition-colors hover:bg-white/10 hover:text-brand-yellow"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>

          <SheetClose asChild>
            <Button
              asChild
              className="mt-8 h-11 w-full rounded-md bg-brand-orange text-sm font-bold tracking-[0.13em] uppercase text-white hover:bg-brand-orange-deep"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
