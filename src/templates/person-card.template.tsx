import React from "react";
import IPeople from "../common/interfaces/people.interface";
import CardComponent from "../components/card/card.component";
import RowComponent from "../components/row/row.component";
import FlexComponent from "../components/flex/flex.component";

interface IProps {
  person: IPeople;
  onClick?: () => void;
}

const PersonCardTemplate = (props: IProps) => (
  <CardComponent attributes={{ onClick: props.onClick }}>
    <FlexComponent flexDirection="column" gap={15}>
      <RowComponent label={"Name"} value={props.person.name} />
      <RowComponent label={"Gender"} value={props.person.gender} />
      <RowComponent label={"Eye color"} value={props.person.eye_color} />
    </FlexComponent>
  </CardComponent>
);

export default PersonCardTemplate;
