export interface Character {
  _id: string;
  name: string;
  imageUrl: string;
  updatedAt?: string;
  featuredFilms: string[];
  shortFilms: string[];
  tvShows: string[];
  films?: string[];
  sourceUrl?: string;
}
