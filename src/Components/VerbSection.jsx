const VerbSection = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mt-[33px] mb-[31px]">
        <span className="text-[#2D2D2D] font-bold italic text-[18px] leading-[22px]">
          verb
        </span>
        <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
      </div>
      <span className="text-[#757575] text-base leading-[20px] mb-[17px]">
        Meaning
      </span>
      <ul className="list-disc  text-[#2D2D2D] text-[15px] leading-6 flex flex-col gap-[13px] mt-[17px] ml-[19px] mb-8">
        <li>
          <div className="flex flex-col gap-[13px]">
            <span className="text-[15px] leading-6 text-[#2D2D2D]">
              To type on a computer keyboard.
            </span>
            <span className="text-[15px] leading-6 text-[#757575]">
              “Keyboarding is the part of this job I hate the most.”
            </span>
          </div>
        </li>
      </ul>
      <div className="w-full h-[1px] bg-[#E9E9E9] mb-6"></div>
    </div>
  );
};
export default VerbSection;
