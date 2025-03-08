import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">About Us</h1>
      <p className="text-gray-700 text-lg mt-4 text-center">
        We are a consulting firm dedicated to delivering top-tier business
        solutions to clients worldwide.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            Our mission is to provide innovative strategies that help businesses
            grow and achieve their goals.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            We aim to be the leading consultancy firm, known for our dedication,
            expertise, and success-driven solutions.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-500">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 mt-2">
            With years of experience, a skilled team, and data-driven
            strategies, we help businesses succeed efficiently.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-center text-blue-600">
          Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {["Alice Johnson", "Mark Smith", "Sarah Williams"].map(
            (name, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-500">Senior Consultant</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
