import React from "react";
import Button from "./components/Button";

//test分支修改
const App: React.FC = () => {
  return (
    <>
      <div className="App">
        app
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
