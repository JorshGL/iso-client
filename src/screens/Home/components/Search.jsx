import React, { useState } from "react";
import { MdFilterListAlt, MdOutlineSearch } from "react-icons/md";

const Search = () => {
  const [filterOpen, setFilterOpen] = useState(true);
  const [filterBy, setFilterBy] = useState(null);

  const filterOptions = [
    {
      label: "Nombre",
      value: "name",
    },
    {
      label: "Asignatura",
      value: "subject",
    },
  ];

  return (
    <div className="absolute right-0 bottom-0 w-4/5 h-5/6">
      <div className="flex w-3/5 gap-8 mx-auto">
        <button
          className="flex items-center gap-1 border border-custom-blue-main py-1 px-2 rounded-md relative"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <MdFilterListAlt className="text-2xl text-custom-blue-main" />
          {filterBy ? filterBy : "Filtrar"}
          <div
            className={`flex flex-col absolute -left-full top-3/4 p-4 shadow-md shadow-neutral-400 bg-white rounded-md z-10 ${
              filterOpen ? "" : "hidden"
            }`}
          >
            {filterOptions.map((option) => (
              <div className="flex items-center gap-3 p-3">
                <button
                  key={option.value}
                  className="flex items-center justify-center h-1/3 aspect-square rounded-full px-2 border border-black p-1 overflow-hidden"
                  onClick={() => setFilterBy(option.label)}
                ><span className={`h-full aspect-square rounded-full ${filterBy === option.label ? 'bg-custom-blue-main' : ''}`}></span></button>
                {option.label}
              </div>
            ))}
          </div>
        </button>
        <div className="flex items-center w-full border border-neutral-500 rounded-lg px-2 py-1 bg-neutral-100 gap-2 shadow-md shadow-neutral-300">
          <MdOutlineSearch className="text-3xl text-neutral-600" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full outline-none h-full bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
