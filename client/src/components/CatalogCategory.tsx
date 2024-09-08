import React, { useState } from "react";

type CatalogCategoryProps = {
  categories: string[];
  onSelect: (category: string) => void;
};
const CatalogCategory: React.FC<CatalogCategoryProps> = ({
  categories,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onSelect(category);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCategory ? selectedCategory : "Select Category"}
        <svg
          className="w-5 h-5 ml-2 -mr-1 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1">
            {categories.map((category) => (
              <li
                key={category}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default CatalogCategory;
