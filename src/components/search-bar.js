import Search from "./svgs/search";

const SearchBar = () => {
  return (
    <div className="min-[767px]:min-w-[21rem] h-12 rounded-3xl border shadow-md hover:shadow-lg">
      <div className="rounded-3xl h-full pl-2 flex items-center">
        <button className="rounded-l-3xl  px-4 text-sm font-semibold text-[#222222]">
          Anywhere
        </button>

        <button className=" px-4 text-sm border-l border-r font-semibold text-[#222222]">
          Any week
        </button>

        <button className="rounded-r-3xl pl-4 pr-2 inline-flex items-center space-x-2">
          <span className="text-sm text-[#818181]">Add guests</span>
          <span className="h-8 w-8 bg-[#F93457] flex justify-center items-center rounded-full">
            <Search width="15" height="15" fill="white" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
