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
  const word = useSelector((state) => state.searchedWord.searchedWord);
  const font = useSelector((state) => state.font.font);
  const searchWord = async () => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    setWordObj(data);
  };
  useEffect(() => {
    searchWord();
  }, [word]);

  return (
    <div className={`pl-6 pr-6 pb-[85px] ${font}`}>
      <div className="pt-6 mb-6">
        <Header />
      </div>
      <div className="mb-6">
        <SearchBar />
      </div>
      <SearchedWord wordObj={wordObj} />
      <NounSection wordObj={wordObj} />
      <VerbSection wordObj={wordObj} />
      <SourceSection />
    </div>
  );
};
export default MainPage;
