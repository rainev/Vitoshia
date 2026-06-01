const trustItems = [
  { value: "Since 2002", label: "Tuao, Cagayan" },
  { value: "100%", label: "Filipino-Owned" },
  { value: "Drone", label: "Precision Spraying" },
  { value: "Cagayan Valley", label: "Service Coverage" },
];

export default function TrustBar() {
  return (
    <section className="w-full border-y border-[#eee] bg-white">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-x-4 gap-y-3 px-5 py-4 md:grid-cols-4 md:gap-6 md:px-8 md:py-5 lg:px-16">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-start gap-0.5 text-[11px] tracking-[0.12em] uppercase text-brand-muted md:gap-1 md:text-[12px] md:tracking-[0.18em]"
          >
            <span className="font-serif text-[20px] text-brand-green md:text-[22px] lg:text-[26px]">
              {item.value}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
