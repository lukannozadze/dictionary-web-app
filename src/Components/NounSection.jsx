import { useDispatch, useSelector } from "react-redux";
import { searchedWordActions } from "../store/store";

const NounSection = (props) => {
  const isDark = useSelector((state) => state.mode.isDark);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center gap-4 mb-[31px]">
        <span
          className={`${
            isDark ? "text-white normal" : "text-[#2D2D2D] italic"
          } font-bold   text-[18px] leading-[22px] md:text-[20px]`}
        >
          noun
        </span>
        <div
          className={`w-full h-[1px] ${
            isDark ? "bg-[#3A3A3A]" : "bg-[#E9E9E9]"
          }`}
        ></div>
      </div>
      <span
        className={` ${
          isDark ? "text-white" : "text-[#757575]"
        } text-base leading-[20px] md:text-[18px]`}
      >
        Meaning
      </span>
      <ul
        className={`list-disc ml-[19px] ${
          isDark ? "text-white" : "text-[#2D2D2D]"
        } text-[15px] leading-6 flex flex-col gap-[13px] mt-[17px] md:text-[17px]`}
      >
        {Object.keys(props.wordObj).length !== 0
          ? props.wordObj[0].meanings[0].definitions.map((item, index) => {
              return (
                <li key={index}>
                  <span>{item.definition}</span>
                </li>
              );
            })
          : ""}
      </ul>
      <div className="flex gap-6 mt-6  flex-wrap">
        <span className="text-4 leading-5 text-[#757575] md:text-[18px]">
          Synonyms
        </span>
        {Object.keys(props.wordObj).length !== 0 &&
        props.wordObj[0].meanings[0].synonyms.length !== 0
          ? props.wordObj[0].meanings[0].synonyms.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    dispatch(searchedWordActions.setWord(item));
                  }}
                  key={index}
                  className="text-[16px] md:text-[18px]  leading-5 text-[#A445ED] font-bold "
                >
                  {item}
                </button>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default NounSection;
