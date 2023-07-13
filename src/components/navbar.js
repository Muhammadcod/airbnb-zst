import Airbnb from "./svgs/airbnb";
import World from "./svgs/world";
import Menu from "./svgs/menu";
import User from "./svgs/user";
import SearchBar from "./search-bar";
import AirbnbLogo from "./svgs/airbnb-logo";
import Search from "./svgs/search";
import FilterIcon from "./svgs/filter-icon";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 h-20 lg:border-b bg-white">
      <div className="mx-6  flex min-[744px]:hidden justify-center md:justify-center items-center h-full">
        <div className="w-full border rounded-full shadow-md hover:shadow-lg flex items-center">
          <div className="flex-1 space-x-2 flex items-center py-2">
            <Search width="25" height="25" fill="black" className="mx-3" />
            <div className="">
              <h2 className="text-sm font-semibold text-[#222222]">Anywhere</h2>
              <div className="flex">
                <p className="text-xs mb-0 font-normal text-[#222222]">
                  Any week
                </p>{" "}
                <p className="text-xs mb-0 font-normal text-[#222222]">
                  . Add guests
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="h-8 w-8 hover:bg-gray-100 flex justify-center items-center border mr-2.5 rounded-full">
              <FilterIcon fill="black" width="12" height="12" />
            </span>
          </div>
        </div>
      </div>
      <div className="mx-6 md:mx-10 min-[1440px]:mx-20 hidden min-[744px]:flex justify-center md:justify-between items-center h-full">
        <div className="min-[949px]:flex-1 min-[949px]:w-[8.75rem] mr-5 hidden min-[744px]:block">
          <span className="hidden min-[1128px]:block">
            <Airbnb className="text-[#F93457]" />
          </span>
          <span className="min-[1128px]:hidden">
            <AirbnbLogo className="text-[#F93457] " />
          </span>
        </div>
        <SearchBar />
        <div className="flex-1 w-[8.75rem]">
          <div className="space-x-2 items-center hidden min-[744px]:flex justify-end">
            <div className="flex -space-x-1 items-center">
              <div className="px-4 py-2 text-sm hover:bg-gray-100  font-semibold rounded-3xl">
                Airbnb your home
              </div>
              <span className="h-12 w-12 hover:bg-gray-100 flex justify-center items-center rounded-full">
                <World />
              </span>
            </div>
            <span className="pl-4 py-1.5 pr-1.5 border shadow-md hover:shadow-lg space-x-2 flex justify-center items-center rounded-full">
              <Menu fill="gray" />
              <User fill="gray" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
