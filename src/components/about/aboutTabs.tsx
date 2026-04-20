"use client";
import { cn } from "@/app/utils/cn";

type AboutTapsProps = {
  selected: string;
  onSelect: (tab: string) => void;
};

export const AboutTaps = ({ selected, onSelect }: AboutTapsProps) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto h-[42px] md:h-[52px] flex items-center justify-center">
      <button
        onClick={() => onSelect("인사말")}
        className={cn(
          "w-full h-full text-[13px] text-[#222222] font-medium ",
          selected === "인사말"
            ? "border-b-2 border-[#111111] font-bold"
            : "border-r border-r-[#e8e8e8]",
        )}
      >
        인사말
      </button>
      <button
        onClick={() => onSelect("구성원")}
        className={cn(
          "w-full h-full text-[13px] text-[#222222] font-medium ",
          selected === "구성원"
            ? "border-b-2 border-[#111111] font-bold"
            : "border-l border-[#e8e8e8]",
        )}
      >
        구성원
      </button>
    </div>
  );
};
