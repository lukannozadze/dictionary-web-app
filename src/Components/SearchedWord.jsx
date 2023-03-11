import PlayerIcon from "../UI/PlayerIcon";

const SearchedWord = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[32px] leading-[38px] mb-[6px] text-[#2D2D2D] font-bold">
          Keyboard
        </h1>
        <span className="text-[#A445ED] font-normal">/ˈkiːbɔːd/</span>
      </div>
      <PlayerIcon />
    </div>
  );
};

export default SearchedWord;
