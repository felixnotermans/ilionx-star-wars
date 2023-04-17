import React from "react";
import "./row.styling.scss";

interface IProps {
  label: string;
  value: string;
}

const RowComponent = (props: IProps) => {
  return (
    <div className="row">
      <div className="label">{props.label}</div>
      <div className="value">{props.value}</div>
    </div>
  );
};

export default RowComponent;
