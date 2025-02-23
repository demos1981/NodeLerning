import React from "react";
import { NavLink } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <>
      <section className=" flex flex-row relative justify-center  mx-auto max-w-7xl">
        <div className=" w-96 mr-11">
          <h1 className="text-4xl font-bold mb-10 mt-36">ABOUT US</h1>
          <p>
            We are a company that creates style and comfort in every detail. Our
            mission is to help people express themselves through high-quality,
            functional and stylish bags.
          </p>
          <p>
            Our assortment includes bags for any occasion: classic and casual
            models, backpacks, travel bags, clutches, and much more. We
            carefully select materials and pay attention to every seam so that
            you get only the best.
          </p>
          <p>
            We believe that a bag is not just an accessory, but a part of your
            image and a reflection of your style. That is why we always follow
            the trends, offering you modern design, ergonomics and durability.
          </p>
          <p>
            Choosing us, you get not just a bag - you get a reliable companion
            in your everyday life!
          </p>
          <button
            type="button"
            className="mt-10 w-32 h-10 bg-base-darkGreen text-base-white rounded-lg shadow-lg shadow-base-gray-dark hover:shadow-md"
          >
            <NavLink to="/">Back to Shop</NavLink>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mt-10 mb-10 ">
            <img
              className="rounded-xl"
              alt="photo_bag1"
              src="/assets/about_photo1.jpg"
            ></img>
          </div>
          <div>
            <img
              className="rounded-xl"
              alt="photo_bag2"
              src="/assets/about_photo2.jpg"
            ></img>
          </div>
          <div className="absolute w-52 h-52  rounded-xl top-56 right-20 bg-base-white"></div>
          <div className="absolute w-52 h-52 rounded-xl top-60 right-16">
            <img
              className="rounded-xl"
              alt="photo_bag4"
              src="/assets/about_photo3.jpg"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};
