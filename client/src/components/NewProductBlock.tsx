import React from "react";
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";
import picture4 from "../assets/picture4.jpg";
import picture5 from "../assets/picture5.jpg";

const NewProductBlock: React.FC = () => {
  return (
    <div className="flex flex-col justify-between mt-2 ml-4">
      <div className="flex flex-row">
        <div className="max-w-52 max-h-fit mr-2">
          <img src={picture1} alt="picture1"></img>
        </div>
        <div className="max-w-52 max-h-fit mr-2">
          <img src={picture2} alt="picture2"></img>
        </div>
        <div className="max-w-52 max-h-fit mr-2">
          <img src={picture3} alt="picture3"></img>
        </div>
        <div className="max-w-52 max-h-fit mr-2">
          <img src={picture4} alt="picture4"></img>
        </div>
        <div className="max-w-52 max-h-fit mr-2">
          <img src={picture5} alt="picture5"></img>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="max-w-52 max-h-fit mr-2">
          <img src={picture1} alt="picture1"></img>
        </div>
        <div className="max-w-52 max-h-fit mr-2">
          <img src={picture2} alt="picture2"></img>
        </div>
        <div className="max-w-52 max-h-fit mr-2">
          <img src={picture3} alt="picture3"></img>
        </div>
        <div className="max-w-52 max-h-fit mr-2">
          <img src={picture4} alt="picture4"></img>
        </div>
        <div className="max-w-52 max-h-fit mr-2">
          <img src={picture5} alt="picture5"></img>
        </div>
      </div>
    </div>
  );
};

export default NewProductBlock;
