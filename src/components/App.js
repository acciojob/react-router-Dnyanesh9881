
import React from "react";
import './../styles/App.css';
import {Routes, Route} from "react-router";
import Home from "./Home";
import About from "./About";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  let navigate=useNavigate();

  return (
    <div>
        {/* Do not remove the main div */}
        <div>
          <div>
            <ul>
              {/* <li onClick={()=>navigate("/")}>Home</li>
              <li onClick={()=>navigate("/about")}>About</li> */}
             <li><Link to={"/"}>Home</Link></li> 
              <li><Link to={"/about"}>About</Link></li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>

          </Routes>
        </div>
    </div>
  )
}

export default App
