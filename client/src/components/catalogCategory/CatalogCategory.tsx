import React, { useState } from "react";
import { SquareMenu } from "lucide-react";
import { NavLink } from "react-router-dom";
type CatalogCategoryProps = {
  categories: string[];
  onSelect: (category: string) => void;
};
export const CatalogCategory: React.FC<CatalogCategoryProps> = ({
  categories,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    // setSelectedCategory(category);
    onSelect(category);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {"CATALOGUE"}
        {/* {selectedCategory ? selectedCategory : "Catalogue"} */}
        <SquareMenu className="cursor-pointer ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-5 w-56 bg-white border border-gray-300 rounded-md shadow-lg ">
          <ul className="py-2">
            {categories.map((category) => (
              <NavLink to={`/${category.toLowerCase()}`} key={category}>
                <li
                  key={category}
                  className="px-4 py-2 text-sm text-base-gray-dark hover:bg-base-gray-dark hover:text-base-gray-light cursor-pointer"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
