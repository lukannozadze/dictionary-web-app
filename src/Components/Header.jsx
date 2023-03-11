import BookIcon from "../UI/BookIcon";
import HeaderDropdown from "./HeaderDropdown";
import Mode from "./Mode";

const Header = () => {
  return (
    <div className="flex justify-between">
      <BookIcon />
      <div className="flex items-center gap-4">
        <HeaderDropdown />
        <div className="bg-[#E9E9E9] w-[1px] h-8"></div>
        <Mode />
      </div>
    </div>
  );
};

export default Header;
