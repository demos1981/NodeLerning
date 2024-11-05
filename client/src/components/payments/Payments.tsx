import React from "react";

const Payments: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-h-max">
      <h1 className="text-4xl font-bold text-center mb-6">
        Payment Information
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Learn about the payment methods we accept and how to make payments
        securely.
      </p>

      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Accepted Payment Methods
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
            <li>PayPal</li>
            <li>Bank Transfer</li>
            <li>Apple Pay</li>
            <li>Google Pay</li>
          </ul>
        </div>

        <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Payment Security</h2>
          <p className="text-gray-600 mb-2">
            Your payment security is our top priority. We use the latest
            encryption technology to ensure your transactions are secure.
          </p>
          <p className="text-gray-600">
            For added security, we do not store your payment information on our
            servers.
          </p>
        </div>

        <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
          <p className="text-gray-600">
            If you are not satisfied with your purchase, please contact our
            support team within 30 days of your purchase to request a refund.
          </p>
          <p className="text-gray-600 mt-2">
            Refunds are processed within 5-7 business days after approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
