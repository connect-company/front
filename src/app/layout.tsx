import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "커넥트 노무법인",
  description:
    "기업자문, 노동사건, 산업재해, 급여 아웃소싱 등 인사노무 전 분야 전문 노무법인.대표노무사 이현우·김태훈. 02-707-2553",
  keywords:
    "커넥트노무법인, 커넥트노무, 이현우노무사, 김태훈노무사, 김준영노무사, 박진아노무사, 기업자문, 노동사건,부당해고, 부당해고구제신청, 임금체불, 산업재해, 노동조합, 인사노무컨설팅, 급여아웃소싱,4대보험, 직장내괴롭힘",
  openGraph: {
    title: "커넥트 노무법인 | 노무사 기업자문 노동사건 전문",
    description:
      "기업자문, 노동사건, 산업재해, 급여 아웃소싱 등 인사노무 전 분야 전문 노무법인.대표노무사 이현우·김태훈. 02-707-2553",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className={`${notoSansKR.className} antialiased`}>
        <header className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
