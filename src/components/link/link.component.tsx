import React, { PropsWithChildren } from "react";
import "./link.styling.scss";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";

const LinkComponent = (props: LinkProps & React.RefAttributes<HTMLAnchorElement>) => {
  return (
    <Link {...props} className={[props.className, "link"].join(" ")}>
      {props.children}
    </Link>
  );
};

export default LinkComponent;
