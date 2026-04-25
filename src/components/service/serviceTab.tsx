"use client";

import { SERVICE_TAB_ITEMS } from "@/app/constants/serviceTabs";
import { cn } from "@/app/utils/cn";
import { useState } from "react";
import Icon from "../icon";

const VISIBLE_MOBILE = 2;
const VISIBLE_TABLET = 4;

export const ServiceTap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>("");

  const hiddneItems = SERVICE_TAB_ITEMS.slice(VISIBLE_MOBILE);
  const tabletHiddenItems = SERVICE_TAB_ITEMS.slice(VISIBLE_TABLET);

  const scrollTo = (slug: string) => {
    const el = document.getElementById(slug);
    el?.scrollIntoView({ behavior: "smooth" });
    setSelected(slug);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-[1400px] flex items-center justify-center">
      {SERVICE_TAB_ITEMS.map((item, index) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.slug)}
          className={cn(
            [
              "w-full lg:h-[57px] flex items-center justify-center px-[10px] py-[10px] text-[14px] font-medium whitespace-nowrap",
              index < VISIBLE_MOBILE ? "flex" : "hidden",
              index < VISIBLE_TABLET ? "md:flex" : "md:hidden",
              "lg:flex",
              selected === item.slug
                ? "border-b-2 border-[#111111] font-bold"
                : "border-l border-[#e8e8e8] first:border-l-0",
            ].join(" "),
          )}
        >
          {item.label}
        </button>
      ))}
      <div
        className={cn(
          "relative lg:hidden ml-auto flex items-center justify-center border-l border-[#e8e8e8]",
          "md:min-w-[57px] md:h-[57px]",
        )}
      >
        <button
          className="w-[40px] h-[42px] md:w-full md:h-full flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            icon={isOpen ? "TAP_UP_ARROW" : "TAP_DOWN_ARROW"}
            className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
          />
        </button>

        {isOpen && (
          <div
            className="absolute min-w-[220px] h-[248px] md:h-[152px] top-[53px] right-[12px] md:top-[69px] z-10 bg-white border border-[#e8e8e8]
  shadow-md flex flex-col p-[4px]"
          >
            {hiddneItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.slug)}
                className={cn(
                  "w-full h-[48px] flex items-center justify-center",
                  "md:hidden px-[20px] py-[12px] text-[14px] text-left",
                  "text-[13px] font-medium text-[#222222]",
                )}
              >
                {item.label}
              </button>
            ))}
            {tabletHiddenItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.slug)}
                className={cn(
                  "hidden md:block lg:hidden md:w-full md:h-[48px] text-[14px] text-left",
                  "text-[13px] font-medium text-[#222222]",
                  "md:flex md:items-center md:justify-center",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
