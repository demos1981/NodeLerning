import React from "react";

import minBanner1 from "../../assets/minBanner1.jpg";
import minBanner2 from "../../assets/minBanner2.jpg";
import minBanner3 from "../../assets/minBanner3.jpg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { WOMENS_ROUTE } from "../../utils/consts";
import { MENS_ROUTE } from "../../utils/consts";
import { CHILDRENS_ROUTE } from "../../utils/consts";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-row bg-base-gray-dark justify-evenly">
        <div className="flex flex-col">
          <div className="max-w-40 max-h-fit mt-4">
            <img src={minBanner1} alt="minBanner1" />
          </div>
          <div className="flex flex-col text-base-gray">
            <div>
              <NavLink to={WOMENS_ROUTE}>Жіночий одяг</NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="max-w-48 max-h-fit mt-4">
            <img src={minBanner2} alt="minBanner2" />
          </div>
          <div className="flex flex-col text-base-gray">
            <div>
              <NavLink to={MENS_ROUTE}>Чоловічій одяг</NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="max-w-40 max-h-fit mt-4">
            <img src={minBanner3} alt="minBanner3" />
          </div>
          <div className="flex flex-col text-base-gray">
            <div>
              <Link to={CHILDRENS_ROUTE}>Children clothes</Link>
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
