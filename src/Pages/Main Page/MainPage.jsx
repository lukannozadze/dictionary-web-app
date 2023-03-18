import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import NounSection from "../../Components/NounSection";
import SearchBar from "../../Components/SearchBar";
import SearchedWord from "../../Components/SearchedWord";
import SourceSection from "../../Components/SourceSection";
import VerbSection from "../../Components/VerbSection";
const MainPage = () => {
  const [wordObj, setWordObj] = useState({});
  const [isError, setIsError] = useState(false);
  const word = useSelector((state) => state.searchedWord.searchedWord);
  const font = useSelector((state) => state.font.font);
  const isDark = useSelector((state) => state.mode.isDark);
  const searchWord = async () => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    const data = await response.json();
    if (response.ok) {
      setWordObj(data);
      setIsError(false);
    } else {
      setIsError(true);
      return; //not found component state => true
    }
  };
  useEffect(() => {
    searchWord();
  }, [word]);

  return (
    <div
      className={`${isDark ? "bg-[#1F1F1F]" : ""} pl-6 pr-6 pb-[85px] ${font}`}
    >
      {isError ? (
        <div>
          <div className="pt-6 mb-6">
            <Header />
          </div>
          <div className="mb-6">
            <SearchBar />
          </div>
          <div className="flex flex-col justify-center text-center gap-6">
            <span className="text-[64px]">&#128533;</span>
            <span className="text-4 font-bold text-[#2D2D2D]">
              No Definitions Found
            </span>
            <p className="text-[#757575] text-[14px]">
              Sorry pal, we couldn't find definitions for the word you were
              looking for. You can try the search again at later time or head to
              the web instead.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="pt-6 mb-6">
            <Header />
          </div>
          <div className="mb-6">
            <SearchBar />
          </div>
          <SearchedWord wordObj={wordObj} />
          <NounSection wordObj={wordObj} />
          <VerbSection wordObj={wordObj} />
          <SourceSection wordObj={wordObj} />
        </div>
      )}
    </div>
  );
};
export default MainPage;
