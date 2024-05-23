import React from "react";
import minBanner1 from "../assets/minBanner1.jpg";
import minBanner2 from "../assets/minBanner2.jpg";
import minBanner3 from "../assets/minBanner3.jpg";

const NewCategoryBlock: React.FC = () => {
  return (
    <div className="flex flex-row justify-between mt-2 ml-4">
      <div className="max-w-xs max-h-fit mr-2">
        <img src={minBanner1} alt="minBanner"></img>
        <p className="">New jackets</p>
      </div>
      <div className="max-w-xs max-h-fit mr-2">
        <img src={minBanner2} alt="minBanner"></img>
        <p className="">New jersey</p>
      </div>
      <div className="max-w-xs max-h-fit mr-2">
        <img src={minBanner3} alt="minBanner"></img>
        <p className="">New junior jersey</p>
      </div>
    </div>
  );
};

export default NewCategoryBlock;
