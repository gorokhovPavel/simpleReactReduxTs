import React from "react";
import { Menu } from "containers";
import "./App.module.css";

interface IProps {}

const App: React.FC<IProps> = (props) => {
  return (
    <>
      <header>
        <p>Header</p>
      </header>
      <main>
        <Menu data="Привет!" />
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default App;
