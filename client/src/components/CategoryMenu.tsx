import React from "react";
import Button from "./Button";
import { SquareMenu } from "lucide-react";

type CategoryMenuProps = {
  categories: string[];
};
export function CategoryMenu({ categories }: CategoryMenuProps) {
  return (
    <div className="flex items-center whitespace-nowrap gap-x-14 transition-transform w-[max-content] h-20">
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
