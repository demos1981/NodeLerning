import React from "react";
import picture1 from "assets/picture1.jpg";
import picture2 from "assets/picture2.jpg";
import picture3 from "assets/picture3.jpg";
import picture4 from "assets/picture4.jpg";
import picture5 from "assets/picture5.jpg";

export const OurBestseller: React.FC = () => {
  return (
    <section className="relative   mx-auto max-w-7xl">
      <div className="flex mt-6 mb-6 justify-center items-center">
        <p className=" text-base-gray-dark">Our Bestseller</p>
      </div>
      <div className="flex flex-row justify-evenly">
        <div className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark">
          <img src={picture1} alt="picture1" />
        </div>
        <div className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark">
          <img src={picture2} alt="picture2" />
        </div>
        <div className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark">
          <img src={picture3} alt="picture3" />
        </div>
        <div className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark">
          <img src={picture4} alt="picture4" />
        </div>
        <div className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark">
          <img src={picture5} alt="picture5" />
        </div>
      </div>
    </section>
  );
};
