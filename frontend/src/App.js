import "./app.css"
import Card from "./cards/Card";
import TopBar from "./topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
      <header className="App-header">
       
        <TopBar/>
        <h1 className="text">ALGORITHM VISUALIZER</h1>
        <h4 className="text1">Visualize Algoritm For Better Understanding</h4>

        <Card/>
      </header>
    // </Router>
  );
}

export default App;
