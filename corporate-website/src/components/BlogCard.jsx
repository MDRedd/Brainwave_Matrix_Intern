export default function BlogCard({ title, summary, date }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{summary}</p>
      <p className="mt-4 text-sm text-gray-500">{date}</p>
    </div>
  );
}
