import React from "react";
import minBanner4 from "../assets/minBanner4.jpg";
import minBanner1 from "../assets/minBanner1.jpg";
import minBanner2 from "../assets/minBanner2.jpg";
import minBanner3 from "../assets/minBanner3.jpg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-row bg-base-gray-dark justify-evenly">
        <div className="flex flex-col">
          <div className="max-w-40 max-h-fit mt-4">
            <img src={minBanner4} alt="minBanner4" />
          </div>
          <div className="flex flex-col text-base-gray">
            <div>
              <Link to="/womanscloses">Жіночий одяг</Link>
            </div>
            <div>
              <Link to="/womansblazer">Жіночі піджаки</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="max-w-40 max-h-fit mt-4">
            <img src={minBanner1} alt="minBanner1" />
          </div>
          <div className="flex flex-col text-base-gray">
            <div>
              <Link to="/womansjackets">Жіночі куртки</Link>
            </div>
            <div>
              <Link to="/womansleggings">Жіночі легінси</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="max-w-48 max-h-fit mt-4">
            <img src={minBanner2} alt="minBanner2" />
          </div>
          <div className="flex flex-col text-base-gray">
            <div>
              <Link to="/manscloses">Чоловічій одяг</Link>
            </div>
            <div>
              <Link to="/manstrousers">Чоловічі штани</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="max-w-40 max-h-fit mt-4">
            <img src={minBanner3} alt="minBanner3" />
          </div>
          <div className="flex flex-col text-base-gray">
            <div>
              <Link to="/juniorpants">Junior clothes</Link>
            </div>
            <div>
              <Link to="/juniorssoks">Junior </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-20 bg-base-gray-dark text-base-gray ">
        <p>Develop by Yaremenko Dmitriy</p>
        <NavLink to="/">Home</NavLink>
      </div>
    </>
  );
};

export default Footer;
