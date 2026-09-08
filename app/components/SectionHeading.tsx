type SectionHeadingProps = {
  /** Numéro de section, ex. "01". */
  index: string;
  /** Étiquette courte en capitales, au-dessus du titre. */
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  index,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-8 sm:mb-12 lg:mb-16">
      <div className="flex items-center gap-4">
        <span className="label-accent shrink-0">
          <span aria-hidden="true">[ {index} ] </span>
          {label}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-night-border" />
      </div>

      <h2 className="display display-xl mt-6 max-w-4xl text-balance">{title}</h2>

      {description ? (
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
