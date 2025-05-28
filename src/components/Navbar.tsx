import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Search, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold text-primary">
            <img
              src="/silver_frame.png"
              alt="Moviezilla Logo"
              className="h-24 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Movies
          </Link>
          <Link
            to="/tvshows"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            TV Shows
          </Link>
          <Link
            to="/new-releases"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            New Releases
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button>Sign In</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="relative z-60"
          >
            <Menu
              className={`h-5 w-5 transition-all duration-300 ${
                isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`h-5 w-5 absolute transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
              }`}
            />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
        style={{ top: "64px" }} // Start below the navbar
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-background border-b shadow-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <nav className="container py-6 space-y-4">
          <Link
            to="/"
            className="block text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="block text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMenu}
          >
            Movies
          </Link>
          <Link
            to="/tvshows"
            className="block text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMenu}
          >
            TV Shows
          </Link>
          <Link
            to="/new-releases"
            className="block text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMenu}
          >
            New Releases
          </Link>

          {/* Mobile Actions */}
          <div className="pt-4 border-t space-y-3">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2"
              onClick={closeMenu}
            >
              <Search className="h-4 w-4" />
              Search
            </Button>
            <Button className="w-full" onClick={closeMenu}>
              Sign In
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
