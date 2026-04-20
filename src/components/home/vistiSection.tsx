"use client";

import { cn } from "@/app/utils/cn";
import { useState } from "react";
import { KakaoMap } from "./kakaomap";
import Icon from "../icon";

export const VisitSection = () => {
  const [selected, setSelected] = useState<"본사" | "지사">("본사");

  const LOCATIONS = {
    본사: {
      lat: 37.5816383217987,
      lng: 126.971632447032,
      address: "서울특별시 종로구 자하문로24길 58, 2층",
      tel: "02-707-2253",
      fax: "02-722-0320",
    },
    지사: {
      lat: 35.9644638512903,
      lng: 126.730276826757,
      address: "전북특별자치도 군산시 수송로 315, 111호",
      tel: "TEL 번호",
      fax: "FAX 번호",
    },
  };

  return (
    <section className="w-full max-w-[1440px] h-auto flex flex-col items-start justify-center py-[80px] lg:py-[160px]">
      <div className="w-full h-auto px-[20px] md:px-[40px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* 왼쪽: 타이틀 */}
          <div>
            <p className="text-[14px] md:text-[16px] font-bold text-[#1d3070]">
              VISIT CONNECT
            </p>
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#222222] mt-[4px]">
              오시는 길
            </h2>
          </div>
          {/* 오른쪽: 버튼 */}
          <div className="w-full md:w-[275px] h-[41px] md:h-[44px] flex items-center mt-[24px] md:mt-[34px]">
            <button
              onClick={() => setSelected("본사")}
              className={cn(
                "w-full h-full flex items-center justify-center rounded-[25px] text-[14px] md:text-[16px]",
                selected === "본사"
                  ? "text-white bg-[#1d3070] font-bold"
                  : "text-[#8a8a8b]",
              )}
            >
              본사
            </button>
            <div className="w-px h-[20px] bg-[#cccccc]" />
            <button
              onClick={() => setSelected("지사")}
              className={cn(
                "w-full h-full flex items-center justify-center rounded-[25px] text-[14px] md:text-[16px]",
                selected === "지사"
                  ? "text-white bg-[#1d3070] font-bold"
                  : "text-[#8a8a8b]",
              )}
            >
              지사
            </button>
          </div>
        </div>
        <div className="w-full h-[480px] mt-[40px]">
          <KakaoMap
            lat={LOCATIONS[selected].lat}
            lng={LOCATIONS[selected].lng}
            name={
              selected === "본사"
                ? "커넥트노무법인 본사"
                : "커넥트노무법인 지사"
            }
          />
        </div>
        {/* 모바일/태블릿: 탭 조건부 */}
        <div className="lg:hidden w-full min-h-[156px] flex items-center justify-between mt-[32px] gap-[16px]">
          <div className="w-[2px] min-h-[173px] bg-[#e8e8e8]"></div>
          {selected === "본사" ? (
            <div className="w-full h-auto flex flex-col items-baseline justify-center">
              <div className="w-full h-auto flex flex-col items-start justify-center">
                <p className="w-full text-[14px] font-bold text-[#1d3070] mb-[4px]">
                  본사
                </p>
                <h3 className="w-full text-[16px] md:text-[18px] font-bold text-[#222222] mb-[12px]">
                  서울특별시 종로구 자하문로24길 58, 2층
                </h3>
                <p className="w-full text-[14px] font-medium text-[#8a8a8b] mb-[20px]">
                  (지번) 효자동 40-1 (우) 03042
                </p>
              </div>
              <div className="w-full flex items-center justify-baseline gap-[12px] mb-[12px]">
                <Icon
                  icon="TEL_ICON"
                  className="w-[21px] h-[21px] md:w-[24px] md:h-[24px]"
                />
                <p className="text-[14px] text-[#222222] md:text-[16px]">TEL</p>
                <p className="text-[14px] text-[#222222] md:text-[16px]">
                  02-707-2253
                </p>
              </div>
              <div className="w-full flex items-center justify-baseline gap-[12px]">
                <Icon
                  icon="FAX_ICON"
                  className="w-[21px] h-[21px] md:w-[24px] md:h-[24px]"
                />
                <p className="text-[14px] text-[#222222] md:text-[16px]">FAX</p>
                <p className="text-[14px] text-[#222222] md:text-[16px]">
                  02-722-0320
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full h-auto flex flex-col items-baseline justify-center">
              <div className="w-full h-auto flex flex-col items-start justify-center">
                <p className="w-full text-[14px] font-bold text-[#1d3070] mb-[4px]">
                  군산지사
                </p>
                <h3 className="w-full text-[16px] md:text-[18px] font-bold text-[#222222] mb-[12px]">
                  전북특별자치도 군산시 수송로 315, 111호
                </h3>
                <p className="w-full text-[14px] font-medium text-[#8a8a8b] mb-[20px]">
                  (지번) 미장동 519-5 (우) 54094
                </p>
              </div>
              <div className="w-full flex items-center justify-baseline gap-[12px] mb-[12px]">
                <Icon
                  icon="TEL_ICON"
                  className="w-[21px] h-[21px] md:w-[24px] md:h-[24px]"
                />
                <p className="text-[14px] text-[#222222] md:text-[16px]">TEL</p>
                <p className="text-[14px] text-[#222222] md:text-[16px]">
                  02-707-2253
                </p>
              </div>
              <div className="w-full flex items-center justify-baseline gap-[12px]">
                <Icon
                  icon="FAX_ICON"
                  className="w-[21px] h-[21px] md:w-[24px] md:h-[24px]"
                />
                <p className="text-[14px] text-[#222222] md:text-[16px]">FAX</p>
                <p className="text-[14px] text-[#222222] md:text-[16px]">
                  02-722-0320
                </p>
              </div>
            </div>
          )}
        </div>

        {/* PC: 본사 + 지사 나란히 */}
        <div className="hidden lg:flex lg:gap-[40px] mt-[32px]">
          {/* 본사 */}
          <div className="flex items-start gap-[16px] w-1/2">
            <div className="w-[2px] min-h-[173px] bg-[#e8e8e8]" />
            <div className="h-auto flex flex-col items-baseline justify-center">
              <div className="flex flex-col items-start justify-center">
                <p className="text-[14px] font-bold text-[#1d3070] mb-[4px]">
                  본사
                </p>
                <h3 className="text-[16px] md:text-[18px] font-bold text-[#222222] mb-[12px]">
                  서울특별시 종로구 자하문로24길 58, 2층
                </h3>
                <p className="text-[14px] font-medium text-[#8a8a8b] mb-[20px]">
                  (지번) 효자동 40-1 (우) 03042
                </p>
              </div>
              <div className="flex items-center justify-baseline gap-[12px] mb-[12px]">
                <Icon
                  icon="TEL_ICON"
                  className="w-[21px] h-[21px] md:w-[24px] md:h-[24px]"
                />
                <p className="text-[14px] text-[#222222] md:text-[16px]">TEL</p>
                <p className="text-[14px] text-[#222222] md:text-[16px]">
                  02-707-2253
                </p>
              </div>
              <div className="flex items-center justify-baseline gap-[12px]">
                <Icon
                  icon="FAX_ICON"
                  className="w-[21px] h-[21px] md:w-[24px] md:h-[24px]"
                />
                <p className="text-[14px] text-[#222222] md:text-[16px]">FAX</p>
                <p className="text-[14px] text-[#222222] md:text-[16px]">
                  02-722-0320
                </p>
              </div>
            </div>
          </div>
          {/* 지사 */}
          <div className="flex items-start gap-[16px] w-1/2">
            <div className="w-[2px] min-h-[152px] bg-[#e8e8e8]" />
            <div className="h-auto flex flex-col items-baseline justify-center">
              <div className="flex flex-col items-start justify-center">
                <p className="text-[14px] font-bold text-[#1d3070] mb-[4px]">
                  군산지사
                </p>
                <h3 className="text-[16px] md:text-[18px] font-bold text-[#222222] mb-[12px]">
                  전북특별자치도 군산시 수송로 315, 111호
                </h3>
                <p className="text-[14px] font-medium text-[#8a8a8b] mb-[20px]">
                  (지번) 미장동 519-5 (우) 54094
                </p>
              </div>
              <div className="flex items-center justify-baseline gap-[12px] mb-[12px]">
                <Icon
                  icon="TEL_ICON"
                  className="w-[21px] h-[21px] md:w-[24px] md:h-[24px]"
                />
                <p className="text-[14px] text-[#222222] md:text-[16px]">TEL</p>
                <p className="text-[14px] text-[#222222] md:text-[16px]">
                  02-707-2253
                </p>
              </div>
              <div className="flex items-center justify-baseline gap-[12px]">
                <Icon
                  icon="FAX_ICON"
                  className="w-[21px] h-[21px] md:w-[24px] md:h-[24px]"
                />
                <p className="text-[14px] text-[#222222] md:text-[16px]">FAX</p>
                <p className="text-[14px] text-[#222222] md:text-[16px]">
                  02-722-0320
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
