import IModel from "./model.interface";

interface IFilm extends IModel {
  /** The title of this film */
  title: string;
  /** The episode number of this film */
  episode_id: number;
  /** The opening paragraphs at the beginning of this film */
  opening_crawl: number;
  /** The name of the director of this film */
  director: string;
  /** The name(s) of the producer(s) of this film. Comma separated */
  producer: string;
  /** The ISO 8601 date format of film release at original creator country */
  release_date: Date;
  /** An array of species resource URLs that are in this film */
  species: string[];
  /** An array of starship resource URLs that are in this film */
  starships: string[];
  /** An array of vehicle resource URLs that are in this film */
  vehicles: string[];
  /** An array of people resource URLs that are in this film */
  characters: string[];
  /** An array of planet resource URLs that are in this film */
  planets: string[];
}

export default IFilm;
