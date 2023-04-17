import React from "react";
import CardComponent from "../components/card/card.component";
import RowComponent from "../components/row/row.component";
import FlexComponent from "../components/flex/flex.component";
import IPlanet from "../common/interfaces/planet.interface";

interface IProps {
  planet: IPlanet;
}

const PlanetCardTemplate = (props: IProps) => (
  <CardComponent>
    <FlexComponent flexDirection="column" gap={15}>
      <RowComponent label={"Name"} value={props.planet.name} />
      <RowComponent label={"Diameter"} value={props.planet.diameter} />
      <RowComponent label={"Gravity"} value={props.planet.gravity} />
    </FlexComponent>
  </CardComponent>
);

export default PlanetCardTemplate;
