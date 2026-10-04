import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been submitted.");

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-bold">
          Get in <span className="text-blue-600">Touch</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          Have a question, feedback, or need help with TaskFlow Pro?
          Our team is here to help.
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold">
              Let's Talk
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Whether you need assistance, have feedback, or want
              to learn more about TaskFlow Pro, feel free to reach out.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Mail className="text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    support@taskflowpro.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Phone className="text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +92 300 1234567
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Karachi%2C%20Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold">
                    Location
                  </h3>

                  <p className="text-gray-600">
                    Karachi, Pakistan
                  </p>
                </div>
              </a>

            </div>

            <div className="border-t my-10" />

            <div className="flex gap-4">

              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock className="text-blue-600" />
              </div>

              <div>
                <h3 className="font-bold">
                  Business Hours
                </h3>

                <p className="mt-2 text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>

                <p className="text-gray-600">
                  Saturday: 10:00 AM - 4:00 PM
                </p>

                <p className="text-gray-600">
                  Sunday: Closed
                </p>
              </div>

            </div>

            <div className="mt-10 bg-blue-50 rounded-xl p-5 flex gap-4">
              <MessageCircle className="text-blue-600 shrink-0" />

              <div>
                <h3 className="font-bold">
                  Need Quick Help?
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Send us a message and our team will get back to you.
                </p>
              </div>
            </div>

          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

              <div>
                <label className="block font-semibold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;