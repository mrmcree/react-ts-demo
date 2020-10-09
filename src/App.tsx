import React from "react";
import Button from "./components/Button";
//test 修改
//master 修改
//master分支修改
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
