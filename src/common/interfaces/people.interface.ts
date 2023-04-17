import IModel from "./model.interface";

interface IPeople extends IModel {
  /**
   * The name of this person
   */
  name: string;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY
   */
  birth_year: string;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye
   */
  eye_color: string;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender
   */
  gender: string;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair
   */
  hair_color: string;
  /**
   * The height of the person in centimeters
   */
  height: string;
  /**
   * The mass of the person in kilograms
   */
  mass: string;
  /**
   * The skin color of this person
   */
  skin_color: string;
  /**
   * The URL of a planet resource, a planet that this person was born on or inhabits
   */
  homeworld: string;
  /**
   * An array of film resource URLs that this person has been in
   * */
  films: string[];
  /**
   * An array of species resource URLs that this person belongs to
   */
  species: string[];
  /**
   * An array of starship resource URLs that this person has piloted
   */
  starships: string[];
  /**
   * An array of vehicle resource URLs that this person has piloted
   */
  vehicles: string[];
}

export default IPeople;
