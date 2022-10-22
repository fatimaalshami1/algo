import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopBar from "./topbar/TopBar";

import Home from "./pages/home/Home"

// importing the algorithm visualizer components
import PrimeAlgorithm from "./pages/algoritms/prime/PrimeAlgorithm"

function App() {
  return (
    <BrowserRouter>
       {/* Navigation bar */}
        <TopBar/>

        {/* Different routes */}
        <Switch>
          <Route exact path = "/"><Home/></Route>
          <Route path = "/visualize-prime">
            <PrimeAlgorithm/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
