export const NAV_ITEMS = [
  {
    label: "커넥트 소개",
    href: "/about",
    children: [
      { label: "인사말", href: "/about" },
      { label: "구성원", href: "/about?tab=구성원" },
    ],
  },
  {
    label: "업무분야",
    href: "/service",
    children: [
      { label: "기업자문", href: "/service?scroll=기업자문" },
      { label: "노동사건", href: "/service?scroll=노동사건" },
      { label: "컨설팅", href: "/service?scroll=컨설팅" },
      { label: "노동조합", href: "/service?scroll=노동조합" },
      { label: "기업강의", href: "/service?scroll=기업강의" },
      { label: "산업재해/어선원재해", href: "/service?scroll=산업재해" },
      { label: "급여 아웃소싱/4대보험", href: "/service?scroll=급여" },
    ],
  },
  {
    label: "주요 수행실적",
    href: "/performance",
    children: [
      { label: "노동사건", href: "/performance?tab=노동사건" },
      { label: "컨설팅", href: "/performance?tab=컨설팅" },
      { label: "단체교섭", href: "/performance?tab=단체교섭" },
      { label: "직장 내 괴롭힘", href: "/performance?tab=직장 내 괴롭힘" },
      { label: "기업강의", href: "/performance?tab=기업강의" },
      { label: "산업재해", href: "/performance?tab=산업재해" },
      { label: "외부 위원회 위촉", href: "/performance?tab=외부 위원회 위촉" },
    ],
  },
  {
    label: "문의하기",
    href: "/contact",
    children: [{ label: "상담 문의", href: "/contact/inquiry" }],
  },
] as const;
