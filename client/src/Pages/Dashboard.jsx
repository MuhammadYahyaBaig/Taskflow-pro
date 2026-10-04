import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Clock3,
  ListTodo,
  Activity,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Dashboard() {

  const { user } = useAuth();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: total,
      icon: ListTodo,
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2,
      bg: "bg-green-100",
      text: "text-green-600",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },
    {
      title: "In Progress",
      value: inProgress,
      icon: Activity,
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div>
        <p className="text-gray-500">
          Welcome back,
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-1">
          {user?.name} 👋
        </h1>

        <p className="mt-3 text-gray-600">
          Here's what's happening with your tasks today.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        {stats.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-lg border"
            >

              <div
                className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}
              >
                <Icon className={item.text} />
              </div>

              <p className="mt-5 text-gray-500">
                {item.title}
              </p>

              <h2 className="mt-1 text-3xl font-bold">
                {item.value}
              </h2>

            </div>
          );
        })}

      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-lg border p-7">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              Recent Tasks
            </h2>

            <p className="text-gray-500 mt-1">
              Your latest work
            </p>
          </div>

          <Link
            to="/tasks"
            className="text-blue-600 font-semibold flex items-center gap-2"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="mt-7 space-y-4">

          {tasks.slice(0, 5).map((task) => (
            <div
              key={task.id}
              className="border rounded-xl p-4 flex items-center justify-between"
            >

              <div>
                <h3 className="font-bold">
                  {task.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {task.dueDate || "No deadline"}
                </p>
              </div>

              <span className="text-sm font-semibold text-blue-600">
                {task.status}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Dashboard;