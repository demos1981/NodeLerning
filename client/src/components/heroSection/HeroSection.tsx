import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { slides } from "data";
import { Link } from "react-router-dom";

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample slides data - replace with your own images/content

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative   mx-auto max-w-7xl">
      {/* Slider container */}
      <div className="relative h-144 overflow-hidden ">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`flex-shrink-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold`}
            >
              <div>
                <p className="text-lg font-extralight">{slide.title}</p>
                <p className="mt-5 text-4xl">{slide.description}</p>
                <p className=" mt-5 text-lg font-extralight">{slide.sale}</p>
                <div className=" flex flex-row justify-center h-10 w-32  bg-base-gray-dark text-secondary rounded-md items-center text-sm mt-14">
                  <div>
                    <Link
                      to={slide.link}
                      className="flex flex-row items-center "
                    >
                      Shop Now
                      <MoveRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <img src={slide.image} alt={slide.name} />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-primary-hover transition-colors"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-primary-hover  transition-colors"
        >
          <ChevronRight size={48} />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
