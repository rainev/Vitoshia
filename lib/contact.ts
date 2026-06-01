// Source: Resources/Vitoshia (RBFS).pdf — verified company info.
// Email is unverified; confirm before launch.

export const CONTACT = {
  phoneDisplay: "+63 967 014 2800",
  phoneIntl: "+639670142800",
  viberNumber: "639670142800", // no leading + for viber:// scheme
  messengerUrl: "https://m.me/vitoshiaph", // UNVERIFIED — confirm before launch
  email: "hello@vitoshia.ph", // UNVERIFIED — confirm before launch
  addressFull: "Purok 5, Mungo, Tuao, Cagayan",
  addressShort: "Tuao, Cagayan",
  hours: "Mon–Fri · 7:00 AM – 5:00 PM",
} as const;

export const telHref = `tel:${CONTACT.phoneIntl}`;
export const viberHref = `viber://chat?number=${CONTACT.viberNumber}`;
