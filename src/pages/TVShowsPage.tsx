import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../components/ui/button";
import TVShowCard from "@/components/TVShowCard";
import { ALL_TV_SHOWS } from "../data";

const TVShowsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  // Get unique genres for filter
  const genres = Array.from(new Set(ALL_TV_SHOWS.map((show) => show.genre)));

  // Filter TV shows based on search term and selected genre
  const filteredShows = ALL_TV_SHOWS.filter((show) => {
    const matchesSearch = show.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? show.genre === selectedGenre : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="py-8">
      {/* Page Header */}
      <div className="container mb-8">
        <h1 className="text-4xl font-bold mb-6">TV Shows</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search TV shows..."
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

        {/* TV Shows Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredShows.length > 0 ? (
            filteredShows.map((show) => (
              <TVShowCard key={show.id} show={show} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">
                No TV shows found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TVShowsPage;
