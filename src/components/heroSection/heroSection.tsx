import { cn } from "@/app/utils/cn";

type HeroSectionProps = {
  bgImage: string;
  title: string;
  subtitle?: string;
  button?: boolean;
  className?: string;
};

export const HearoSection = ({
  bgImage,
  title,
  subtitle,
  button,
  className,
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "relative w-full h-[600px] flex flex-col items-center justify-center",
        "md:h-[800px]",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-[16px]">
        <h1 className="text-white text-[26px] font-bold">{title}</h1>
        {subtitle && (
          <p className="text-white text-[14px] font-medium whitespace-pre-line text-center">
            {subtitle}
          </p>
        )}
        {button && (
          <button className="w-[200px] h-[42px] flex items-center justify-center py-[12px] rounded-[24px] border border-white text-white text-[14px] font-bold mt-[24px]">
            문의하기
          </button>
        )}
      </div>
    </section>
  );
};
