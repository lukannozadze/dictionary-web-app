import { useSelector } from "react-redux";

const VerbSection = (props) => {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <div>
      <div className="flex items-center gap-4 mt-[33px] mb-[31px]">
        <span
          className={` ${
            isDark ? "text-white" : "text-[#2D2D2D]"
          } font-bold italic text-[18px] leading-[22px] md:text-[20px] sxl:mt-[20px] sxl:mb-[20px] `}
        >
          verb
        </span>
        <div
          className={`w-full h-[1px] ${
            isDark ? "bg-[#3A3A3A]" : "bg-[#E9E9E9]"
          }`}
        ></div>
      </div>
      <span
        className={`${
          isDark ? "text-white" : "text-[#757575]"
        }  text-base leading-[20px] mb-[17px] md:text-[18px]`}
      >
        Meaning
      </span>
      <ul className="list-disc  text-[#2D2D2D]  leading-6 flex flex-col gap-[13px] mt-[17px] ml-[19px] mb-8">
        {Object.keys(props.wordObj).length !== 0 &&
        props.wordObj[0].meanings[1] !== undefined
          ? props.wordObj[0].meanings[1].definitions.map((item, index) => {
              return (
                <li key={index}>
                  <div className="flex flex-col gap-[13px]">
                    <span
                      className={`text-[15px] leading-6  ${
                        isDark ? "text-white" : "text-[#2D2D2D]"
                      } md:text-[17px]`}
                    >
                      {item.definition}
                    </span>
                    <span className="text-[15px] leading-6 text-[#757575] md:text-[17px]">
                      {item.example ? `${item.example}` : ""}
                    </span>
                  </div>
                </li>
              );
            })
          : ""}
      </ul>
      <div
        className={`w-full h-[1px] ${
          isDark ? "bg-[#3A3A3A]" : "bg-[#E9E9E9]"
        }  mb-6`}
      ></div>
    </div>
  );
};
export default VerbSection;
