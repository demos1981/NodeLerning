import React from "react";
import banner_1 from "assets/banner_1.jpg";
import banner_small_1 from "assets/banner_small_1.jpg";
import banner_small_2 from "assets/banner_small_2.jpg";
import banner_small_3 from "assets/banner_small_3.jpg";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-row items-center justify-center max-w-full max-h-fit  box-border ">
      {/*block1*/}
      <div className="flex  max-w-4xl max-h-fit ">
        <a href="/">
          <img src={banner_1} alt="banner_1" />
        </a>
      </div>
      {/*block2*/}
      <div className="flex flex-col  max-w-screen-sm content-between ">
        <div className="flex flex-row   justify-evenly  ">
          <div className="flex   max-w-44 ">
            <a href="/">
              <img src={banner_small_1} alt="banner_small_1" />
            </a>
          </div>
          <div className="flex  max-w-44  ">
            <a href="/">
              <img src={banner_small_2} alt="banner_small_2" />
            </a>
          </div>
        </div>
        {/*block3*/}
        <div className="flex  pt-2 pl-2">
          <a href="/">
            <img src={banner_small_3} alt="banner_small_3" />
          </a>
        </div>
      </div>
    </section>
  );
};
