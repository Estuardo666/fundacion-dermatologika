import Pretitle from "@/components/atoms/Pretitle";

type HeadingProps = {
  pretitulo?: string;
  titulo: string;
  subtitulo?: string;
  className?: string;
  pretituloTone?: "light" | "dark";
  size?: "lg" | "sm";
};

export default function Heading({
  pretitulo,
  titulo,
  subtitulo,
  className = "",
  size = "lg",
  pretituloTone = "light",
}: HeadingProps) {
  return (
    <div className={className}>
      {pretitulo ? (
        <Pretitle
          tone={pretituloTone}
          size={size === "sm" ? "xs" : "md"}
          className="mb-4"
        >
          {pretitulo}
        </Pretitle>
      ) : null}
      <h2 className={`font-semibold text-[var(--semi-dark-gray)] w-full ${
        size === "sm"
          ? "text-xl sm:text-2xl"
          : "text-[clamp(2.4rem,4.1vw,3.7rem)] leading-[0.94] tracking-tight"
      }`}>{titulo}</h2>

      {subtitulo ? <p className="mt-3 max-w-2xl text-[1.02rem] leading-[1.45] text-[var(--soft-gray)] sm:text-[1.08rem]">{subtitulo}</p> : null}
    </div>
  );
}
