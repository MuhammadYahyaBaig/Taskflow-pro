import { useState } from "react";

import {
  CheckCircle2,
  Users,
  BarChart3,
  CalendarCheck2,
  Bell,
  ShieldCheck,
  Zap,
  LayoutDashboard,
} from "lucide-react";

function Features() {

  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: CheckCircle2,
      title: "Smart Task Management",
      description:
        "Efficiently manage your tasks with our intuitive task management system.",
      details:
        "Create, organize, prioritize, and track your tasks from one workspace.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Collaborate seamlessly with your team and work together efficiently.",
      details:
        "Assign tasks, share project updates, and keep everyone aligned.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description:
        "Monitor project progress and understand your work at a glance.",
      details:
        "Track completed, pending, and ongoing tasks to understand project status.",
    },
    {
      icon: CalendarCheck2,
      title: "Project Planning",
      description:
        "Plan deadlines, organize milestones, and keep projects on schedule.",
      details:
        "Break projects into manageable tasks and organize important milestones.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Stay informed about tasks, deadlines, updates, and project activities.",
      details:
        "Receive timely updates about deadlines, assignments and project changes.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description:
        "Keep your project information protected with a reliable architecture.",
      details:
        "TaskFlow Pro is designed with security and reliability in mind.",
    },
    {
      icon: Zap,
      title: "Fast & Effective",
      description:
        "Enjoy a responsive workflow designed to improve productivity.",
      details:
        "Move through your tasks quickly with a clean and responsive interface.",
    },
    {
      icon: LayoutDashboard,
      title: "Powerful Dashboard",
      description:
        "Get an overview of tasks, projects, deadlines, and productivity.",
      details:
        "View important tasks, active projects and upcoming deadlines in one place.",
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Powerful Features for{" "}
          <span className="text-blue-600">
            Better Productivity
          </span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
          TaskFlow Pro gives individuals and teams the tools they need
          to organize tasks, collaborate effectively, track progress,
          and manage projects with confidence.
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {features.map((feature, index) => {

            const Icon = feature.icon;
            const isActive = activeFeature === index;

            return (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition"
              >

                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                <h2 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-7">
                  {feature.description}
                </p>

                {isActive && (
                  <div className="mt-5 pt-5 border-t">
                    <p className="text-sm text-gray-600 leading-6">
                      {feature.details}
                    </p>
                  </div>
                )}

                <button
                  onClick={() =>
                    setActiveFeature(isActive ? null : index)
                  }
                  className="mt-5 text-blue-600 font-semibold hover:text-blue-800"
                >
                  {isActive ? "Show Less" : "Learn More"}
                </button>

              </div>
            );
          })}

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-blue-600 rounded-3xl px-8 py-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Everything You Need to Stay Organized
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-blue-100 text-lg">
            From task management to collaboration and project tracking,
            TaskFlow Pro brings your workflow together.
          </p>

        </div>

      </section>
    </>
  );
}

export default Features;