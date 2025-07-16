import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Programming Pathshala
        </Link>

        {/* CENTER NAV LINKS */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><Link to="/courses" className="hover:text-blue-600">Explore Courses</Link></li>
          <li><Link to="/stories" className="hover:text-blue-600">Success Stories</Link></li>
          <li><Link to="/blogs" className="hover:text-blue-600">Blogs</Link></li>
          <li><Link to="/events" className="hover:text-blue-600">Events</Link></li>
        </ul>

        {/* AUTH CTA BUTTONS */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Log In</Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Start Free Trial
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
