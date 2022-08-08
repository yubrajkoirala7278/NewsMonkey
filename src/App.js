import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Newsitem from './components/Newsitem'
import React, { useState } from 'react'
import Navbar from './components/Navbar';

export default function App() {
  const [icon, seticon] = useState("fa fa-moon-o ");
  const [headingColor, setheadingColor] = useState("dark");
  const [btnColor, setbtnColor] = useState("dark");
  let backMode = () => {
    if (document.body.style.backgroundColor == "white" || document.body.style.backgroundColor=="") {
      seticon("fa fa-sun-o");
      document.body.style.backgroundColor = "rgb(25 57 69)"; 
      setheadingColor("white");
      setbtnColor("light");
    } else {
      seticon("fa fa-moon-o");
      document.body.style.backgroundColor = "white"; 
      setheadingColor("dark"); 
      setbtnColor("dark");
    }
  }

  return (
    <BrowserRouter>
    
      <Navbar backgroundMode={backMode} icon={icon} />
      <Routes>
        <Route path="/" element={<Newsitem category="general" key="a" headingColor={headingColor} btnColor={btnColor} title="General"/>}></Route>
        <Route path="/business" element={<Newsitem category="business" key="b" headingColor={headingColor} btnColor={btnColor} title="Business"/>}></Route>
        <Route path="/entertainment" element={<Newsitem category="entertainment" key="c" headingColor={headingColor} btnColor={btnColor} title="Entertainment"/>}></Route>
        <Route path="/health" element={<Newsitem category="health" key="d" headingColor={headingColor} btnColor={btnColor} title="Health"/>}></Route>
        <Route path="/science" element={<Newsitem category="science" key="e" headingColor={headingColor} btnColor={btnColor} title="Science"/>}></Route>
        <Route path="/sports" element={<Newsitem category="sports" key="f" headingColor={headingColor} btnColor={btnColor} title="Sports"/>}></Route>
        <Route path="/technology" element={<Newsitem category="technology" key="g" headingColor={headingColor} btnColor={btnColor} title="Technology"/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
