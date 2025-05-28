import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { FEATURED_MOVIES } from "../data";

// Remove the FEATURED_MOVIES array definition

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);
  
  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % FEATURED_MOVIES.length);
    }, 5000); // 5 seconds for better user experience
    
    return () => clearInterval(interval);
  }, []);

  const currentMovie = FEATURED_MOVIES[currentIndex];

  return (
    <section className="relative h-[80vh] overflow-hidden py-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out" 
        style={{ 
          backgroundImage: `url('${currentMovie.image}')`,
          filter: "brightness(0.5)"
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-start justify-center px-4 md:px-6 lg:px-8">
        <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-white md:text-6xl transition-all duration-500">
          {currentMovie.title}
        </h1>
        <p className="mt-4 max-w-lg text-lg text-white/80 transition-all duration-500">
          {currentMovie.description}
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" className="px-6 py-3" asChild>
            <Link to="/movies">Browse Movies</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="px-6 py-3"
            onClick={() => setShowTrailer(true)}
          >
            <Play className="mr-2 h-4 w-4" />
            Watch Trailer
          </Button>
        </div>
        
        {/* Carousel Indicators */}
        <div className="mt-12 flex gap-2">
          {FEATURED_MOVIES.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-primary" : "w-4 bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl rounded-lg shadow-2xl">
            <button
              className="absolute -right-4 -top-10 text-white hover:text-primary"
              onClick={() => setShowTrailer(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="100%"
                src={`${currentMovie.trailerUrl}?autoplay=1`}
                title={`${currentMovie.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;