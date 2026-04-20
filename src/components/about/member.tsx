import { MEMBERS } from "@/app/constants/members";
import { cn } from "@/app/utils/cn";
import Image from "next/image";

export const Member = () => {
  return (
    <section className="w-full max-w-[1480px] px-[20px] md:px-[40px] pt-[40px] pb-[80px] md:pb-[100px] flex flex-col lg:flex-row md:gap-[40px]">
      {/* 헤더 - 모바일: 상단 / PC: 왼쪽 사이드바 */}
      <div className="mb-[32px] md:mb-0 md:w-[160px] md:shrink-0">
        <h3 className="text-[13px] md:text-[16px] font-bold text-[#1d3070]">
          CONNECT MESSAGE
        </h3>
        <p className="text-[18px] md:text-[28px] font-bold text-[#111111]">
          인사말
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-auto gap-[16px]">
        {MEMBERS.map((item, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={cn(
                "w-full h-auto flex flex-col items-start justify-center p-[20px] md:p-[32px] lg:p-[40px] rounded-[16px]",
                isOdd ? "bg-[#f6f6f6]" : "bg-[#273151]",
              )}
            >
              <div className="w-full h-auto flex flex-col md:flex-row gap-[24px] md:gap-[40px] lg:gap-[60px]">
                {/* 사진 */}
                <Image
                  src={item.image}
                  alt={`${item.name} ${item.role}`}
                  width={150}
                  height={200}
                  className="h-[200px] w-[150px] shrink-0 object-cover rounded-[8px] md:w-[180px] md:h-[240px]"
                />

                {/* 텍스트 */}
                <div className="flex flex-col">
                  <p
                    className={cn(
                      "font-bold text-[14px] md:text-[16px]",
                      isOdd ? "text-[#273151]" : "text-[#ffffff]/60",
                    )}
                  >
                    {item.role}
                  </p>
                  <p
                    className={cn(
                      "font-bold text-[20px] mt-[4px] md:mt-[8px] md:text-[32px]",
                      isOdd ? "text-[#111111]" : "text-white",
                    )}
                  >
                    {item.name}
                  </p>
                  <p
                    className={cn(
                      "text-[12px] md:text-[14px] mt-[6px] md:mt-[12px] font-medium",
                      isOdd ? "text-[#686869]" : "text-[#ffffff]/50",
                    )}
                  >
                    {item.email}
                  </p>
                  <div
                    className={cn(
                      "flex items-center justify-center w-[35px] h-[26px] rounded-[4px] mt-[24px] md:mt-[32px]",
                      isOdd
                        ? "bg-[#e8e8e8] text-[#686869]"
                        : "bg-[#ffffff]/12 text-[#f6f6f6]",
                    )}
                  >
                    <span className="text-[12px] font-bold">소개</span>
                  </div>
                  {/* 모바일: 한 덩어리 / PC: 마침표 기준 줄바꿈 */}
                  <p
                    className={cn(
                      "md:hidden text-[14px] font-normal mt-[8px]",
                      "md:text-[16px]",
                      isOdd ? "text-[#111111]" : "text-[#f6f6f6]",
                    )}
                  >
                    {item.intro}
                  </p>
                  <div className="hidden md:flex md:flex-col md:mt-[12px]">
                    {item.intro
                      .split(".")
                      .filter((s) => s.trim())
                      .map((sentence, i) => (
                        <p
                          key={i}
                          className={cn(
                            "text-[14px] font-normal",
                            isOdd ? "text-[#111111]" : "text-[#f6f6f6]",
                          )}
                        >
                          {sentence.trim()}.
                        </p>
                      ))}
                  </div>

                  {/* 주요 이력 */}
                  <div
                    className={cn(
                      "flex items-center justify-center w-[59px] h-[26px] rounded-[4px] mt-[24px]",
                      isOdd
                        ? "bg-[#e8e8e8] text-[#686869]"
                        : "bg-[#ffffff]/12 text-[#f6f6f6]",
                    )}
                  >
                    <span className="text-[12px] font-bold">주요 이력</span>
                  </div>
                  <ul className="mt-[8px] flex flex-col">
                    {item.education.map((e, i) => (
                      <li
                        key={i}
                        className={cn(
                          "text-[14px] font-normal",
                          isOdd ? "text-[#111111]" : "text-[#f6f6f6]",
                        )}
                      >
                        {e}
                      </li>
                    ))}
                    <div className="mb-[12px]" />
                    {item.career.map((c, i) => (
                      <li
                        key={i}
                        className={cn(
                          "text-[14px] font-normal",
                          isOdd ? "text-[#111111]" : "text-[#f6f6f6]",
                        )}
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
