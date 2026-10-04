import { Link } from "react-router-dom";

function Button() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-blue-600 rounded-3xl px-8 py-14 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to Get More Done?
        </h2>

        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Start organizing your tasks and projects with TaskFlow Pro.
        </p>

        <Link
          to="/register"
          className="inline-block mt-7 bg-white text-blue-600 px-7 py-3 rounded-lg font-bold hover:bg-blue-50"
        >
          Start Now
        </Link>

      </div>
    </section>
  );
}

export default Button;