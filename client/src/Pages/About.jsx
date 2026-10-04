import {
  ShieldCheck,
  Users,
  Clock3,
  Zap,
} from "lucide-react";

function About() {

  const missionVision = [
    {
      title: "Our Mission",
      description:
        "Our mission is to simplify task management by providing a powerful, user-friendly platform that helps individuals and teams achieve more with less effort.",
    },
    {
      title: "Our Vision",
      description:
        "We envision a future where productivity tools are simple, collaborative, and accessible to everyone around the world.",
    },
  ];

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description:
        "We prioritize the security and reliability of our platform.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description:
        "Our platform makes collaboration simple and effective.",
    },
    {
      icon: Clock3,
      title: "Time-Saving",
      description:
        "Manage your work faster and focus on what matters.",
    },
    {
      icon: Zap,
      title: "Efficient",
      description:
        "A fast and responsive workflow designed for productivity.",
    },
  ];

  const stats = [
    ["10K+", "Active Users"],
    ["500K+", "Tasks Completed"],
    ["99%", "Success Rate"],
    ["24/7", "Support"],
  ];

  const teamMembers = [
    ["Alice Johnson", "CEO & Founder", "https://randomuser.me/api/portraits/women/44.jpg"],
    ["Bob Smith", "UI/UX Designer", "https://randomuser.me/api/portraits/men/32.jpg"],
    ["Charlie Brown", "Backend Developer", "https://randomuser.me/api/portraits/men/45.jpg"],
    ["Diana Wilson", "Customer Success Manager", "https://randomuser.me/api/portraits/women/65.jpg"],
    ["Ethan Davis", "Frontend Developer", "https://randomuser.me/api/portraits/men/52.jpg"],
    ["Fiona Miller", "Marketing Specialist", "https://randomuser.me/api/portraits/women/23.jpg"],
    ["Grace Lee", "Sales Director", "https://randomuser.me/api/portraits/women/29.jpg"],
    ["Henry Thompson", "Product Manager", "https://randomuser.me/api/portraits/men/60.jpg"],
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          About <span className="text-blue-600">TaskFlow Pro</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
          TaskFlow Pro is a modern project and task management platform
          designed to help individuals and teams stay organized,
          collaborate efficiently, and achieve more every day.
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              TaskFlow Pro was created with a simple goal: make task
              management easier for everyone. Whether you are a student,
              freelancer, startup, or enterprise team, our platform helps
              you organize work efficiently.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              We believe productivity should be simple, collaborative,
              and enjoyable. That's why we build modern tools with clean
              design and powerful features.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
            alt="Our Team"
            className="rounded-2xl shadow-xl w-full"
          />

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Our Mission & Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {missionVision.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-blue-600">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-600 leading-8">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Choose TaskFlow Pro?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">

          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-7 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon className="text-blue-600" />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center">
          Trusted by Thousands
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">

          {stats.map(([number, label], index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {number}
              </h3>

              <p className="mt-3 text-gray-600">
                {label}
              </p>
            </div>
          ))}

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Meet Our Team
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7 mt-12">

          {teamMembers.map(([name, role, image]) => (
            <div
              key={name}
              className="bg-white p-7 rounded-2xl shadow-lg text-center"
            >
              <img
                src={image}
                alt={name}
                className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-blue-600"
              />

              <h3 className="mt-5 font-bold text-xl">
                {name}
              </h3>

              <p className="mt-2 text-blue-600 font-semibold">
                {role}
              </p>
            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default About;