export const NAV_ITEMS = [
  {
    label: "커넥트 소개",
    href: "/about",
    children: [
      { label: "인사말", href: "/about/greeting" },
      { label: "구성원", href: "/about/members" },
    ],
  },
  {
    label: "업무분야",
    href: "/services",
    children: [
      { label: "기업자문", href: "/services/consulting" },
      { label: "노동사건", href: "/services/labor" },
      { label: "컨설팅", href: "/services/hr" },
      { label: "노동조합", href: "/services/union" },
      { label: "기업강의", href: "/services/lecture" },
      { label: "산업재해/어선원재해", href: "/services/accident" },
      { label: "급여 아웃소싱/4대보험", href: "/services/payroll" },
    ],
  },
  {
    label: "주요 수행실적",
    href: "/performance",
    children: [
      { label: "노동사건", href: "/performance/labor" },
      { label: "컨설팅", href: "/performance/consulting" },
      { label: "단체교섭", href: "/performance/bargaining" },
      { label: "직장 내 괴롭힘", href: "/performance/harassment" },
      { label: "기업강의", href: "/performance/lecture" },
      { label: "산업재해", href: "/performance/accident" },
      { label: "외부 위원회 위촉", href: "/performance/committee" },
    ],
  },
  {
    label: "문의하기",
    href: "/contact",
    children: [{ label: "상담 문의", href: "/contact/inquiry" }],
  },
] as const;
