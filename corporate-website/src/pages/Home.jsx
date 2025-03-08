import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-blue-700 text-white py-24 px-6 mt-14 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in">
            Empowering Businesses with Expert Consulting
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">
            Helping businesses grow, innovate, and succeed with tailored
            solutions.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-block bg-yellow-400 text-purple-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "10+", subtitle: "Years in Business" },
            { title: "500+", subtitle: "Clients Served" },
            { title: "95%", subtitle: "Client Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-lg transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-5xl font-extrabold text-purple-700">
                {stat.title}
              </h3>
              <p className="text-gray-700 mt-2 text-lg">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center text-purple-700">
          Our Key Services
        </h2>
        <p className="text-gray-700 text-lg mt-2 text-center">
          Expert solutions for business growth.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Market Research",
              description:
                "Helping you understand your industry and audience better.",
            },
            {
              title: "Business Strategy",
              description:
                "Developing customized strategies for long-term success.",
            },
            {
              title: "Digital Transformation",
              description:
                "Implementing cutting-edge technology for efficiency.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-xl rounded-lg text-center border-l-4 border-yellow-400 transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-purple-700">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-block bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-purple-700">
            What Our Clients Say
          </h2>
          <p className="text-gray-700 text-lg mt-2 text-center">
            Real stories from satisfied clients.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "“This company transformed our business with exceptional insights and strategy!”",
                name: "Sarah Johnson",
              },
              {
                quote:
                  "“Highly professional team! They provided innovative solutions that boosted our growth.”",
                name: "James Smith",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white shadow-xl rounded-lg border-l-4 border-yellow-400 transition duration-300 transform hover:scale-105"
              >
                <p className="text-gray-700 italic">“{testimonial.quote}”</p>
                <p className="mt-4 text-purple-700 font-semibold">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="inline-block bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105"
            >
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-16 text-center px-6">
        <h2 className="text-4xl font-extrabold">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-lg mt-2 opacity-90">
          Contact us today for a consultation and let's create a strategy for
          success.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block bg-yellow-400 text-purple-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
};

export default Home;
