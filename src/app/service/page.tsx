import { HearoSection } from "@/components/heroSection/heroSection";
import { MainSection } from "@/components/service/mainSection";
import { ServiceTap } from "@/components/service/serviceTab";

export default function Page() {
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
}
