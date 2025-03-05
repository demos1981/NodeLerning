import React from "react";

export const Delivery: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <img src="/assets/delivery.jpg" alt="delivery" className="mb-6"></img>
      <h1 className="text-4xl font-bold text-center mb-6">
        Delivery Information
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        We are committed to delivering your orders quickly and efficiently.
        Heres what you need to know about our delivery process.
      </p>

      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Delivery Options</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Standard Delivery - 3 to 5 business days</li>
            <li>Express Delivery - 1 to 2 business days</li>
            <li>Overnight Delivery - Next business day</li>
          </ul>
        </div>

        <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Shipping Costs</h2>
          <p className="text-gray-600 mb-2">
            The cost of shipping is calculated based on the delivery option you
            choose and the weight of your order.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Standard Delivery: Free for orders over $50</li>
            <li>Express Delivery: $10 flat rate</li>
            <li>Overnight Delivery: $25 flat rate</li>
          </ul>
        </div>

        <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Tracking Your Order</h2>
          <p className="text-gray-600">
            Once your order has been shipped, you will receive a tracking number
            via email. Use this number to check the status of your delivery.
          </p>
        </div>
      </div>
    </div>
  );
};
