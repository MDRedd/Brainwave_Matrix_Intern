import React, { useState } from "react";

const faqs = [
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via email at support@company.com or call us at (123) 456-7890.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer consulting, market research, digital marketing, and financial planning services.",
  },
  {
    question: "How long does it take to get a response?",
    answer: "We usually respond within 24 hours on business days.",
  },
];

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Contact Us
      </h1>
      <p className="text-gray-700 text-lg mt-4 text-center">
        Have questions? Get in touch with us today.
      </p>

      <div className="mt-10 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-500">
          Send Us a Message
        </h2>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-center text-blue-600">
          Frequently Asked Questions
        </h2>
        <div className="mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center font-medium text-lg text-blue-500 hover:text-blue-700"
              >
                {faq.question}
                <span className="text-xl">{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
