// Define all data types used across the application

// Add a content type enum for better type safety
export enum ContentType {
  MOVIE = "movie",
  TV_SHOW = "tvshow",
  NEW_RELEASE = "newrelease"
}

// Base content interface with common properties
export interface BaseContent {
  id: number;
  contentType: ContentType; // Add this field to identify the content type
  title: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  description?: string;
  duration?: string;
  director?: string;
  cast?: string[];
  trailerUrl?: string;
}

// Extend the base interface for specific content types if needed
export interface Movie extends BaseContent {
  contentType: ContentType.MOVIE;
}

export interface TVShow extends BaseContent {
  contentType: ContentType.TV_SHOW;
}

export interface NewRelease extends BaseContent {
  contentType: ContentType.NEW_RELEASE;
}

export interface Cinema {
  name: string;
  city: string;
}

export interface ShowTime {
  time: string;
  date: string;
}

export interface TheaterSeat {
  id: string;
  status: "available" | "occupied" | "selected";
}