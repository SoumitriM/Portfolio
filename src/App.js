import Navbar from './components/Navbar';
import Contact from './layout/Contact';
import Home from './layout/Home';
import Projects from './layout/Projects';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navbarClassName = "dd";
function App() {
  const addNavbarBackground = () => {
    navbarClassName = navbarClassName + " " + "bgColor";
    console.log('jj', navbarClassName);
}
  return (
    <div className="App" onScroll={addNavbarBackground}>
      <Navbar/>
      <Home/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
