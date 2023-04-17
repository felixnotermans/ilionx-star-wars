import IModel from "./model.interface";

interface IPlanet extends IModel {
  /** The name of this planet */
  name: string;
  /** The diameter of this planet in kilometers */
  diameter: string;
  /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
  rotation_period: string;
  /** The number of standard days it takes for this planet to complete a single orbit of its local star */
  orbital_period: string;
  /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs */
  gravity: string;
  /** The average population of sentient beings inhabiting this planet */
  population: string;
}

export default IPlanet;
