import React from "react";

const servicesData = [
  {
    title: "Business Consulting",
    description: "Expert advice to help you achieve your business goals.",
  },
  {
    title: "Market Analysis",
    description:
      "In-depth market research to keep you ahead of the competition.",
  },
  {
    title: "Financial Planning",
    description: "Strategic financial solutions to optimize your growth.",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, social media, and paid ads to boost your online presence.",
  },
  {
    title: "Brand Strategy",
    description: "Unique branding solutions to help you stand out.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Streamlining operations for maximum efficiency and productivity.",
  },
];

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Our Services
      </h1>
      <p className="text-gray-700 text-lg mt-4 text-center">
        We offer a range of professional consulting services tailored to your
        needs.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {servicesData.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-500">
              {service.title}
            </h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
