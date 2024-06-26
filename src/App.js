import "./App.css";
import Home from "../src/Components/Home";
import AboutUs from "./Components/AboutUs";
import Nav from "./Components/Navbar";
import Course from "./Components/Course/Indexcourse";
import Contactpage from "./Components/ContactUs";
import Placemnt from "./Components/Placement";
import Facilities from "./Components/Facilities";
import End from "./Components/End";

function App() {
  return (
    <div>
      <Nav />

      <Home />
      <AboutUs />
      <Course />
      <Placemnt />
      <Facilities />
      <Contactpage />
      <End />
    </div>
  );
}

export default App;
