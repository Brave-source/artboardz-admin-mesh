import { useState } from "react";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useWindowSize from "@/hook/window-size";

const SearchBar = () => {
  const [filterIsShown, setFilterIsShown] = useState(false);
  const size = useWindowSize();
  const showFilter = size.width > 640 ? true : filterIsShown;

  const toggleFilterHandler = () => {
    setFilterIsShown((oldState) => !oldState);
  };
  return (
    <form className="border border-white rounded-md grid grid-cols-search gap-3 p-2 sm:p-3 w-11/12 mx-auto items-center text-white font-Montserrat relative">
      <label htmlFor="search" className="sr-only">
        Search bar
      </label>
      <div className="sm:hidden" onClick={toggleFilterHandler}>
        <FunnelIcon className="w-5" />
      </div>
      {showFilter && (
        <div className="absolute bg-primary-color top-full mt-1 border border-white rounded-md p-2 w-[150px] flex flex-col gap-y-2 gap-x-3 sm:bg-transparent sm:border-none sm:relative sm:top-0 sm:flex-row sm:p-0 sm:w-fit">
          <div className="flex gap-1">
            <FunnelIcon className="w-5 hidden sm:block" />
            <p>Location</p>
          </div>
          <div className="flex gap-1">
            <FunnelIcon className="w-5 hidden sm:block" />
            <p>Artist</p>
          </div>
        </div>
      )}
      <input
        type="text"
        name="search"
        id="search"
        className="bg-transparent outline-none"
      />
      <MagnifyingGlassIcon className="w-5" />
    </form>
  );
};
export default SearchBar;
