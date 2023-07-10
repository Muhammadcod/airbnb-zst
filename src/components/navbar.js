import Airbnb from "./svgs/airbnb";
import World from "./svgs/world";
import Menu from "./svgs/menu";
import User from "./svgs/user";
import SearchBar from "./search-bar";
import AirbnbLogo from "./svgs/airbnb-logo";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 h-20 lg:border-b bg-white">
      <div className="mx-6 md:mx-10 min-[1440px]:mx-20 flex justify-center md:justify-between items-center h-full">
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
          <div className="space-x-2 items-center hidden md:flex justify-end">
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
