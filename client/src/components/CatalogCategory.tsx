import React, { useState } from "react";
import { SquareMenu } from "lucide-react";
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
        {selectedCategory ? selectedCategory : "Catalogue"}
        <SquareMenu className="cursor-pointer ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1">
            {categories.map((category) => (
              <li
                key={category}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-base-gray-dark cursor-pointer"
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
