import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <div>
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm">
              Simple. Powerful. Productive.
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Manage Your Work.
              <span className="text-blue-600 block">
                Achieve More.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              TaskFlow Pro helps individuals and teams organize tasks,
              manage projects, collaborate efficiently, and stay focused
              on what matters.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/register"
                className="bg-blue-600 text-white px-7 py-3.5 rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/features"
                className="bg-white border border-gray-300 text-gray-800 px-7 py-3.5 rounded-lg font-bold hover:border-blue-500 hover:text-blue-600"
              >
                Explore Features
              </Link>

            </div>

            <div className="mt-8 space-y-3 text-gray-600">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="text-blue-600" size={20} />
                Easy task management
              </p>

              <p className="flex items-center gap-2">
                <CheckCircle2 className="text-blue-600" size={20} />
                Powerful productivity tools
              </p>

              <p className="flex items-center gap-2">
                <CheckCircle2 className="text-blue-600" size={20} />
                Designed for individuals and teams
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">

            <div className="bg-gray-50 rounded-2xl p-5">

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 text-sm">
                    Dashboard
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900">
                    Good morning 👋
                  </h2>
                </div>

                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  Y
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-gray-500 text-sm">
                    Total Tasks
                  </p>

                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    24
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-gray-500 text-sm">
                    Completed
                  </p>

                  <p className="text-3xl font-bold text-blue-600 mt-2">
                    12
                  </p>
                </div>

              </div>

              <div className="mt-5 bg-white p-5 rounded-xl shadow-sm">

                <div className="flex justify-between mb-4">
                  <h3 className="font-bold">
                    Recent Tasks
                  </h3>

                  <span className="text-blue-600 text-sm">
                    View All
                  </span>
                </div>

                <div className="space-y-3">

                  <div className="flex justify-between border-b pb-3">
                    <span>Website Design</span>
                    <span className="text-blue-600 text-sm">
                      In Progress
                    </span>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span>Dashboard</span>
                    <span className="text-yellow-600 text-sm">
                      Pending
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Contact Page</span>
                    <span className="text-green-600 text-sm">
                      Completed
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;