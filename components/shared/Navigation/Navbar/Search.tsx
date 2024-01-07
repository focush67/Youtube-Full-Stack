"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import queryString from "query-string";

const Search = () => {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = {
      searchQuery: text,
    };

    const url = queryString.stringifyUrl(
      {
        url: "/search",
        query,
      },
      {
        skipNull: true,
      }
    );

    router.push(url);
  };

  return (
    <form
      className="flex border=[1px] border-neutral-700 rounded-full overflow-hidden w-2/5"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-4 py-2 bg-neutral-900"
      />
      <button type="submit" className="px-3 bg-neutral-800 border-none">
        <MdOutlineSearch className="h-6 w-6" />
      </button>
    </form>
  );
};

export default Search;
