import React from "react";
import Button from "./components/Button";
import Menu from "./components/menu/menu";
import MenuItem from "./components/menu/menuItem";
const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Menu defaultIndex={0}>
          <MenuItem>link1</MenuItem>
          <MenuItem>link2</MenuItem>
          <MenuItem>link3</MenuItem>
        </Menu>
        <Button
          onClick={() => {
            console.log("ddd");
          }}
        >
          ddd
        </Button>
      </div>
    </>
  );
};
export default App;
