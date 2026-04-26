import { PERFORMANCE_MAIN_ITEMS } from "@/app/constants/performanceMain";
import { PERFORMANCE_TAP_ITEMS } from "@/app/constants/performanceTab";
import Image from "next/image";

type PerformanceMainItem = (typeof PERFORMANCE_MAIN_ITEMS)[number];

type PerformanceMainProps = {
  slug: string;
  item?: PerformanceMainItem;
};

export const PerformanceMain = ({ slug, item }: PerformanceMainProps) => {
  const tabInfo = PERFORMANCE_TAP_ITEMS.find((t) => t.slug === slug);

  return (
    <section
      className="w-full max-w-[1480px] px-[20px] md:px-[40px] pt-[40px] pb-[60px]
md:pb-[100px] lg:mt-[140px] flex flex-col lg:flex-row md:gap-[40px]"
    >
      <div className="w-full mb-[32px] md:mb-0 md:-w-[193px] lg:w-[300px] lg:h-[70px] md:shrink-0">
        <h3 className="text-[13px] md:text-[16px] font-bold text-[#1d3070]">
          {tabInfo?.englishLabel}
        </h3>
        <p className="text-[18px] md:text-[28px] font-bold text-[#111111]">
          {tabInfo?.label}
        </p>
      </div>
      {item && (
        <div
          key={item.slug}
          className="w-full flex flex-col lg:flex-row gap-[40px] lg:gap-[60px]"
        >
          <div
            className="relative w-full h-[180px] md:min-w-[688px] md:shrink-0 md:h-[344px]
  lg:min-w-0 lg:w-[360px] lg:h-[500px]"
          >
            <Image
              src={item.image}
              alt={tabInfo?.label ?? ""}
              fill
              priority
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover rounded-[4px]"
            />
          </div>

          <div className="flex flex-col gap-[60px]">
            {item.categories.map((category, i) => (
              <div
                key={i}
                className="flex flex-col items-baseline justify-center gap-[24px]"
              >
                {category.title && (
                  <div className="w-full bg-[#1d3070] text-white rounded-[8px] p-[10px]">
                    <h4 className="text-[16px] md:text-[18px] font-bold text-center">
                      {category.title}
                    </h4>
                  </div>
                )}
                <div className="flex flex-col items-baseline justify-center gap-[12px]">
                  {category.items.map((bullet, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-start gap-[16px]"
                    >
                      {bullet.bold ? (
                        <div className=" flex items-center justify-center min-w-[23px] h-[23px] md:w-[25px] md:h-[25px] rounded-full bg-[#234bd2]/20">
                          <div className="w-[11px] h-[11px] rounded-full bg-[#1d3070]"></div>
                        </div>
                      ) : (
                        <div className=" flex items-center justify-center min-w-[23px] h-[23px] md:w-[25px] md:h-[25px] rounded-full bg-white">
                          <div className="w-[7px] h-[7px] rounded-full bg-[#1d3070]"></div>
                        </div>
                      )}
                      <p className="text-[14px] md:text-[16px] font-normal text-[#222222]">
                        {bullet.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
