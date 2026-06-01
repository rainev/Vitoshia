// PLACEHOLDER contact details — swap in real values before launch.
// Phone format: keep international form for tel: links to work on mobile.
// Viber: viber://chat?number=<intl-no-plus> deep-links into the Viber app on phones
// and falls back gracefully to a "viber not installed" page elsewhere.

export const CONTACT = {
  phoneDisplay: "0917 XXX XXXX",
  phoneIntl: "+639170000000",
  viberNumber: "639170000000", // no leading + for viber:// scheme
  messengerUrl: "https://m.me/vitoshiaph",
  email: "hello@vitoshia.ph",
} as const;

export const telHref = `tel:${CONTACT.phoneIntl}`;
export const viberHref = `viber://chat?number=${CONTACT.viberNumber}`;
