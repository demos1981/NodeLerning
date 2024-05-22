import React from "react";
import Button from "./Button";

type CategoryMenuProps = {
  categories: string[];
};
export function CategoryMenu({ categories }: CategoryMenuProps) {
  return (
    <div className="flex whitespace-nowrap gap-x-14 transition-transform w-[max-content] bg-slate-400 ">
      {categories.map((category) => (
        <Button className="flex justify-between" variant="light" key={category}>
          {category}
        </Button>
      ))}
    </div>
  );
}
