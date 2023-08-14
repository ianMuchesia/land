import { Icon } from "@iconify/react/dist/iconify.js";
import React, { Dispatch, SetStateAction } from "react";
interface Props {
	setFilter: Dispatch<
	  SetStateAction<{
		location: string;
		sort: string;
		price_min: number;
		price_max: string;
		size_max: string;
		size_min: string;
		search: string;
	  }>
	>;
	filter: {
	  location: string;
	  sort: string;
	  price_min: number;
	  price_max: string;
	  size_max: string;
	  size_min: string;
	  search: string;
	};
  }

const Filter = ({ setFilter, filter }: Props) => {
	const handleChange = (
		e:
		  | React.ChangeEvent<HTMLInputElement>
		  | React.ChangeEvent<HTMLSelectElement>
	  ) => {
		setFilter((prevFilter) => ({
		  ...prevFilter,
		  [e.target.name]: e.target.value,
		}));
	  };
  return (
    <div className="mt-24 flex items-center justify-center">
      <div className="  w-full md:w-2/3 shadow p-5 rounded-lg bg-[#fafafa]">
        <div className="relative">
          <div className="absolute flex items-center ml-2 h-full">
		  <Icon icon="iconamoon:search-thin" className="w-4 h-4 fill-current text-primary-gray-dark"/>
         
          </div>

          <input
            type="text"
            placeholder="Search by title or name..."
			name="search"
			onChange={handleChange}
			value={filter.search}
            className="px-8 border-2 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="font-medium">Filters</p>

          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
            Reset Filter
          </button>
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <div className="flex flex-col">
              <label
                htmlFor="disabled-range"
                className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
              >
				 
                Selected Range: Ksh.{" "}
                {filter.price_min.toLocaleString()}
              
           
              </label>

              <input
                id="disabled-range"
                type="range"
                min={50000}
                max={1500000}
				name="price_min"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				value={filter.price_min}
                onChange={handleChange}
             
              />
			 
            </div>
            <select
			         name="sort"
			className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
			 onChange={handleChange}>
              <option value="">--Sort By Price--</option>
              <option value="price">Price (lowest first)</option>
              <option value="-price">Price (highest first)</option>
            </select>

            <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
			name="location"  onChange={handleChange}
			>
              <option value="">-Choose Location-</option>
              <option value="Likoni">Likoni</option>
              <option value="Nyali">Nyali</option>
            </select>

            <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" name="sort" onChange={handleChange}>
              <option value="">--Sort By Area--</option>
              <option value="area">Area (lowest first)</option>
              <option value="-area">Area (highest first)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
