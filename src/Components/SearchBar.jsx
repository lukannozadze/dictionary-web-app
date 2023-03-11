import SearchIcon from "../UI/SearchIcon";

const SearchBar = () => {
  return (
    <label className="relative" htmlFor="searchWord">
      <input
        className="w-full h-12 bg-[#F4F4F4] pl-6 rounded-2xl outline-none text-4 placeholder:font-bold font-bold text-[#2D2D2D]  "
        type="text"
        name="searchWord"
        placeholder="Search for any word..."
      />
      <SearchIcon className="absolute top-1 right-6" />
    </label>
  );
};

export default SearchBar;