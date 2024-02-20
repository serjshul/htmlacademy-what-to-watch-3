export type Film = {
  id: number;
  title: string;
  genre: string;
  director: string;
  year: number;
  description: string;
  cast: string[];
  rating: number;
  ratingDescription: string;
  ratingCounter: number;
  poster: string;
  preview: string;
  video: string;
};

export type Films = Film[];
