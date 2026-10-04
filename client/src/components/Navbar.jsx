import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  CheckSquare,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    `font-medium ${
      isActive
        ? "text-blue-600"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-gray-900"
          onClick={() => setMenuOpen(false)}
        >
          <CheckSquare className="text-blue-600" />
          TaskFlow <span className="text-blue-600">Pro</span>
        </Link>

        <div className="hidden md:flex items-center flex-1">
          <div className="flex items-center gap-8 mx-auto">
             <NavLink to="/" className={navClass}>
                Home
             </NavLink>

             <NavLink to="/about" className={navClass}>
                About
             </NavLink>

             <NavLink to="/features" className={navClass}>
                Features
             </NavLink>

             <NavLink to="/contact" className={navClass}>
                Contact
             </NavLink>
          </div>

          {user ? (
            <>
              <NavLink to="/dashboard" className={navClass}>
                Dashboard
              </NavLink>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="text-gray-700 font-semibold hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-5 space-y-4">

          <NavLink
            to="/"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/features"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </NavLink>

          <NavLink
            to="/contact"
            className="block"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-500"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="block bg-blue-600 text-white text-center py-3 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;