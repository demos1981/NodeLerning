import React from "react";
import banner_1 from "../assets/banner_1.jpg";
import banner_small_1 from "../assets/banner_small_1.jpg";
import banner_small_2 from "../assets/banner_small_2.jpg";
import banner_small_3 from "../assets/banner_small_3.jpg";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center pt-1 max-w-screen-lg ">
      {/*block1*/}
      <div className="flex  items-start justify-start  box-border max-w-4xl max-h-fit ">
        <a href="/">
          <img src={banner_1} alt="banner_1" />
        </a>
      </div>
      {/*block2*/}
      <div className="flex flex-col max-w-xl max-h-fit box-border">
        <div className="flex flex-row justify-between">
          <div className="flex  items-center flex-shrink-0 box-border  max-w-48 max-h-fit mr-6">
            <a href="/">
              <img src={banner_small_1} alt="banner_small_1" />
            </a>
          </div>
          <div className="flex items-center flex-shrink-0 box-border  max-w-48 max-h-fit mr-6">
            <a href="/">
              <img src={banner_small_2} alt="banner_small_2" />
            </a>
          </div>
        </div>
        {/*block3*/}
        <div className="flex items-center flex-shrink-0 box-border  max-w-128 max-h-fit mt-3">
          <a href="/">
            <img src={banner_small_3} alt="banner_small_3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
