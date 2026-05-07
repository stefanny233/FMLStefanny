import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <h1 className="text-8xl font-bold text-hijau">404</h1>

      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-xl bg-hijau px-6 py-3 text-white shadow-lg transition hover:scale-105"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
