import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
}

interface MovieCardProps {
  movie: Movie;
  linkPrefix?: string;
}

// Update the Movie interface to use the new BaseContent or Movie type
const MovieCard = ({ movie, linkPrefix = "/movies" }: MovieCardProps) => {
  return (
    <Link to={`${linkPrefix}/${movie.id}`} className="block">
      <div className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
        <div className="aspect-[2/3] overflow-hidden">
          <img
            src={movie.image}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{movie.year}</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{movie.rating}</span>
            </div>
          </div>
          <h3 className="mt-2 font-semibold">{movie.title}</h3>
          <p className="text-sm text-muted-foreground">{movie.genre}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
