import React from "react";
import minBanner1 from "assets/minBanner1.jpg";
import minBanner2 from "assets/minBanner2.jpg";
import minBanner3 from "assets/minBanner3.jpg";

const NewCategoryBlock: React.FC = () => {
  return (
    <section className="flex flex-row     pt-6 pb-6 justify-evenly">
      <div className="mr-2">
        <p className="">Нові жакети</p>
        <img className="max-w-60 " src={minBanner1} alt="minBanner"></img>
      </div>
      <div className="mr-2">
        <p className="">Нові светри</p>
        <img className="max-w-72 " src={minBanner2} alt="minBanner"></img>
      </div>
      <div className="mr-2">
        <p className="">Нові світшоти</p>
        <img className="max-w-60 " src={minBanner3} alt="minBanner"></img>
      </div>
    </section>
  );
};

export default NewCategoryBlock;
