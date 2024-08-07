import { Search, UsersRound, BarChart, ShoppingCart } from "lucide-react";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { CategoryMenu } from "../components/CategoryMenu";
import { categories } from "../data/home";
import React from "react";

const HeaderLayouts: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex flex-row">
        <div className="flex gap-4 items-center flex-shrink-0">
          <a href="/">
            <img src={logo} alt="logo" className="h-20" />
          </a>
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
      <div className="flex justify-center items-stretch flex-grow-1 overflow-auto bg-[#e7e59d] ">
        <div className="flex  sticky top-0  z-10  ">
          <CategoryMenu categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default HeaderLayouts;
