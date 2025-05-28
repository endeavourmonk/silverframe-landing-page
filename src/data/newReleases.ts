import { NewRelease, ContentType } from "./types";

// New releases with globally unique IDs (101-200 range for new releases)
export const NEW_RELEASES: NewRelease[] = [
  {
    id: 101,
    contentType: ContentType.NEW_RELEASE,
    title: "Dune: Part Two",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 8.5,
    year: 2024,
    genre: "Sci-Fi",
    duration: "2h 46m",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
  },
  {
    id: 102,
    title: "Oppenheimer",
    contentType: ContentType.NEW_RELEASE,
    image:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2067&auto=format&fit=crop",
    rating: 8.4,
    year: 2023,
    genre: "Biography",
    duration: "3h 0m",
    director: "Christopher Nolan",
    cast: [
      "Cillian Murphy",
      "Emily Blunt",
      "Robert Downey Jr.",
      "Matt Damon",
      "Florence Pugh",
      "Josh Hartnett",
      "Casey Affleck",
      "Rami Malek",
      "Kenneth Branagh",
    ],
    description:
      "A dramatization of the life story of J. Robert Oppenheimer, the American theoretical physicist who helped develop the first nuclear weapons during World War II.",
    trailerUrl: "https://www.youtube.com/embed/SdHe-JseJfQ",
  },
  {
    id: 103,
    title: "Barbie",
    contentType: ContentType.NEW_RELEASE,
    image:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop",
    rating: 7.0,
    year: 2023,
    director: "Greta Gerwig",
    cast: [
      "Margot Robbie",
      "Ryan Gosling",
      "America Ferrera",
      "Kate McKinnon",
      "Issa Rae",
      "Rhea Perlman",
      "Will Ferrell",
    ],
    description:
      "Barbie and Ken are having the time of their lives in the seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    genre: "Comedy",
    trailerUrl: "https://www.youtube.com/embed/pBk4NYhWNMM",
  },
  {
    id: 104,
    title: "Poor Things",
    contentType: ContentType.NEW_RELEASE,
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    rating: 8.0,
    year: 2023,
    genre: "Comedy",
    director: "Yorgos Lanthimos",
    cast: [
      "Emma Stone",
      "Mark Ruffalo",
      "Willem Dafoe",
      "Ramy Youssef",
      "Christopher Abbott",
      "Jerrod Carmichael",
    ],
    description:
      "Bella Baxter, a young woman in Victorian London, is brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter. As she embarks on a journey of self-discovery and liberation, Bella challenges the conventions of her time.",
    trailerUrl: "https://www.youtube.com/embed/RlbR5N6veqw",
  },
  {
    id: 105,
    title: "The Killer",
    contentType: ContentType.NEW_RELEASE,
    image:
      "https://images.unsplash.com/photo-1559583109-3e7968136c99?q=80&w=1974&auto=format&fit=crop",
    rating: 6.8,
    year: 2023,
    genre: "Action",
    director: "David Fincher",
    cast: [
      "Michael Fassbender",
      "Tilda Swinton",
      "Charles Parnell",
      "Arliss Howard",
      "Kerry O'Malley",
      "Sophie Charlotte",
      "Sala Baker",
    ],
    description:
      "After a fateful near-miss, an assassin battles his employers—and himself—on an international manhunt he insists isn't personal.",
    trailerUrl: "https://www.youtube.com/embed/5S7FR_HCg9g",
  },
];
