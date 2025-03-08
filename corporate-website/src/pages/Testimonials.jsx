import React from "react";

const testimonialsData = [
  {
    name: "John Doe",
    feedback:
      "This company transformed our business! Highly professional and great results.",
    position: "CEO, XYZ Ltd.",
  },
  {
    name: "Emily Davis",
    feedback:
      "A dedicated team that understands business needs and delivers beyond expectations.",
    position: "Marketing Director, ABC Corp.",
  },
  {
    name: "Michael Lee",
    feedback:
      "Exceptional service and highly skilled consultants. Would definitely recommend!",
    position: "Founder, Startup Inc.",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        What Our Clients Say
      </h1>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
          >
            <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            <h3 className="text-xl font-semibold mt-4">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
