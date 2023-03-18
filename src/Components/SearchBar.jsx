import { useEffect, useState } from "react";
import SearchIcon from "../UI/SearchIcon";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
const SearchBar = () => {
  const isDark = useSelector((state) => state.mode.isDark);
  const schema = yup.object().shape({
    word: yup
      .string()
      .required("Whoops, can’t be empty…")
      .matches(/^[A-Za-z\s]*$/, "Wrong Format!"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [word, setWord] = useState("");
  useEffect(() => {
    setWord(watch("word"));
  }, [watch("word")]);
  return (
    <form onSubmit={handleSubmit((e) => e.preventDefault)} id="form">
      <label className="relative" htmlFor="searchWord">
        <input
          {...register("word")}
          className={`w-full h-12 bg-[#F4F4F4] ${
            errors.word ? "border-[1px] border-[#FF5252]" : ""
          } pl-6 rounded-2xl outline-none text-4 placeholder:font-bold font-bold ${
            isDark ? "bg-zinc-800 text-white" : "text-[#2D2D2D"
          }`}
          type="text"
          placeholder="Search for any word..."
        />
        <button form="form">
          <SearchIcon className="absolute top-1 right-6 " searchedWord={word} />
        </button>
      </label>
      <span className="text-[#FF5252] text-4 leading-5">
        {errors.word?.message}
      </span>
    </form>
  );
};

export default SearchBar;
