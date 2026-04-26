import { HearoSection } from "@/components/heroSection/heroSection";
import { PerformanceClient } from "@/components/performance/performanceClient";

export default async function Performance({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const defaultTab = tab ?? "노동사건";
  return (
    <main className="">
      <HearoSection
        variant="sub"
        bgImage="/performanceHearo.png"
        title="주요 수행실적"
        subtitle={`현장에서 검증된 솔루션의 결과를 확인해보세요`}
        button={false}
      />
      <PerformanceClient defaultTab={defaultTab} />
    </main>
  );
}
