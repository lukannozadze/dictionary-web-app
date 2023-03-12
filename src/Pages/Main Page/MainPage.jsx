import Header from "../../Components/Header";
import NounSection from "../../Components/NounSection";
import SearchBar from "../../Components/SearchBar";
import SearchedWord from "../../Components/SearchedWord";
import SourceSection from "../../Components/SourceSection";
import VerbSection from "../../Components/VerbSection";

const MainPage = () => {
  return (
    <div className="pl-6 pr-6 pb-[85px] font-inter">
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
