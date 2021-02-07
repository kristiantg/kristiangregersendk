import './styles.css';
import Sidebar from './components/sidebar/sidebar.js';
import Console from './components/console/console.js';
import Particles from './components/particles/particles.js'
import Hometext from './components/hometext/hometext.js'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
        <Sidebar/>
        <Console/>

        </Route>
        <Route path="/skills">
        <Sidebar/>
        <Console/>
          
        </Route>
        <Route path="/contact">
        <Sidebar/>
        <Console/>
          
        </Route>
        <Route path="/">
            <Hometext/>
            <Sidebar/>
            <Console/>
            <Particles/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
