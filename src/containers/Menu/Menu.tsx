import React from "react";
import classes from "./Menu.module.css";

interface IProps {
  data: string;
}

const Menu: React.FC<IProps> = (props) => {
  const { data } = props;

  return <div className={classes.menuInfo}>{data}</div>;
};

export default Menu;
