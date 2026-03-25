import { type ReactNode } from "react";

type ObjectiveCompactCardProps = {
  index: number;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function ObjectiveCompactCard({
  index: _index,
  title,
  description,
  children,
  className = "",
}: ObjectiveCompactCardProps) {
  const resolvedDescription = description ?? children;
  const cardStyle = {
    borderColor: "color-mix(in srgb, #6eb72b 18%, white)",
    background: "linear-gradient(180deg, #ffffff 0%, #f7fbf1 100%)",
  };

  return (
    <article
      className={`group overflow-hidden rounded-[1.55rem] border px-5 py-5 shadow-[0_18px_38px_rgba(16,55,22,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:color-mix(in_srgb,#6eb72b_28%,white)] hover:shadow-[0_24px_44px_rgba(16,55,22,0.16)] sm:px-6 sm:py-6 ${className}`}
      style={cardStyle}
    >
      <div className="space-y-2 pr-1">
        {title ? (
          <h3 className="text-left text-[1.03rem] font-semibold leading-[1.25] tracking-tight text-[#1c271d] sm:text-[1.12rem]">
            {title}
          </h3>
        ) : null}
        <p className="text-left text-[0.96rem] leading-[1.62] text-[#4b544d] sm:text-[1rem]">
          {resolvedDescription}
        </p>
      </div>
    </article>
  );
}