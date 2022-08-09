import './Styles/App.scss';
import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

import NavComp from './Component/nav';
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import Services from './Component/pages/Services';
import Instructors from './Component/pages/Instructors';
import Courses from './Component/pages/Courses';
import Blog from './Component/pages/Blog';


function App() {
  return (
    <div className="App">
      <NavComp />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/instructors" element={<Instructors />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
    </div>
  )
}

export default App;
