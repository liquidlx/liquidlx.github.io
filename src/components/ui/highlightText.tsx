export const HighlightText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span
      className={`bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ${className}`}
    >
      {text}
    </span>
  );
};
