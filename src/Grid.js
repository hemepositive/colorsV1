import React from "react";

const Name = props => <div className="number">{props.name}</div>;

const Grid = props => {
  return <div className="footer">{props.children}</div>;
};

export { Name, Grid };
