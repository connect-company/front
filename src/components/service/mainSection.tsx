import { SERVICE_MAIN_ITEMS } from "@/app/constants/serviceMain";
import Icon from "../icon";
import Image from "next/image";

export const MainSection = () => {
  return (
    <section
      className="w-full max-w-[1480px] px-[20px] md:px-[40px] pt-[40px] pb-[60px]
  md:pb-[100px] lg:mt-[140px] flex flex-col lg:flex-row md:gap-[40px]"
    >
      <div className="w-full mb-[32px] md:mb-0 md:-w-[193px] lg:w-[300px] lg:h-[70px] md:shrink-0">
        <h3 className="text-[13px] md:text-[16px] font-bold text-[#1d3070]">
          CONNECT BUSINESS
        </h3>
        <p className="text-[18px] md:text-[28px] font-bold text-[#111111]">
          커넥트 업무분야
        </p>
      </div>

      <div className="w-full lg:max-w-[1060px] flex-1 flex flex-col">
        <p>
          기업 환경이 복잡해질수록 노동과 인사관리는 더욱 정교한 접근이
          필요합니다.법적 리스크를 최소화하고 안정적인 조직 운영을 지원하기
          위해,커넥트는 노동관계 전반에 걸친 실무 중심의 전문 서비스를
          제공합니다.
        </p>
        <p className="mt-[27px]">
          채용부터 퇴직까지, 기업 운영의 전 과정을 함께합니다
        </p>

        <div className="w-full flex flex-col items-center justify-baseline mt-[32px] gap-[24px]">
          {SERVICE_MAIN_ITEMS.map((item) => (
            <div
              key={item.id}
              id={item.slug}
              className="w-full flex flex-col border border-[#e8e8e8] rounded-[20px] p-[16px] md:p-[32px] gap-[16px]"
            >
              {/* 뱃지 - 항상 전체 너비 */}
              <div className="w-full flex items-center gap-[8px] h-[46px] md:h-[58px] py-[10px] px-[12px] bg-[#f4f4f5] rounded-[8px]">
                <div className="w-[26px] h-[26px] md:w-[34px] md:h-[34px]">
                  <Icon icon={item.icon} className="w-full h-full" />
                </div>
                <h3 className="text-[16px] md:text-[22px] font-bold text-[#111111]">
                  {item.label}
                </h3>
              </div>

              {/* 이미지 + 텍스트: 모바일 flex-col / md flex-row */}
              <div className="w-full flex flex-col md:flex-row gap-[20px] md:gap-[40px]">
                <div className="relative w-full h-[180px] md:w-[320px] md:shrink-0 md:h-[200px]">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(min-width: 768px) 320px, 100vw"
                    className="object-cover rounded-[4px]"
                  />
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-[17px]">
                  <p className="text-[14px] md:text-[16px] font-normal text-[#222222]">
                    {item.title}
                  </p>
                  <p className="text-[14px] md:text-[16px] font-normal text-[#222222]">
                    {item.subtitle}
                  </p>
                  {item.caption && (
                    <p className="text-[14px] md:text-[16px] font-normal text-[#222222]">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
