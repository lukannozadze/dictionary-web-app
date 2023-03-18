import { useSelector } from "react-redux";
import CopyIcon from "../UI/CopyIcon";
import { Link } from "react-router-dom";

const SourceSection = (props) => {
  const sourceLink =
    Object.keys(props.wordObj).length !== 0 &&
    props.wordObj[0].sourceUrls.length !== 0
      ? props.wordObj[0].sourceUrls
      : "";
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <div className="flex flex-col gap-2 sxl:flex-row">
      <span className="text-[14px] leading-[17px] text-[#757575] underline md:text-[16px]">
        Source
      </span>
      <div className="flex gap-[9px] items-center">
        <span
          className={`text-[14px] leading-[17px] md:text-[16px] ${
            isDark ? "text-white" : "text-[#2D2D2D]"
          } underline cursor-pointer sxl:mb-[20px]`}
        >
          <a href={sourceLink}>{sourceLink}</a>
        </span>

        <CopyIcon wordObj={props.wordObj} />
      </div>
    </div>
  );
};
export default SourceSection;
