"use client";

import { BUSINESS_ITEMS } from "@/app/constants/business";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const BusinessSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(72);

  const trackRef = useRef<HTMLDivElement>(null);
  const totalCount = BUSINESS_ITEMS.length;

  useEffect(() => {
    if (!trackRef.current) return;
    setTrackWidth(trackRef.current.offsetWidth);

    const observer = new ResizeObserver(() => {
      setTrackWidth(trackRef.current?.offsetWidth ?? 0);
    });
    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => {
      const progress = emblaApi.scrollProgress();
      setSelectedIndex(Math.round(progress * (totalCount - 1)));
    };

    const updateThumb = () => {
      const notInView = emblaApi.slidesNotInView().length;
      if (notInView === 0) {
        setThumbWidth(trackWidth);
        return;
      }
      const visibleCount = totalCount - notInView;
      setThumbWidth((visibleCount / totalCount) * trackWidth);
    };

    emblaApi.on("scroll", onScroll);
    emblaApi.on("scroll", updateThumb);
    emblaApi.on("resize", updateThumb);
    updateThumb();

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("scroll", updateThumb);
      emblaApi.off("resize", updateThumb);
    };
  }, [emblaApi, totalCount, trackWidth]);

  return (
    <section className="relative w-full h-auto mt-[80px] overflow-hidden max-w-[1400px]">
      {/* 업무분야 타이틀 영역 */}
      <div className="w-full min-h-[116px] flex flex-col md:flex-row md:items-center md:justify-between lg:justify-start lg:gap-[120px] px-[20px] md:px-[40px]">
        <div>
          <p className="text-[14px] md:text-[16px] font-bold text-[#1d3070]">
            {"CONNECT'S BUSINESS"}
          </p>
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#222222] mt-[4px]">
            커넥트 업무 분야
          </h2>
        </div>
        <p className="text-[13px] md:text-[16px] lg:whitespace-nowrap font-medium text-[#686869] mt-[12px] md:mt-0 md:max-w-[400px]">
          커넥트 노무법인은 기업의 규모와 업종을 반영한 인사노무 솔루션으로
          고객의 성장을 함께합니다.
        </p>
      </div>
      {/* 업무분야 슬라이드 영역 */}
      <div ref={emblaRef} className="overflow-hidden mt-[32px]">
        <div className="flex gap-[16px] pl-[20px] md:pl-[40px]">
          {BUSINESS_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/service?scroll=${item.slug}`}
              className="group relative flex-none w-[200px] md:w-[260px] h-[260px] md:h-[340px] rounded-[12px] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="eager"
                sizes="200px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-[#1d3070]/80 opacity-0 group-hover:opacity-100
  transition-opacity duration-300 flex flex-col items-center justify-center p-[12px]
  text-center"
              >
                <p className="text-[14px] font-bold text-white/72 shadow-[0_16px_0_0_rgba(0,0,0,0.16)]">
                  {item.titleEn}
                </p>
                <p className="text-[26px] font-bold text-white shadow-[0_16px_0_0_rgba(0,0,0,0.16)]">
                  {item.title}
                </p>
                <p className="text-[16px] font-medium text-white">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
          {/* 오른쪽 여백 확보용 스페이서: gap(16px) + 4px = 20px */}
          <div className="flex-none w-[4px] md:w-[24px]" />
        </div>
      </div>
      {/* 스크롤 영역*/}
      <div
        ref={trackRef}
        className="relative h-[4px] bg-[#000000]/10 mt-[16px] mx-[20px] md:mx-[40px]"
      >
        <div
          className="absolute h-full bg-[#111111] transition-all duration-300 max-w-[1400px]"
          style={{
            width: `${thumbWidth}px`,
            left: `${(selectedIndex / (totalCount - 1)) * (trackWidth - thumbWidth)}px`,
          }}
        />
      </div>
      {/* CONNECT 데코레이티브 텍스트 */}
      <div className="relative w-full h-[50px] md:h-[95px] mt-[35px] md:mt-[5px] lg:mt-[30px] overflow-hidden lg:hidden">
        <Image
          src="/connect-text.svg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative w-full h-[110px] mt-[24px] overflow-hidden hidden lg:block">
        <Image
          src="/connect-text-pc.svg"
          alt=""
          width={891}
          height={110}
          className="absolute top-0 right-0"
        />
      </div>
    </section>
  );
};
