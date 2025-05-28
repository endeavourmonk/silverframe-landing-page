import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface TVShow {
  id: number;
  title: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
}

interface TVShowCardProps {
  show: TVShow;
}

const TVShowCard = ({ show }: TVShowCardProps) => {
  return (
    <Link to={`/tvshows/${show.id}`} className="block">
      <div className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
        <div className="aspect-[2/3] overflow-hidden">
          <img
            src={show.image}
            alt={show.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{show.year}</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{show.rating}</span>
            </div>
          </div>
          <h3 className="mt-2 font-semibold">{show.title}</h3>
          <p className="text-sm text-muted-foreground">{show.genre}</p>
        </div>
      </div>
    </Link>
  );
};

export default TVShowCard;
