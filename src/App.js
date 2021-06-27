import "./App.css";
import Personlist from "./component/RestAPI/PersonList/PersonList";
import Personinput from "./component/RestAPI/PersonInput/PersonInput";
import React from "react";
import Testgraphql from "./component/Graphql/Testgraphql";
import Buttontest from "./component/Buttontest/Buttontest";

function App() {
  return (
    <div className="App">
      <h1>Boilderplate React</h1>
      <Buttontest label="click me plase"></Buttontest>
      <div>
        <Personlist />
        <Personinput />
      </div>
      <Testgraphql />
   
    </div>

  );
}

export default App;
