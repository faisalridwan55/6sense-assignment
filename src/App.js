import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <h1>This is just basic template with react-router installed</h1>
      <Router>
        <div className="content">
          <Switch>
            {Routes}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
