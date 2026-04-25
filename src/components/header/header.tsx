"use client";

import { cn } from "@/app/utils/cn";
import Icon from "../icon";
import { useEffect, useState } from "react";
import { MobileNav } from "./mobileNav";
import { DesktopNav } from "./desktopNav";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [hambergerOpen, setHambergerOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          "w-full",
          hambergerOpen || isDesktopMenuOpen
            ? "bg-[#0F162E]/90"
            : isScrolled
              ? "bg-[#0F162E]/80"
              : "bg-transparent",
        )}
      >
        <div className="w-full h-[80px] flex items-center justify-between px-[28px] py-[35px]">
          {/* 로고 - 왼쪽 */}
          <div onClick={() => router.push("/")} className="w-fit xl:w-[230px]">
            {hambergerOpen ? (
              <Icon icon="ONLY_LOGO" className="h-[30px] w-auto" />
            ) : (
              <Icon
                icon="LOGO"
                className="w-[173px] h-[30px] xl:w-[230px] xl:h-[40px]"
              />
            )}
          </div>

          {/* PC - DesktopNav - 중앙 */}
          <div className="hidden xl:flex flex-1 justify-center">
            <DesktopNav onHoverChange={setIsDesktopMenuOpen} />
          </div>

          {/* 오른쪽 영역 - PC spacer(로고와 동일 너비) / 모바일 햄버거 */}
          <div className="w-fit xl:w-[230px] flex justify-end">
            <div className="xl:hidden">
              {hambergerOpen ? (
                <button
                  onClick={() => setHambergerOpen(false)}
                  className="w-[30px] h-[30px] cursor-pointer"
                >
                  <Icon icon="HAMBERGER_CLOSE" />
                </button>
              ) : (
                <button
                  onClick={() => setHambergerOpen(true)}
                  className="w-[30px] h-[30px] cursor-pointer"
                >
                  <Icon icon="HAMBERGER" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 태블릿/모바일 메뉴 */}
      <MobileNav
        isOpen={hambergerOpen}
        onClose={() => setHambergerOpen(false)}
      />
    </>
  );
};
