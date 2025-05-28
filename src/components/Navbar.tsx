import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
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

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/movies" className="text-sm font-medium hover:text-primary">
            Movies
          </Link>
          <Link
            to="/tvshows"
            className="text-sm font-medium hover:text-primary"
          >
            TV Shows
          </Link>
          <Link
            to="/new-releases"
            className="text-sm font-medium hover:text-primary"
          >
            New Releases
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
