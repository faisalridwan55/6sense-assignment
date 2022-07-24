import { BrowserRouter as Router, Switch } from "react-router-dom";
import Frame from "./components/Frame";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Frame>
            <Switch>{Routes}</Switch>
          </Frame>
        </div>
      </Router>
    </div>
  );
}

export default App;
