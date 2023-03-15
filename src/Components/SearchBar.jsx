import { useState } from "react";
import SearchIcon from "../UI/SearchIcon";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const SearchBar = () => {
  const schema = yup.object().shape({
    word: yup.string().required("Whoops, can’t be empty…"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors.word.message);
  const [word, setWord] = useState("");
  return (
    <form onSubmit={handleSubmit((e) => e.preventDefault())} id="form">
      <label className="relative" htmlFor="searchWord">
        <input
          {...register("word")}
          className={`w-full h-12 ${
            errors.word !== undefined ? "border-red-500" : ""
          } bg-[#F4F4F4] pl-6 rounded-2xl outline-none text-4 placeholder:font-bold font-bold text-[#2D2D2D]  `}
          type="text"
          name="searchWord"
          placeholder="Search for any word..."
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <button form="form">
          <SearchIcon
            className="absolute top-1 right-6 "
            searchedWord={word}
            handleSubmit={handleSubmit}
          />
        </button>
      </label>
      <span>{errors.word?.message}</span>
    </form>
  );
};

export default SearchBar;
