import PlayerIcon from "../UI/PlayerIcon";

const SearchedWord = (props) => {
  return (
    <div className="flex justify-between items-center mb-[29px]">
      <div>
        <h1 className="text-[32px] leading-[38px] mb-[6px] text-[#2D2D2D] font-bold">
          {Object.keys(props.wordObj).length !== 0
            ? props.wordObj[0].word[0].toUpperCase() +
              props.wordObj[0].word.slice(1)
            : ""}
        </h1>
        <span className="text-[#A445ED] font-normal">
          {Object.keys(props.wordObj).length !== 0
            ? props.wordObj[0].phonetic
            : ""}
        </span>
      </div>
      <PlayerIcon
        wordObj={Object.keys(props.wordObj).length !== 0 ? props.wordObj : ""}
      />
    </div>
  );
};

export default SearchedWord;
