import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modeActions } from "../store/store";

const ModeToggler = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.mode.isDark);
  let [cx, setCx] = useState("10");

  useEffect(() => {
    isDark ? setCx("30") : setCx("10");
  }, [isDark]);
  const iconClickHandler = () => {
    dispatch(modeActions.toggleMode());
  };
  return (
    <svg
      width="40"
      height="20"
      viewBox="0 0 40 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={iconClickHandler}
    >
      <rect
        width="40"
        height="20"
        rx="10"
        fill="#757575"
        className={isDark ? "fill-[#A445ED]" : ""}
      />
      <circle cx={cx} cy="10" r="7" fill="white" />
    </svg>
  );
};

export default ModeToggler;
