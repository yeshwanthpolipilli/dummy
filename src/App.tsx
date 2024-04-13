import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Pagenotfound from './Pages/Pagenotfound';
import PythonCourse1 from './Pages/PythonCourse1';
import Developmentfullstack from './Pages/Developmentfullstack';
import Contact from './Pages/Contact';
import Aboutus from './Pages/Aboutus';
import { useEffect, useState } from "react";
import Loader from './Pages/Loader'
import AnimatedCursor from "react-animated-cursor"
import Qatesting from './Pages/Qatesting';
import Sqlexpertise from './Pages/Sqlexpertise';
import Blog from './Pages/Blog';
import '../src/Components/Testimonails.css'
import Corporate from './Pages/Corporate';
import One from './Components/One';
import Two from './Components/Two';
import Three from './Components/Three';
import Four from './Components/Four';


function App() { 

  // loader state
    // loader state
    const [isLoading, setIsLoading] = useState(true);

    // Let create async method to fetch fake data
    useEffect(() => {
      const fakeDataFetch = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      };
  
      fakeDataFetch();
    }, []);
  
    return isLoading ? (
      <Loader />
    ) : (
      <>

      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Aboutus" element={<Aboutus />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/PythonCourse" element={<PythonCourse1/>}/>
      <Route path="/Fullstackdevelopment" element={<Developmentfullstack/>}/>
      <Route path="/Qatesting" element={<Qatesting/>}/>
      <Route path="/Corporate" element={<Corporate/>}/>
      <Route path="/Sqlexpertise" element={<Sqlexpertise/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path='/One' element={<One/>}/>
      <Route path='/Two' element={<Two/>}/>
      <Route path='/Three' element={<Three/>}/>
      <Route path='/Four' element={<Four/>}/>
      <Route path="*" element={<Pagenotfound />}/>
      <Route path=":name" element={<Pagenotfound />} />
      
      
              </Routes>
      
              <div className="App">
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 11, 111'
      outerAlpha={0.4}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>

    <div className="anime  position-fixed ">
            <div className="circles"></div>
            <div className="circles1 bg-danger"></div>
            <div className="circles2 bg-warning"></div>
            <div className="circles3 bg-primary"></div>
            <div className="circles4 bg-secondary"></div>
            <div className="circles5 bg-info"></div>
            <div className="circles6 bg-danger"></div>
            <div className="circles7 bg-warning"></div>
            <div className="circles8 bg-primary"></div>
            <div className="circles9 bg-danger"></div>
            <div className="circles10 bg-warning"></div>
            <div className="circles11 bg-primary"></div>
          </div>





      </>

   
    );

    
  }
  







export default App;
