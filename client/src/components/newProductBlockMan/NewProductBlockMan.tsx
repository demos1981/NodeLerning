import React from "react";
import picture1 from "assets/picture1.jpg";
import picture2 from "assets/picture2.jpg";
import picture3 from "assets/picture3.jpg";
import picture4 from "assets/picture4.jpg";
import picture5 from "assets/picture5.jpg";

export const NewProductBlockMan: React.FC = () => {
  return (
    <section className=" flex flex-col   max-h-fit  box-border   max-w-full">
      <div className="flex ml-14">
        <p className="flex  ml-4 mt-6 mb-2 justify-center w-48 h-12 items-center bg-base-gray-dark text-base-gray-light font-semibold rounded-lg">
          NEW ARRIVAL MAN
        </p>
      </div>
      <div className="flex flex-row justify-evenly ">
        <div className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark">
          <img src={picture1} alt="picture1"></img>
        </div>
        <div className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark">
          <img src={picture2} alt="picture2"></img>
        </div>
        <div className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark">
          <img src={picture3} alt="picture3"></img>
        </div>
        <div className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark">
          <img src={picture4} alt="picture4"></img>
        </div>
        <div className="max-w-52 max-h-fit border-2 rounded-lg border-base-gray-dark">
          <img src={picture5} alt="picture5"></img>
        </div>
      </div>
    </section>
  );
};
