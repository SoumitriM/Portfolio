import Navbar from './components/Navbar';
import Contact from './layout/Contact';
import Home from './layout/Home';
import Projects from './layout/Projects';
import JSPlayground from './layout/JSPlayground';
import Skills from './layout/Skills';
import "./app.scss";
import Education from './layout/Education';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div id="about-me-section">
      <Navbar/>
      <div className='App'>
      <Home/>
      <Skills/>
      <Projects/>
      <JSPlayground/>
      <Education/>
      </div>
      <Contact/>
    </div>
  );
}

export default App;
