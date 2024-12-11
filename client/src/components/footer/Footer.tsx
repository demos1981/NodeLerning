import React from "react";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { WOMENS_ROUTE } from "utils/consts";
import { MENS_ROUTE } from "utils/consts";
import { CHILDRENS_ROUTE } from "utils/consts";

export const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-row bg-base-gray-dark justify-evenly">
        <div className="flex flex-col">
          <div className="flex flex-col text-base-gray">
            <div>
              <NavLink to={WOMENS_ROUTE}>Womens clothes</NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col text-base-gray">
            <div>
              <NavLink to={MENS_ROUTE}>Mens clothes</NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
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
