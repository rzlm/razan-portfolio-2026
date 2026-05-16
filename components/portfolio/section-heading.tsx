type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-7 grid grid-cols-[auto_1fr] items-end gap-4">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-velvet-gold">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-velvet-lilac md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mb-2 h-px bg-velvet-edge" />
    </div>
  );
}
