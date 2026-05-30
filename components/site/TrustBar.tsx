const trustItems = [
  { value: "20+", label: "Years in the Field" },
  { value: "100%", label: "Filipino-Owned" },
  { value: "Drone", label: "Precision Spraying" },
  { value: "Local + Global", label: "Clients" },
];

export default function TrustBar() {
  return (
    <section className="w-full border-y border-[#eee] bg-white">
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-5 py-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-8 sm:px-8 lg:px-16">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-start gap-0.5 text-[12px] tracking-[0.12em] uppercase text-brand-muted sm:flex-row sm:items-center sm:gap-2.5 sm:text-[13px] sm:tracking-[0.18em]"
          >
            <span className="font-serif text-[22px] text-brand-green sm:text-[36px]">
              {item.value}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
