import { useSelector } from "react-redux";
import MainPage from "./Pages/Main Page/MainPage";

function App() {
  const isDark = useSelector((state) => state.mode.isDark);
  return (
    <div
      className={` ${
        isDark ? "bg-[#1F1F1F]" : ""
      } h-full sxl:flex sxl:justify-center `}
    >
      <MainPage />
    </div>
  );
}

export default App;
