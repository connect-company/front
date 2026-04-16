import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "커넥트 노무법인",
  description: "실력과 신뢰, 고객과 함께하는 모든 순간에 진심을 다합니다.",
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
      </body>
    </html>
  );
}
