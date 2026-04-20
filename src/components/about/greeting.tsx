import Image from "next/image";
import Icon from "../icon";

const greetingItems = [
  {
    quote: (
      <>
        인사 리스크 예방부터
        <br />
        분쟁 대응까지
        <br />
        <span className="text-[#1D3070]">노무 솔루션을</span>
        <br />
        제공합니다.
      </>
    ),
    body: (
      <>
        <p>
          <span className="font-bold text-[14px] text-[#111111]">
            커넥트노무법인은
          </span>{" "}
          노동관계법령과 인사노무 분야에 특화된 전문경영 바탕으로, 기업의 인사
          리스크 예방과 노동분쟁 대응을 체계적으로 지원합니다.
        </p>
        <p className="">
          채용, 근로조건 설계, 임금관리, 징계·해고, 산업재해, 직장 내 괴롭힘 등
          노동현장에서 발생하는 다양한 이슈에 대해 초기 검토부터 대응 방향까지
          함께합니다.
        </p>
      </>
    ),
  },
  {
    quote: (
      <>
        법과 판례를 기반으로
        <br />
        <span className="text-[#1D3070]">실행력</span> 있는
        <br />
        <span className="text-[#1D3070]">해결책을</span> 제시합니다.
      </>
    ),
    body: (
      <>
        <p>
          <span className="font-bold text-[14px] text-[#111111]">
            커넥트노무법인은
          </span>{" "}
          관련 법령, 판례, 행정해석 및 실무 기준을 종합적으로 검토하여 사안별
          특성과 해결방안을 제시합니다.
        </p>
        <p className="">
          예방 중심의 자문부터 분쟁 발생 이후의 대응까지 일관된 서비스를
          제공하며, 단순한 법률 검토를 넘어 실제 현장에서 실행 가능한 인사
          솔루션을 제안합니다.
        </p>
        <p className="">
          의뢰인의 입장에서 생각하고 실행하는 신뢰할 수 있는 파트너가
          되겠습니다.
        </p>
      </>
    ),
  },
];

export const Greeting = () => {
  return (
    <section className="w-full max-w-[1480px] px-[20px] md:px-[40px] pt-[40px] pb-[60px] md:pb-[100px] flex flex-col lg:flex-row md:gap-[40px]">
      {/* 헤더 - 모바일: 상단 / PC: 왼쪽 사이드바 */}
      <div className="mb-[32px] md:mb-0 md:w-[160px] md:shrink-0">
        <h3 className="text-[13px] md:text-[16px] font-bold text-[#1d3070]">
          CONNECT MESSAGE
        </h3>
        <p className="text-[18px] md:text-[28px] font-bold text-[#111111]">
          인사말
        </p>
      </div>

      {/* 우측 콘텐츠 */}
      <div className="flex-1 flex flex-col md:gap-[32px] lg:gap-[20px]">
        {/* 이미지 */}
        <div className="relative h-[160px] md:h-[208px] lg:h-[320px] w-full">
          <Image
            src="/greeting.jpg"
            alt="인사말"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* 인사말 아이템 목록 */}
        {greetingItems.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:flex-row md:gap-[40px] gap-[32px]"
          >
            {/* 인용구 */}
            <div className="md:flex-1 flex flex-col gap-[8px]">
              <div className="mt-[32px] mb:mt-0">
                <Icon icon="COLON_ICON" className="w-[20px] h-[15px]" />
              </div>
              <p className="text-[22px] md:text-[26px] font-bold leading-normal text-[#111111]">
                {item.quote}
              </p>
            </div>

            {/* 본문 */}
            <div className="md:flex-1 text-[14px] text-[#111111] md:mt-[58px]">
              {item.body}
            </div>
          </div>
        ))}

        {/* 서명 */}
        <div className="w-full h-[56px] md:h-[87px] flex items-end justify-end text-[16px] md:text-[18px] font-bold text-[#111111]">
          커넥트 노무법인 대 표 사 원
        </div>
      </div>
    </section>
  );
};
