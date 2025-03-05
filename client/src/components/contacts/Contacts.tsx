import React, { useState } from "react";

export const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Here, you would typically handle the form submission (e.g., send it to a server)
  };

  return (
    <section className="container mx-auto px-4 ">
      <div>
        <img src="/assets/page_contact.jpg" alt="page_contact"></img>
      </div>
      <h2 className="text-2xl font-semibold text-center mb-6 mt-10">
        GET IN TOUCH WITH US
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-base-gray-dark text-base-white font-bold py-2 px-4 hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
