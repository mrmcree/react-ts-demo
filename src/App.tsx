import React from "react";
import Button from "./components/Button";
import Menu from "./components/menu/menu";
import MenuItem from "./components/menu/menuItem";
const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Menu
          defaultIndex={0}
          onSelect={(index) => {
            console.log(index);
          }}
        >
          <MenuItem index={0} disabled>
            link1
          </MenuItem>
          <MenuItem index={1}>link2</MenuItem>
          <MenuItem index={3}>link3</MenuItem>
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
