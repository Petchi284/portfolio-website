/*import './App.css'*/
import Nav from "./Components/Navbar/Nav";
import Homepage from "./Components/Home/Homepage";
import AboutMe from "./Components/About/AboutMe";
import Skill from "./Components/Skills/Skill";
import Port from "./Components/Portfo/Port";
import Contactpage from "./Components/Contact/Contactpage";


function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <AboutMe/>
      <Skill />
      <Port />
      <Contactpage />
    </div>
  );
}

export default App;
