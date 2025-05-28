import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../components/ui/button";
import MovieCard from "../components/MovieCard";
import { NEW_RELEASES } from "../data";

const NewReleasesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // Get unique genres for filter
  const genres = Array.from(new Set(NEW_RELEASES.map((movie) => movie.genre)));

  // Filter movies based on search term and selected genre
  const filteredMovies = NEW_RELEASES.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? movie.genre === selectedGenre : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="container mb-8">
        <h1 className="text-4xl font-bold mb-6">New Releases</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search new releases..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Button
              variant={selectedGenre === null ? "default" : "outline"}
              onClick={() => setSelectedGenre(null)}
            >
              All
            </Button>
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                linkPrefix="/new-releases"
              />
            ))
          ) : (
            <p className="col-span-full text-center py-12">No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewReleasesPage;
