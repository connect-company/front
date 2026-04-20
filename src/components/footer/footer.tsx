import Icon from "../icon";

export const Footer = () => {
  return (
    <div className="w-full text-[#cccccc] flex flex-col items-start justify-center pt-[32px] pb-[48px] px-[28px] bg-[#222222] md:pt-[40px] md:pb-[60px] md:px-[40px]">
      <div className="w-[53.2px] h-[20px] mb-[20px] md:mb-[24px] md:w-[66.5px] md:h-[25px]">
        <Icon icon="FOOTER_LOGO" className="w-full h-full" />
      </div>
      <div className="w-full h-auto mb-[4px] md:mb-0">
        <p className="text-[12px] md:text-[13px]">
          커넥트노무법인 Connect Labor Law Firm
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row md:gap-[40px] md:mt-[6px]">
        <div className="flex gap-[6px] mb-[4px] md:mb-0">
          <p className="text-[12px] md:text-[13px] font-bold">본사</p>
          <p className="text-[12px] md:text-[13px]">
            서울특별시 종로구 자하문로24길 58, 2층
          </p>
        </div>
        <div className="flex gap-[6px]">
          <p className="text-[12px] md:text-[13px] font-bold">지사</p>
          <p className="text-[12px] md:text-[13px]">
            전북특별자치도 군산시 수송로 315, 111호
          </p>
        </div>
      </div>
      <div className="flex gap-[12px] mt-[4px] md:mt-[6px]">
        <p className="text-[12px] md:text-[13px]">TEL : 02-707-2253</p>
        <p className="text-[12px] md:text-[13px]">FAX : 02-722-0320</p>
      </div>
      <div className="w-full mt-[32px] md:mt-[40px]">
        <p className="text-[11px] md:text-[12px] text-[#cccccc]/50">
          Copyright (C) Connect Labor Law Firm. All RIGHTS RESERVED{" "}
        </p>
      </div>
    </div>
  );
};
