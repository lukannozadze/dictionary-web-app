import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import NounSection from "../../Components/NounSection";
import SearchBar from "../../Components/SearchBar";
import SearchedWord from "../../Components/SearchedWord";
import SourceSection from "../../Components/SourceSection";
import VerbSection from "../../Components/VerbSection";

const MainPage = () => {
  // const searchWord = async () => {
  //   const response = await fetch(
  //     "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };
  // searchWord();

  const font = useSelector((state) => state.font.font);
  return (
    <div className={`pl-6 pr-6 pb-[85px] ${font}`}>
      <div className="pt-6 mb-6">
        <Header />
      </div>
      <div className="mb-6">
        <SearchBar />
      </div>
      <SearchedWord />
      <NounSection />
      <VerbSection />
      <SourceSection />
    </div>
  );
};
export default MainPage;
