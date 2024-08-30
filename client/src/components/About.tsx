import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 h-fit">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-700 text-center mb-4">
        Welcome to our website! We are a passionate team dedicated to providing
        the best service possible.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
        <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to deliver quality products and services that exceed
            our customers' expectations.
          </p>
        </div>
        <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            We envision a world where our innovations help improve the lives of
            our customers.
          </p>
        </div>
        <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p className="text-gray-600">
            Integrity, innovation, and customer focus are at the core of
            everything we do.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
        <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to deliver quality products and services that exceed
            our customers' expectations.
          </p>
        </div>
        <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            We envision a world where our innovations help improve the lives of
            our customers.
          </p>
        </div>
        <div className="max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <p className="text-gray-600">
            Integrity, innovation, and customer focus are at the core of
            everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
