"use client";
import { AboutTaps } from "@/components/about/aboutTabs";
import { Greeting } from "@/components/about/greeting";
import { Member } from "@/components/about/member";
import { HearoSection } from "@/components/heroSection/heroSection";
import { useState } from "react";

export default function AboutPage() {
  const [tab, setTab] = useState("인사말");
  return (
    <main className="">
      <HearoSection
        variant="sub"
        bgImage="/about.jpg"
        title="커넥트 소개"
        subtitle={`당신의 든든한 노무 파트너, 커넥트입니다`}
        button={false}
      />
      <AboutTaps selected={tab} onSelect={setTab} />
      <div className="w-full flex items-center justify-center">
        {tab === "인사말" && <Greeting />}
        {tab === "구성원" && <Member />}
      </div>
    </main>
  );
}
