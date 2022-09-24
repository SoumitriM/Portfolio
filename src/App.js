import Navbar from './components/Navbar';
import Contact from './layout/Contact';
import Home from './layout/Home';
import Projects from './layout/Projects';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App" id="about-me-section">
      <Navbar/>
      <Home/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
