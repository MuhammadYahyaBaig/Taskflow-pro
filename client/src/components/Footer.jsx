import { Link } from "react-router-dom";
import {
  CheckSquare,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <CheckSquare className="text-blue-500" />
              TaskFlow <span className="text-blue-500">Pro</span>
            </div>

            <p className="mt-5 text-gray-400 leading-7">
              A modern task and project management platform designed
              to help individuals and teams stay productive.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Quick Links</h3>

            <div className="space-y-3 text-gray-400">
              <Link to="/" className="block hover:text-white">
                Home
              </Link>

              <Link to="/about" className="block hover:text-white">
                About
              </Link>

              <Link to="/features" className="block hover:text-white">
                Features
              </Link>

              <Link to="/contact" className="block hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Product</h3>

            <div className="space-y-3 text-gray-400">
              <Link to="/dashboard" className="block hover:text-white">
                Dashboard
              </Link>

              <Link to="/login" className="block hover:text-white">
                Login
              </Link>

              <Link to="/register" className="block hover:text-white">
                Register
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5">Contact</h3>

            <div className="space-y-4 text-gray-400">
              <p className="flex gap-3">
                <Mail size={20} />
                support@taskflowpro.com
              </p>

              <p className="flex gap-3">
                <Phone size={20} />
                +92 300 1234567
              </p>

              <p className="flex gap-3">
                <MapPin size={20} />
                Karachi, Pakistan
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-7 text-center text-gray-500">
          © {new Date().getFullYear()} TaskFlow Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;