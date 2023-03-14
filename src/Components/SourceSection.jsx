import CopyIcon from "../UI/CopyIcon";

const SourceSection = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[14px] leading-[17px] text-[#757575] underline">
        Source
      </span>
      <div className="flex gap-[9px] items-center">
        <span className="text-[14px] leading-[17px] text-[#2D2D2D] underline">
          {Object.keys(props.wordObj).length !== 0 &&
          props.wordObj[0].sourceUrls.length !== 0
            ? props.wordObj[0].sourceUrls
            : ""}
        </span>
        <CopyIcon wordObj={props.wordObj} />
      </div>
    </div>
  );
};
export default SourceSection;
