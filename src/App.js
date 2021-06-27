import "./App.css";
import RestAPI from "./component/RestAPI/RestAPI";
import React from "react";
import Testgraphql from "./component/Graphql/Testgraphql";
import Buttontest from "./component/Buttontest/Buttontest";

function App() {
  return (
    <div className="App">
      <h1>Boilderplate React</h1>
      <Buttontest label="click me plase"></Buttontest>
      <RestAPI />
      <Testgraphql />
   
    </div>

  );
}

export default App;
