import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-8xl md:text-9xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-gray-600 text-lg">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;