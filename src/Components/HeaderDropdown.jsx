import BottomArrow from "../UI/BottomArrow";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fontActions } from "../store/store";

const HeaderDropdown = () => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const [chosenFont, setChosenFont] = useState("Sans Serif");
  const listClickHandler = (e) => {
    dispatch(fontActions.setFont(e.target.id));
    setChosenFont(e.target.id);
    setIsClicked(false);
  };
  return (
    <div className="relative">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setIsClicked(!isClicked)}
      >
        <span className="text-sm font-bold leading-6">{chosenFont}</span>
        <BottomArrow />
      </div>
      <div
        className={`pl-6 pt-6 pb-6 w-[159px] bg-white shadow-custom text-lg leading-6 font-bold rounded-2xl absolute top-8 right-0 z-10 ${
          isClicked ? "block" : "hidden"
        } `}
      >
        <ul onClick={listClickHandler} className="flex flex-col gap-4">
          <li
            id="Sans Serif"
            className="font-inter hover:text-[#A445ED] cursor-pointer"
          >
            Sans Serif
          </li>
          <li
            id="Serif"
            className="font-lora hover:text-[#A445ED] cursor-pointer"
          >
            Serif
          </li>
          <li
            id="Mono"
            className="font-inconsolata hover:text-[#A445ED] cursor-pointer"
          >
            Mono
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderDropdown;
