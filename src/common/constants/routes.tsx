import { RouteObject } from "react-router-dom";
import React from "react";
import PeopleView from "../../views/people.view";
import PeopleDetailView from "../../views/people-detail.view";
import PlanetsView from "../../views/planets.view";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <PeopleView />
  },
  {
    path: "/people/:peopleId",
    element: <PeopleDetailView />
  },
  {
    path: "/planets",
    element: <PlanetsView />
  }
];

export default routes;
