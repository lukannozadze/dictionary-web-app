import Header from "../../Components/Header";
import NounSection from "../../Components/NounSection";
import SearchBar from "../../Components/SearchBar";
import SearchedWord from "../../Components/SearchedWord";
import VerbSection from "../../Components/VerbSection";

const MainPage = () => {
  return (
    <div className="pl-6 pr-6 font-inter">
      <div className="pt-6 mb-6">
        <Header />
      </div>
      <div className="mb-6">
        <SearchBar />
      </div>
      <SearchedWord />
      <NounSection />
      <VerbSection />
    </div>
  );
};
export default MainPage;
