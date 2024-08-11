import Button from "./Button";
import { SquareMenu } from "lucide-react";
import { Link } from "react-router-dom";

type CategoryMenuProps = {
  categories: string[];
};

export function CategoryMenu({ categories }: CategoryMenuProps) {
  return (
    <div className="flex items-center justify-center whitespace-nowrap gap-x-14 transition-transform max-w-screen-2xl h-20 bg-base-gray-dark text-base-gray-light font-semibold">
      <div className="flex flex-row items-center ">
        CATALOGUE
        <Button variant="ghost" size="icon">
          <SquareMenu className="cursor-pointer" />
        </Button>
      </div>
      {categories.map((category) => (
        <Link to={`/${category.toLowerCase()}`} key={category}>
          <Button
            className="flex justify-between "
            variant="ghost"
            key={category}
          >
            {category}
          </Button>
        </Link>
      ))}
    </div>
  );
}
