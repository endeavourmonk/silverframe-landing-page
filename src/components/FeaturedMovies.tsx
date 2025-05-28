import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { FEATURED_MOVIES } from "../data";

const FeaturedMovies = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Movies</h2>
          <Link
            to="/movies"
            className="text-sm font-medium text-primary hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_MOVIES.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovies;
