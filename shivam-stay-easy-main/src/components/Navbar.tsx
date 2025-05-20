import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; isAdmin: boolean } | null>(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'PG Info', path: '/pg-info' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Contact Us', path: '/contact' }
  ];

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) setUser(JSON.parse(userData));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-md bg-pgpurple-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-pgpurple-700 font-bold text-xl">Shivam PG</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`${location.pathname === link.path
                  ? 'text-pgpurple-500 font-medium'
                  : 'text-gray-600 hover:text-pgpurple-500 transition-colors'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            {!user ? (
              <Link to="/login" className="text-pgpurple-500 font-medium">Login</Link>
            ) : (
              <>
                {user.isAdmin && (
                  <Link to="/admin" className="text-pgpurple-500 font-medium">Admin Dashboard</Link>
                )}
                <button onClick={handleLogout} className="text-red-500 font-medium">Logout</button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md ${location.pathname === link.path
                    ? 'bg-pgpurple-100 text-pgpurple-600 font-medium'
                    : 'text-gray-600 hover:bg-pgpurple-50 hover:text-pgpurple-500'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {!user ? (
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md text-pgpurple-500 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              ) : (
                <>
                  {user.isAdmin && (
                    <Link
                      to="/admin"
                      className="px-4 py-2 rounded-md text-pgpurple-500 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 rounded-md text-red-500 font-medium"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
