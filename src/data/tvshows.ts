import { TVShow, ContentType } from "./types";

export const ALL_TV_SHOWS: TVShow[] = [
  {
    id: 201,
    contentType: ContentType.TV_SHOW,
    title: "Breaking Bad",
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    image:
      "https://images.unsplash.com/photo-1562329265-95a6d7a83440?q=80&w=2070&auto=format&fit=crop",
    rating: 9.5,
    year: 2008,
    genre: "Crime",
    duration: "49m per episode",
    director: "Vince Gilligan",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
    trailerUrl: "https://www.youtube.com/embed/HhesaQXLuRY",
  },
  {
    id: 2,
    contentType: ContentType.TV_SHOW,
    title: "Game of Thrones",
    description:
      "Nine noble families wage war against each other to gain control over the mythical land of Westeros, while an ancient enemy returns after being dormant for millennia.",
    image:
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?q=80&w=2088&auto=format&fit=crop",
    rating: 9.2,
    year: 2011,
    genre: "Fantasy",
    duration: "57m per episode",
    director: "Various (incl. David Nutter, Alan Taylor, Miguel Sapochnik)",
    cast: [
      "Emilia Clarke",
      "Kit Harington",
      "Peter Dinklage",
      "Lena Headey",
      "Nikolaj Coster-Waldau",
    ],
    trailerUrl: "http://youtube.com/embed/KPLWWIOCOOQ",
  },
  {
    id: 3,
    contentType: ContentType.TV_SHOW,
    title: "Stranger Things",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    image:
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=1887&auto=format&fit=crop",
    rating: 8.7,
    year: 2016,
    genre: "Sci-Fi",
    duration: "50m per episode",
    director: "The Duffer Brothers",
    cast: [
      "Millie Bobby Brown",
      "Finn Wolfhard",
      "David Harbour",
      "Winona Ryder",
      "Gaten Matarazzo",
    ],
    trailerUrl: "https://www.youtube.com/embed/b9EkMc79ZSU",
  },
  {
    id: 4,
    contentType: ContentType.TV_SHOW,
    title: "The Crown",
    description:
      "A biographical story about the reign of Queen Elizabeth II, exploring the political and personal events that shaped the second half of the 20th century.",
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
    rating: 8.6,
    year: 2016,
    genre: "Drama",
    duration: "58m per episode",
    director: "Various (incl. Stephen Daldry, Benjamin Caron, Jessica Hobbs)",
    cast: [
      "Claire Foy",
      "Olivia Colman",
      "Imelda Staunton",
      "Matt Smith",
      "Tobias Menzies",
    ],
    trailerUrl: "https://www.youtube.com/embed/JWtnJjn6ng0",
  },
  {
    id: 5,
    contentType: ContentType.TV_SHOW,
    title: "The Mandalorian",
    description:
      "After the fall of the Galactic Empire, a lone bounty hunter makes his way through the outer reaches of the lawless galaxy, protecting a mysterious child.",
    image:
      "https://images.unsplash.com/photo-1547700055-b61cacebece9?q=80&w=2070&auto=format&fit=crop",
    rating: 8.7,
    year: 2019,
    genre: "Sci-Fi",
    duration: "40m per episode",
    director: "Various (incl. Jon Favreau, Dave Filoni, Bryce Dallas Howard)",
    cast: [
      "Pedro Pascal",
      "Carl Weathers",
      "Gina Carano",
      "Giancarlo Esposito",
      "Emily Swallow",
    ],
    trailerUrl: "https://www.youtube.com/embed/aOC8E8z_ifw",
  },
];
