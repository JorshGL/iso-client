import React, { useEffect, useState } from "react";
import { MdFilterListAlt, MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors } from "../../../store/instructors/instructors.thunk";
import { toast } from "react-toastify";

const Search = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchString, setSearchString] = useState("");

  const { error } = useSelector(state => state.instructors)
  const dispatch = useDispatch();

  const filterOptions = [
    {
      label: "Nombre",
      value: "name",
    },
    {
      label: "Asignatura",
      value: "course",
    },
  ];
  const [filterBy, setFilterBy] = useState(filterOptions[0]);

  useEffect(() => {
    dispatch(fetchInstructors({ filterBy: filterBy.value, searchString }));
  }, [searchString, filterBy]);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <div className="flex w-3/5 gap-8 mx-auto">
      <button
        className="flex items-center gap-1 border border-custom-blue-main py-1 px-2 rounded-md relative"
        onClick={() => setFilterOpen(!filterOpen)}
      >
        <MdFilterListAlt className="text-2xl text-custom-blue-main" />
        {filterBy.label}
        <div
          className={`flex flex-col absolute -left-full top-3/4 p-4 shadow-md shadow-neutral-400 bg-white rounded-md z-10 ${
            filterOpen ? "" : "hidden"
          }`}
        >
          {filterOptions.map((option) => (
            <div
              className="flex items-center gap-3 p-3"
              onClick={() => setFilterBy(option)}
              key={option.value}
            >
              <div className="flex items-center justify-center h-1/3 aspect-square rounded-full px-2 border border-black p-1 overflow-hidden">
                <span
                  className={`h-full aspect-square rounded-full ${
                    filterBy?.label === option.label
                      ? "bg-custom-blue-main"
                      : ""
                  }`}
                ></span>
              </div>
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
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
