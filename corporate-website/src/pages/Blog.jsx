import React from "react";

const blogPosts = [
  {
    title: "The Future of Business Consulting",
    description:
      "Explore upcoming trends and innovations in the consulting industry.",
    date: "March 1, 2025",
    author: "Alice Johnson",
    readTime: "5 min read",
  },
  {
    title: "How Market Research Can Drive Business Success",
    description:
      "Learn the impact of data-driven decision-making on business growth.",
    date: "February 20, 2025",
    author: "Mark Smith",
    readTime: "7 min read",
  },
  {
    title: "Top Financial Strategies for Startups",
    description: "A guide to financial planning for new businesses.",
    date: "February 10, 2025",
    author: "Sarah Williams",
    readTime: "6 min read",
  },
];

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Latest Articles
      </h1>
      <p className="text-gray-700 text-lg mt-4 text-center">
        Stay updated with insights and strategies from industry experts.
      </p>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-500 hover:text-blue-700 transition duration-200 cursor-pointer">
              {post.title}
            </h2>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
              <p>By {post.author}</p>
              <p>{post.readTime}</p>
            </div>
            <p className="text-sm text-gray-400 mt-2">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
