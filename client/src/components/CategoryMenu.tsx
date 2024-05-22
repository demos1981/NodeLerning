import React from "react";
import Button from "./Button";

type CategoryMenuProps = {
  categories: string[];
};
export function CategoryMenu({ categories }: CategoryMenuProps) {
  return (
    <div className="flex whitespace-nowrap gap-x-14 transition-transform w-[max-content]">
      {categories.map((category) => (
        <Button className="flex justify-between" variant="ghost" key={category}>
          {category}
        </Button>
      ))}
    </div>
  );
}
