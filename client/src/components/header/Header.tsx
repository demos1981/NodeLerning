import { Search, UsersRound, BarChart, ShoppingCart } from "lucide-react";
import logo from "assets/logo.png";
import { Button } from "../index";

import React from "react";
export const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-10 lg:gap-20 justify-between pt-2  mx-4  text-base-gray-dark h-20">
      <div className="flex flex-row">
        <div className="flex gap-4 items-center flex-shrink-0">
          {/* <a href="/">
            <img src={logo} alt="logo" className="h-20" />
          </a> */}
        </div>
        <form className="md:flex hidden gap-4 flex-grow justify-center items-center">
          <div className="flex flex-grow max-w-[600px]">
            <input
              type="search"
              placeholder="Search..."
              className="flex items-center flex-shrink-0 md:gap-2 border-gray-300 rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
            />
            <Button className="py-2 px-4 rounded-r-full border-secondary-border border  flex-shrink-0 outline-none">
              <Search />
            </Button>
          </div>
        </form>
        <div className="flex items-center flex-shrink-0 md:gap-2">
          <Button size="icon" variant="ghost">
            <UsersRound />
          </Button>
          <Button className="md:flex hidden" variant="ghost">
            <BarChart />
          </Button>
          <Button size="icon" variant="ghost">
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </header>
  );
};
