import { cn } from "@/app/utils/cn";
import Image from "next/image";

type HeroSectionProps = {
  bgImage: string;
  title: string;
  subtitle?: string;
  button?: boolean;
  variant?: "home" | "sub";
  className?: string;
};

export const HearoSection = ({
  bgImage,
  title,
  subtitle,
  button,
  variant = "home",
  className,
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "relative w-full flex flex-col items-center justify-center",
        variant === "home" ? "h-[600px] md:h-[800px]" : "h-[268px] md:h-[450px]",
        className,
      )}
    >
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-[16px]">
        <h1
          className={cn("text-white text-[26px] font-bold", "md:text-[50px]")}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              "text-white text-[14px] font-medium whitespace-pre-line text-center",
              "md:text-[28px]",
            )}
          >
            {subtitle}
          </p>
        )}
        {button && (
          <a
            href="https://docs.google.com/forms/d/16vbkLiN1oPQsboW3lQ7byOJlgaHNCZicK-6EGJnBeqk/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-[200px] h-[42px] flex items-center justify-center py-[12px] rounded-[24px] border border-white text-white text-[14px] font-bold mt-[24px]",
              "md:h-[48px] md:text-[16px]",
            )}
          >
            문의하기
          </a>
        )}
      </div>
    </section>
  );
};
