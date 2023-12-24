// import React from 'react'
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar.js';
// import About from "./components/About.js";
// import Education  from './components/Education.js';
// import Skill from './components/Skill.js';
// import Experience from './components/Experince.js';
// import Certifications from './components/Certifications.js'
// const App = () => {

//   return (
//     <>
//     <Navbar />
//     <About />
//     <Education/>
//     <Certifications/>
//     <Skill/>
//     <Experience/>
//     {/* <Router> 
//    <Routes>
//           <Route path="/about" element={<About />}>
//           </Route>
//           <Route path="/Education" element={<Education />}>
//           </Route>
//           <Route path="/Skill" element={<Skill />}> 
//             </Route>
//           <Route path="/Experience" element={<Experience />}>
//           </Route>
//           <Route path="/Certifications" element={ <Certifications  />}> 
//           </Route>
//    </Routes>
//        </Router> */}
//   </>
//   )
// }


// export default App

// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skill from './components/Skill';
import Experince from './components/Experince';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/experience" element={<Experince />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
      <Footer/>
    </Router>
  );

};



export default App;

