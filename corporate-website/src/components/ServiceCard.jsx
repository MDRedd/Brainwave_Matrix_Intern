export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:-translate-y-2 transition duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
}
