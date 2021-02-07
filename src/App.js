import './styles.css';
import Sidebar from './components/sidebar/sidebar.js';
import Console from './components/console/console.js';
import Particles from './components/particles/particles.js'
import Hometext from './components/hometext/hometext.js'

function App() {
  return (
    <div className="App">
      <Hometext/>
      <Sidebar/>
      <Console/>
      <Particles/>
    </div>
  );
}

export default App;
