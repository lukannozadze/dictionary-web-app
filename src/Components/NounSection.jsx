const NounSection = (props) => {
  console.log(props.wordObj);
  return (
    <div>
      <div className="flex items-center gap-4 mb-[31px]">
        <span className="text-[#2D2D2D] font-bold italic text-[18px] leading-[22px]">
          noun
        </span>
        <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
      </div>
      <span className="text-[#757575] text-base leading-[20px]">Meaning</span>
      <ul className="list-disc ml-[19px] text-[#2D2D2D] text-[15px] leading-6 flex flex-col gap-[13px] mt-[17px]">
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
        <span className="text-4 leading-5 text-[#757575]">Synonyms</span>
        {Object.keys(props.wordObj).length !== 0 &&
        props.wordObj[0].meanings[0].synonyms.length !== 0
          ? props.wordObj[0].meanings[0].synonyms.map((item, index) => {
              return (
                <span
                  key={index}
                  className="text-4 leading-5 text-[#A445ED] font-bold "
                >
                  {item}
                </span>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default NounSection;
