import { HearoSection } from "@/components/heroSection/heroSection";
import { BusinessSection } from "@/components/home/businessSection";
import { VisitSection } from "@/components/home/vistiSection";

export default function Home() {
  return (
    <div className="overflow-y-scroll">
      <HearoSection
        bgImage="/HomeBanner.jpg"
        title="커넥트 노무법인"
        subtitle={`실력과 신뢰,\n고객과 함께하는 모든 순간에\n진심을 다합니다.`}
        button={true}
      />
      <div className="w-full h-auto flex items-center justify-center">
        <BusinessSection />
      </div>
      <div className="w-full h-auto flex items-center justify-center bg-[#f6f6f6]">
        <VisitSection />
      </div>
    </div>
  );
}
