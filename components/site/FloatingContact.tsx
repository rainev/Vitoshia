import { Phone } from "lucide-react";
import { CONTACT, telHref, viberHref } from "@/lib/contact";

export default function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-2.5 lg:hidden">
      <a
        href={viberHref}
        aria-label={`Viber ${CONTACT.phoneDisplay}`}
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#7360f2] text-white shadow-lg ring-1 ring-black/5 transition-transform active:scale-95"
      >
        {/* Inline Viber glyph — avoids pulling another icon dep */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-6 w-6"
          fill="currentColor"
        >
          <path d="M12.062 1.5C7.39 1.5 3.5 4.78 3.04 9.27a14.5 14.5 0 0 0 .26 4.96c.4 1.78 1.6 3.04 3.3 3.55l.02 2.94c0 .43.5.66.83.38l2.42-2.1c.7.07 1.4.1 2.1.07 4.67-.2 8.4-3.6 8.78-8.18.43-5.13-3.6-9.39-8.69-9.39Zm5.45 11.7c-.18.5-.86 1.16-1.4 1.27-.36.07-.83.13-2.43-.5-2.03-.8-3.33-2.84-3.43-2.98-.1-.13-.83-1.1-.83-2.1s.52-1.5.7-1.7c.18-.2.4-.25.54-.25h.4c.13 0 .3-.05.47.36.18.42.6 1.45.66 1.56.05.1.09.23.02.36-.07.13-.1.21-.21.33-.1.13-.22.28-.32.38-.1.1-.21.22-.09.43.13.21.56.92 1.2 1.49.82.72 1.51.94 1.72 1.05.21.1.34.09.46-.05.13-.13.53-.62.67-.83.13-.21.27-.18.45-.1.18.06 1.16.55 1.36.65.21.1.34.15.39.23.05.09.05.5-.13.99Z" />
        </svg>
      </a>
      <a
        href={telHref}
        aria-label={`Call ${CONTACT.phoneDisplay}`}
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-brand-green-dark text-white shadow-lg ring-1 ring-black/5 transition-transform active:scale-95"
      >
        <Phone className="h-5 w-5" aria-hidden />
      </a>
    </div>
  );
}
