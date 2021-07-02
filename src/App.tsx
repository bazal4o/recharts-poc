
import './App.css';
import ButtonAppBar from './AppBar';
import ReBarChart from './components/BarChart';
import HorizontalMultiDimBarChart from './components/HorizontalMultiDimBarChart';
import VerticalMultiDimBarChart from './components/VerticalMultiDimBarChart';
import StackBarHorizontal from './components/StackBarHorizontal';
import StackBarVertical from './components/StackBarVertical';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Router>
      <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/barchart">BarChart</Link>
              </li>
              <li>
                <Link to="/horizontal">Horizontal MultiDim BarChart</Link>
              </li>      
              <li>
                <Link to="/vertical">Vertical MultiDim BarChart</Link>
              </li>
              <li>
                <Link to="/stackbar-horizontal">StackBar Horizontal</Link>
              </li> 
              <li>
                <Link to="/stackbar-vertical">StackBar Vertical</Link>
              </li>
            </ul>
          </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/barchart">
            <ReBarChart />
          </Route>
          <Route path="/horizontal">
            <HorizontalMultiDimBarChart />
          </Route>
          <Route path="/vertical">
            <VerticalMultiDimBarChart />
          </Route>
          <Route path="/stackbar-horizontal">
            <StackBarHorizontal />
          </Route>          
          <Route path="/stackbar-vertical">
            <StackBarVertical />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
