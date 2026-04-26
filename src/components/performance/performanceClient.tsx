"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PerformanceTab } from "./performanceTab";
import { PerformanceMain } from "./performanceMain";
import { PERFORMANCE_MAIN_ITEMS } from "@/app/constants/performanceMain";

export const PerformanceClient = ({ defaultTab }: { defaultTab: string }) => {
  const [selected, setSelected] = useState(defaultTab);
  const router = useRouter();

  const handleSelect = (slug: string) => {
    setSelected(slug);
    router.replace(`?tab=${slug}`);
  };

  const currentItem = PERFORMANCE_MAIN_ITEMS.find(
    (item) => item.slug === selected,
  );

  return (
    <>
      <div className="w-full flex items-center justify-center border-b border-[#e8e8e8]">
        <PerformanceTab selected={selected} onSelect={handleSelect} />
      </div>
      <div className="w-full flex items-center justify-center max-[1400px]">
        <PerformanceMain slug={selected} item={currentItem} />
      </div>
    </>
  );
};
