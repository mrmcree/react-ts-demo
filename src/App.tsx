import React from "react";
import Button from "./components/Button";

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
