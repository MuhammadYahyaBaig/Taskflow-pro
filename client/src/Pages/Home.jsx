import Hero from "../components/Hero";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";

import {
  CheckCircle2,
  Users,
  BarChart3,
  CalendarCheck2,
} from "lucide-react";

function Home() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Smart Task Management",
      description:
        "Create, organize, prioritize and track tasks from one simple workspace.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together with your team and keep everyone aligned.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description:
        "Monitor completed, pending and ongoing work at a glance.",
    },
    {
      icon: CalendarCheck2,
      title: "Project Planning",
      description:
        "Plan deadlines, milestones and projects with confidence.",
    },
  ];

  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Everything You Need
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful tools to manage your tasks, projects and productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

      </section>

      <Button />

    </>
  );
}

export default Home;