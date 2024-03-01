"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
const Search = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      className="w-full max-w-[300px] bg-white border-[1px] outline-none focus:border-gray-400 rounded-lg text-sm mt-2 font-light py-2 px-2 placeholder:text-neutral-800"
      type="text"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      placeholder="Buscar Obra"
    />
  );
};

export default Search;
