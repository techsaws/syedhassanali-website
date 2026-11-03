export default function DetailSectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div className="mb-7 md:mb-9">
      <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-sub-heading uppercase">
        <span className="rounded-md bg-primary px-2 py-1 leading-none text-primary-foreground">{number}</span>
        {label}
      </p>
      <h2 className="font-heading text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.12] font-semibold tracking-[-0.04em] text-heading">{title}</h2>
    </div>
  );
}
