import { Link } from "react-router-dom";

export default function ErrorPage({ code, description, image }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <img src={image} alt="error" className="w-72 mb-6" />

      <h1 className="text-8xl font-bold text-hijau">{code}</h1>

      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        {description}
      </h2>

      <p className="mt-2 text-gray-500">Something went wrong.</p>

      <Link
        to="/"
        className="mt-6 rounded-xl bg-hijau px-6 py-3 text-white shadow-lg"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
