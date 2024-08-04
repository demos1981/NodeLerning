import React from "react";
import Button from "./Button";
import { SquareMenu } from "lucide-react";

type CategoryMenuProps = {
  categories: string[];
};
export function CategoryMenu({ categories }: CategoryMenuProps) {
  return (
    <div className="flex items-center justify-center whitespace-nowrap gap-x-14 transition-transform max-w-screen-2xl h-20 bg-base-gray-dark text-base-gray-light font-semibold">
      <div className="flex flex-row items-center ">
        Каталог
        <Button variant="ghost" size="icon">
          <SquareMenu className="cursor-pointer" />
        </Button>
      </div>
      {categories.map((category) => (
        <Button
          className="flex justify-between "
          variant="ghost"
          key={category}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
