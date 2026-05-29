import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/site/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-brand-green-dark px-5 py-24 text-center text-white sm:px-8 lg:px-16">
        <p className="mb-3 text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-yellow sm:text-[13px] sm:tracking-[0.4em]">
          404 · Page Not Found
        </p>
        <h1 className="font-serif font-bold leading-[1.1] text-[40px] sm:text-[64px] lg:text-[72px]">
          We can&apos;t find that field.
        </h1>
        <p className="mt-4 max-w-[520px] text-[14px] leading-[1.55] text-[#e8efe5] sm:text-[17px]">
          The page you&apos;re looking for may have been moved or never existed. Let&apos;s get you
          back on the right path.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:mt-9 sm:gap-3">
          <Button
            asChild
            className="h-10 rounded-md bg-brand-orange px-5 text-[12px] font-bold tracking-[0.13em] uppercase text-white hover:bg-brand-orange-deep sm:h-12 sm:px-6 sm:text-sm"
          >
            <Link href="/">Back to Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-10 rounded-md border-white/40 bg-white/[0.08] px-5 text-[12px] font-bold tracking-[0.13em] uppercase text-white hover:bg-white/15 hover:text-white sm:h-12 sm:px-6 sm:text-sm"
          >
            <Link href="/contact">Talk to Our Team</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
