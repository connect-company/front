"use client";
import { cn } from "@/app/utils/cn";
import { NAV_ITEMS } from "@/app/constants/navigations";
import Link from "next/link";
import { useState } from "react";

type DesktopNavProps = {
  onHoverChange: (value: boolean) => void;
};

export const DesktopNav = ({ onHoverChange }: DesktopNavProps) => {
  const [isHover, setHover] = useState(false);

  const handleHover = (value: boolean) => {
    setHover(value);
    onHoverChange(value);
  };

  return (
    <div onMouseLeave={() => handleHover(false)}>
      {/* 메인 메뉴 */}
      <ul className="flex w-full items-center gap-[100px]">
        {NAV_ITEMS.map((item) => (
          <li className="w-fit whitespace-nowrap" key={item.href}>
            <Link
              href={item.href}
              className="text-white text-[18px] font-bold hover:text-white/70 transition-colors"
              onMouseEnter={() => handleHover(true)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* 메가 드롭다운 */}
      {isHover && (
        <div
          className={cn(
            "fixed top-[110px] left-0 right-0 bg-[#0F162E]/90",
            "pb-[48px] px-[80px]",
          )}
        >
          <div className="w-full">
            <div className="flex items-start justify-center gap-[11px]">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  className="flex flex-col justify-center items-center gap-[14px] min-w-[166px] nth-[3]:pl-[10px] last:pl-[25px]"
                >
                  <ul className="flex flex-col justify-center items-center gap-[20px]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="text-white/60 text-sm hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
