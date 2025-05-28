import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowLeft, Star, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "../components/ui/button";
import { 
  BaseContent, 
  ContentType,
  ALL_MOVIES, 
  ALL_TV_SHOWS, 
  NEW_RELEASES 
} from "../data";

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [content, setContent] = useState<BaseContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [contentType, setContentType] = useState<ContentType>(ContentType.MOVIE);

  useEffect(() => {
    // Simulate API fetch
    const fetchContent = () => {
      setLoading(true);
      const numericId = Number(id);

      // First, determine content type based on URL path
      const path = location.pathname;
      let contentTypeFromPath: ContentType;

      if (path.includes("/tvshows/")) {
        contentTypeFromPath = ContentType.TV_SHOW;
      } else if (path.includes("/new-releases/")) {
        contentTypeFromPath = ContentType.NEW_RELEASE;
      } else {
        contentTypeFromPath = ContentType.MOVIE;
      }
      
      setContentType(contentTypeFromPath);

      // Find content by ID across all collections
      let foundContent = null;
      
      // Option 1: Search in the specific collection based on path
      if (contentTypeFromPath === ContentType.TV_SHOW) {
        foundContent = ALL_TV_SHOWS.find(item => item.id === numericId);
      } else if (contentTypeFromPath === ContentType.NEW_RELEASE) {
        foundContent = NEW_RELEASES.find(item => item.id === numericId);
      } else {
        foundContent = ALL_MOVIES.find(item => item.id === numericId);
      }
      
      // Option 2 (alternative): Search across all collections by ID
      // This works because IDs are now globally unique
      // if (!foundContent) {
      //   foundContent = [...ALL_MOVIES, ...ALL_TV_SHOWS, ...NEW_RELEASES]
      //     .find(item => item.id === numericId);
      // }

      setContent(foundContent || null);
      setLoading(false);
    };

    fetchContent();
  }, [id, location.pathname]);

  if (loading) {
    return (
      <div className="container py-16 text-center">
        <p className="text-lg">Loading content details...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Content Not Found</h1>
        <p className="text-lg mb-8">
          Sorry, we couldn't find what you're looking for.
        </p>
        <Button asChild>
          <Link
            to={
              contentType === "tvshow"
                ? "/tvshows"
                : contentType === "newrelease"
                ? "/new-releases"
                : "/movies"
            }
          >
            Back to{" "}
            {contentType === "tvshow"
              ? "TV Shows"
              : contentType === "newrelease"
              ? "New Releases"
              : "Movies"}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Hero Section with Trailer */}
      <div className="relative aspect-video w-full bg-black">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`${content.trailerUrl}?autoplay=1&mute=0`}
          title={`${content.title} Trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Movie Details */}
      <div className="container py-8">
        <Link
          to={
            contentType === "tvshow"
              ? "/tvshows"
              : contentType === "newrelease"
              ? "/new-releases"
              : "/movies"
          }
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to{" "}
          {contentType === "tvshow"
            ? "TV Shows"
            : contentType === "newrelease"
            ? "New Releases"
            : "Movies"}
        </Link>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Content Poster */}
          <div className="md:col-span-1">
            <div className="overflow-hidden rounded-lg border">
              <img
                src={content.image}
                alt={content.title}
                className="h-full w-full object-cover"
              />
            </div>
            <Button className="w-full mt-4" asChild>
              <Link to={`/booking/${content.id}`}>Book Tickets</Link>
            </Button>
          </div>

          {/* Content Info */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold">{content.title}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{content.rating}/10</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{content.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{content.year}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span>{content.genre}</span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="mt-2 text-muted-foreground">
                {content.description}
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Director</h2>
              <p className="mt-2">{content.director}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">Cast</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {content?.cast?.map((actor: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-secondary px-3 py-1 text-sm"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
