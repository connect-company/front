type PerformanceItem = {
  text: string;
  bold?: boolean;
};

type PerformanceCategory = {
  title?: string;
  items: PerformanceItem[];
};

type PerformanceMainItem = {
  id: number;
  slug: string;
  image: string;
  categories: PerformanceCategory[];
};

export const PERFORMANCE_MAIN_ITEMS: PerformanceMainItem[] = [
  {
    id: 1,
    slug: "노동사건",
    image: "/performance/performance1.png",
    categories: [
      {
        title: "집단적 노사관계",
        items: [
          {
            text: "○○고속도로 용역사 복수노동조합 근로시간면제 공제대표의무 위반",
            bold: true,
          },
          { text: "○○노동조합 부당노동행위 구제신청" },
          { text: "한국○○○재단 부당노동행위 구제신청" },
          { text: "한국○○○○공사 자회사 과반수노동조합 이의신청" },
          { text: "한국○○○ 자회사 과반수노동조합 이의신청" },
          { text: "한국○○○ 자회사 공정대표의무 위반", bold: true },
          { text: "한국○○공사 자회사 부당노동행위 구제신청" },
          { text: "○○대학교 과반수노동조합 이의신청" },
          { text: "한국○○발전 자회사 부당노동행위 구제신청" },
          { text: "○○고속도로 부당노동행위 구제신청" },
          { text: "한국정보○○○○ 공정대표의무 위반", bold: true },
          { text: "○○기술원 부당노동행위 구제신청" },
          { text: "SK○○○ 노동조합 임금체불 진정" },
          { text: "○○○FC 노동조합 교섭단위분리 외 다수" },
        ],
      },
      {
        title: "개별적 근로관계",
        items: [
          {
            text: "○○○체육회 부당해고 구제신청",
            bold: true,
          },
          { text: "○○○ 근무지원단(정부부처) 부당해고 구제신청" },
          { text: "국립○○도서관 부당징계 구제신청" },
          { text: "○○병원 자회사 부당해고 구제신청" },
          { text: "SK○○○○○ 자회사 부당징계 구제신청" },
          { text: "○○제약 부당전보 구제신청", bold: true },
          { text: "○○산업개발 부당해고 구제신청" },
          { text: "○○병원 부당해고 구제신청" },
          { text: "○○교통 부당대기발령 구제신청" },
          { text: "○○교통 부당해고 구제신청" },
          { text: "○○애니웨어(외국계) 경영해고 구제신청", bold: true },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "컨설팅",
    image: "/performance/performance2.jpg",
    categories: [
      {
        items: [
          { text: "○○○병원 근로시간 및 인사제도 개선 컨설팅", bold: true },
          { text: "○○○푸드 임금체계 개편 컨설팅" },
          { text: "○○메이트 평가 및 보상제도 개선 컨설팅" },
          { text: "○○○글로벌 근로시간 개편 컨설팅" },
          { text: "○○○○기술원 근로시간 및 노사관계개선 컨설팅" },
          { text: "한국○○ 자회사 조직문화 개선 컨설팅", bold: true },
          { text: "한국○○발전 자회사 임금체계 개선 컨설팅" },
          { text: "○○○○ 기술원 임금체계 개선 컨설팅" },
          { text: "○와치 임금체계 개선 컨설팅" },
          { text: "주식회사 유씨○○ 평가체계 개선 컨설팅" },
          { text: "민주당 노동위원회 공기업 자회사 계약설계 분석", bold: true },
          { text: "○○○서비스 임금체계 개선 컨설팅" },
          { text: "주식회사 디알○○ 평가체계 개선 컨설팅" },
          { text: "○○○○노동조합 모범단체협약(안) 제작 컨설팅" },
          { text: "삼양○○○○ 산업안전보건 개선 컨설팅" },
          { text: "○○○○재단 노무관리 진단 컨설팅", bold: true },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "단체교섭",
    image: "/performance/performance3.jpg",
    categories: [
      {
        items: [
          { text: "○○기술원 단체교섭", bold: true },
          { text: "○○거래소 자회사 단체교섭" },
          { text: "○○고속도로 자회사 단체교섭" },
          { text: "한국○○공사 자회사 단체교섭" },
          { text: "○○고속도로 용역사 단체교섭" },
          { text: "한국○○발전 자회사 단체교섭", bold: true },
          { text: "국립○○○ 단체교섭 외 다수" },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "직장 내 괴롭힘",
    image: "/performance/performance4.png",
    categories: [
      {
        items: [
          { text: "보령○○병원 직장 내 괴롭힘 조사 용역", bold: true },
          { text: "한국○○발전 자회사 직장 내 괴롭힘 조사 용역" },
          { text: "논산○○병원 직장 내 괴롭힘 조사 용역" },
          { text: "○○제약 직장 내 괴롭힘 조사 용역" },
          { text: "○○병원 자회사 직장 내 괴롭힘 조사 용역" },
          { text: "○○○○노동조합 직장 내 괴롭힘 조사 용역", bold: true },
          { text: "○○○협동조합 직장 내 괴롭힘 조사 용역" },
          { text: "○○○○재단 직장 내 괴롭힘 조사 용역 외 다수" },
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "기업강의",
    image: "/performance/performance5.png",
    categories: [
      {
        items: [
          { text: "김포○○○지원센터 근로기준법 교육", bold: true },
          { text: "전력○○○ 자회사 노동관계법 교육" },
          { text: "한국○○협회 HR트렌드 교육" },
          { text: "주식회사 ○○○○글로벌 조직문화 개선 교육" },
          { text: "한국○○발전 자회사 노동관계법 교육" },
          { text: "○○○○○○노동조합 노동관계법 교육", bold: true },
          { text: "○○구청 공무직 관리자 노동관계법 교육" },
          { text: "대한신경과의사회 학술대회 노동관계법 교육" },
          { text: "한국공인노무사회 직무급 설계 교육" },
          { text: "공기업 자회사 노동조합 노동관계법 교육" },
          {
            text: "한국공인노무사회 직업계고등학교 노동관계법 교육",
            bold: true,
          },
          { text: "보험연수원 퇴직연금모집인 강사 출강" },
          { text: "중앙경제HR 공인노무사 1차 경영학 강사 출강 외 다수" },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "산업재해",
    image: "/performance/performance6.png",
    categories: [
      {
        items: [
          {
            text: "업무상 질병 및 업무상 사고 신청 대리 및 승인 다수",
            bold: true,
          },
          { text: "출퇴근재해 신청 대리 및 승인 다수" },
          { text: "장해등급 심사청구 대리 및 승인 다수" },
          { text: "유족급여 신청 대리 및 승인 다수" },
          { text: "어선원재해 신청 대리 및 승인 다수" },
        ],
      },
    ],
  },
  {
    id: 7,
    slug: "외부 위원회 위촉",
    image: "/performance/performance7.png",
    categories: [
      {
        items: [
          {
            text: "고용노동부 공기업 자회사 운영실태 평가위원",
            bold: true,
          },
          { text: "중소벤치기업부 비즈니스지원단" },
          { text: "한국경영○○○○○○협회 자문위원" },
          { text: "NCS컨설팅 평가위원" },
          { text: "정보통신○○○○○ 인사위원회 위원" },
          { text: "창업○○○ 인사위원회 위원", bold: true },
          { text: "○○○○재단 인사위원회 위원" },
          { text: "서울○○○재단 인사위원회 위원 외 다수" },
        ],
      },
    ],
  },
];
