"use client";

import { NAV_ITEMS } from "@/app/constants/navigations";
import { cn } from "@/app/utils/cn";
import { useState } from "react";
import Link from "next/link";

type HambergerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileNav = ({ isOpen, onClose }: HambergerMenuProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="w-full h-screen bg-[#0F162E]/90 flex flex-col items-center gap-[32px] pt-[60px]">
      {NAV_ITEMS.map((item, index) => (
        <div
          key={item.href}
          className="w-full h-fit flex flex-col items-center"
        >
          <button
            className={cn(
              "flex items-center text-white text-[24px] font-bold gap-[10px]",
              "md:text-[30px]",
            )}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.label}
            <span className="text-white/60">
              {openIndex === index ? "–" : "+"}
            </span>
          </button>

          {/* 서브메뉴 */}
          {openIndex === index && (
            <div className="flex flex-col items-center gap-[16px] pt-[16px]">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="text-[16px] font-medium text-white/90"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
