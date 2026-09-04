interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-medium text-clay">{eyebrow}</span>
      )}
      <h2 className="text-3xl md:text-4xl font-medium text-pine">{title}</h2>
      {description && (
        <p className="text-base text-charcoal/70 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
