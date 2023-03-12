import CopyIcon from "../UI/CopyIcon";

const SourceSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] leading-[17px] text-[#757575] underline">
        Source
      </span>
      <div className="flex gap-[9px] items-center">
        <span className="text-[14px] leading-[17px] text-[#2D2D2D] underline">
          https://en.wiktionary.org/wiki/keyboard
        </span>
        <CopyIcon />
      </div>
    </div>
  );
};
export default SourceSection;
