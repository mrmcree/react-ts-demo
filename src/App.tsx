import React from "react";
import Button from "./components/Button";

//master分支修改
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
