"use client";
import { HearoSection } from "@/components/heroSection/heroSection";
import { MainSection } from "@/components/service/mainSection";
import { ServiceTap } from "@/components/service/serviceTab";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

const ServiceContent = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const slug = searchParams.get("scroll");
    if (!slug) return;

    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(slug);
      if (el) {
        const headerOffset = 120;
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };

    tryScroll();
  }, [searchParams]);

  return (
    <main className="">
      <HearoSection
        variant="sub"
        bgImage="/service.png"
        title="커넥트 소개"
        subtitle={`당신의 든든한 노무 파트너, 커넥트입니다`}
        button={false}
      />
      <div className="w-full flex items-center justify-center">
        <ServiceTap />
      </div>
      <div className="w-full flex items-center justify-center max-[1400px]">
        <MainSection />
      </div>
    </main>
  );
};

export default function Page() {
  return (
    <Suspense>
      <ServiceContent />
    </Suspense>
  );
}
