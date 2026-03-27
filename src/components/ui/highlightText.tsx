export const HighlightText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span className={`text-[var(--fg)] ${className ?? ""}`}>{text}</span>
  );
};
