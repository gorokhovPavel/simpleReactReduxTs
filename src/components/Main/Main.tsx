import React from "react";
import { Menu } from "containers";
import "./Main.module.css";

interface IProps {}

const Main: React.FC<IProps> = (props) => {
  return <Menu data="Привет!" />;
};

export default Main;
