"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const value = e.target.value;
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Buscar Obra" />
    </div>
  );
};

export default Search;
