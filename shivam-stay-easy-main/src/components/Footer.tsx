
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pgpurple-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-md bg-white flex items-center justify-center">
                <span className="text-pgpurple-600 font-bold text-xl">S</span>
              </div>
              <span className="text-white font-bold text-xl">Shivam PG</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Comfortable and affordable accommodation for students and professionals in prime locations.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pg-info" className="text-gray-300 hover:text-white transition-colors">
                  PG Info
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-300 hover:text-white transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 PG Street, Locality</p>
              <p>City, State - 123456</p>
              <p className="mt-2">Phone: +91 9876543210</p>
              <p>Email: info@shivampg.com</p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Shivam PG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
