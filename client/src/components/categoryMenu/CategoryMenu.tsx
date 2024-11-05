import Button from "../button";
import { NavLink } from "react-router-dom";
import CatalogCategory from "../catalogCategory";
import { catalogCategoriesData } from "data/catalogCategoriesData";

type CategoryMenuProps = {
  categories: string[];
};

function CategoryMenu({ categories }: CategoryMenuProps) {
  const handleSelectCategory = (category: string) => {
    console.log("Selected category:", category);
  };
  return (
    <div className="flex items-center justify-center whitespace-nowrap gap-x-14 transition-transform max-w-screen-2xl h-20 bg-base-gray-dark text-base-gray-light font-semibold">
      <div className="flex flex-row items-center ">
        <CatalogCategory
          categories={catalogCategoriesData}
          onSelect={handleSelectCategory}
        />
        <Button variant="ghost" size="icon"></Button>
      </div>
      {categories.map((category) => (
        <NavLink to={`/${category.toLowerCase()}`} key={category}>
          <Button
            className="flex justify-between "
            variant="ghost"
            key={category}
          >
            {category}
          </Button>
        </NavLink>
      ))}
      <NavLink to="/">HOME</NavLink>
    </div>
  );
}

export default CategoryMenu;
