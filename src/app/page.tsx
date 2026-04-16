import { HearoSection } from "@/components/heroSection/heroSection";

export default function Home() {
  return (
    <div>
      <HearoSection
        bgImage="/HomeBanner.jpg"
        title="커넥트 노무법인"
        subtitle={`실력과 신뢰,\n고객과 함께하는 모든 순간에\n진심을 다합니다.`}
        button={true}
      />
    </div>
  );
}
