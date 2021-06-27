import logo from "./logo.svg";
import "./App.css";
import Personlist from "./component/PersonList/PersonList";
import Personinput from "./component/PersonInput/PersonInput";
function App() {
  return (
    <div className="App">
      <h1>Boilderplate React</h1>
      <Personinput />
      <Personlist />
    </div>
  );
}

export default App;
