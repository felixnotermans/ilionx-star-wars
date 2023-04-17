import IPaginatedResponse from "../common/interfaces/paginated-response.interface";
import IPeople from "../common/interfaces/people.interface";
import IPlanet from "../common/interfaces/planet.interface";

class Service {
  async getAll(query?: { [name: string]: string }): Promise<IPaginatedResponse<IPeople>> {
    const apiUrl = new URL([process.env.REACT_APP_API_URL, "people"].join("/"));
    Object.entries(query ?? {}).forEach((item) => {
      apiUrl.searchParams.append(...item);
    });
    return (await fetch(apiUrl)).json();
  }

  async get(id: string): Promise<IPeople> {
    const apiUrl = [process.env.REACT_APP_API_URL, "people", id].join("/");
    return (await fetch(apiUrl)).json();
  }
}

export const peopleService = new Service();
