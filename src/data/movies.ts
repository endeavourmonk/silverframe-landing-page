import { Movie, ContentType } from "./types";

// All movies data with globally unique IDs (1-100 range for movies)
export const ALL_MOVIES: Movie[] = [
  {
    id: 1,
    contentType: ContentType.MOVIE,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    rating: 8.8,
    year: 2010,
    genre: "Sci-Fi",
    duration: "2h 28m",
    director: "Christopher Nolan",
    cast: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page",
      "Tom Hardy",
    ],
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "The Dark Knight",
    contentType: ContentType.MOVIE,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1974&auto=format&fit=crop",
    rating: 9.0,
    year: 2008,
    genre: "Action",
    duration: "2h 32m",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    id: 3,
    title: "Interstellar",
    contentType: ContentType.MOVIE,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image:
      "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1974&auto=format&fit=crop",
    rating: 8.6,
    year: 2014,
    genre: "Adventure",
    duration: "2h 49m",
    director: "Christopher Nolan",
    cast: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine",
    ],
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    contentType: ContentType.MOVIE,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop",
    rating: 8.9,
    year: 1994,
    genre: "Crime",
    duration: "2h 34m",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
  },
  // Add more movies from MoviesPage.tsx
  {
    id: 5,
    title: "The Shawshank Redemption",
    contentType: ContentType.MOVIE,
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
    rating: 9.3,
    year: 1994,
    genre: "Drama",
  },
  {
    id: 6,
    title: "The Godfather",
    contentType: ContentType.MOVIE,
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    rating: 9.2,
    year: 1972,
    genre: "Crime",
  },
];

// Featured movies subset
export const FEATURED_MOVIES: Movie[] = [
  {
    id: 1,
    title: "Inception",
    contentType: ContentType.MOVIE,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    rating: 8.8,
    year: 2010,
    genre: "Sci-Fi",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: 2,
    title: "The Dark Knight",
    contentType: ContentType.MOVIE,
    description:
      "Batman faces his greatest challenge as the Joker wreaks havoc on Gotham City.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1974&auto=format&fit=crop",
    rating: 9.0,
    year: 2008,
    genre: "Action",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
  {
    id: 3,
    title: "Interstellar",
    contentType: ContentType.MOVIE,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image:
      "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1974&auto=format&fit=crop",
    rating: 8.6,
    year: 2014,
    genre: "Adventure",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    contentType: ContentType.MOVIE,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop",
    rating: 8.9,
    year: 1994,
    genre: "Crime",
    trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    contentType: ContentType.MOVIE,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
    rating: 9.3,
    year: 1994,
    genre: "Drama",
    trailerUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
  },
];
