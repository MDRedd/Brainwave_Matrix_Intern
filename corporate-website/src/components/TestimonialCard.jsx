export default function TestimonialCard({ name, feedback, company }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <p className="text-gray-700 italic">"{feedback}"</p>
      <h3 className="text-lg font-bold mt-4">{name}</h3>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  );
}
