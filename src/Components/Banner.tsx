import React from 'react';
import '../Components/style.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Tilt from "react-parallax-tilt";


const Banner = () => {
    React.useEffect(() => {
        AOS.init();
      }, []);
  return (

<>


{/* <div className="card text-bg-dark">
  <img  src={require('../Components/images/imhhomebanner.jpg')} className="card-img homebannerimg" alt="..."/>
  <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start mx-sm-5">
  <h2 className='card-title  course '>
    Your Course To Success
</h2>
<div className='w-75'>
<p className='card-text para w-50 mt-3 '>
Want to launch your dream tech career? Devrootz Hub's comprehensive courses can be your roadmap to success. We offer  in-depth training in high-demand tech skills, taught by industry experts. Master the fundamentals, get hands-on experience with real-world projects, and gain the skills and confidence to excel in today's competitive tech job market.
</p>
</div>
   <div className='w-75'>
<p className='card-text Reg-btn '> <Link className='nav-link' to="/Contact">Register Now</Link></p>
</div>
  </div>
</div> */}

<div className="container-fluid p-5 bg-light text-dark">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="d-flex flex-column justify-content-center ">
  <h2 className='card-title  course '>
    Your Course To Success
</h2>
<div className='w-75 mt-3'>
<p className='card-text para '>
Want to launch your dream tech career? Devrootz Hub's comprehensive courses can be your roadmap to success. We offer  in-depth training in high-demand tech skills, taught by industry experts. Master the fundamentals, get hands-on experience with real-world projects, and gain the skills and confidence to excel in today's competitive tech job market.
</p>
</div>
</div>
     
    </div>
  
    <div className="col-md-6">
   <Tilt>
 <img className='w-100' src={require('../Components/images/Untitled-1 (1).png')} alt="" />
     
   </Tilt>
   </div>
   
  
  </div>
</div>
</div>
</>


  );
};











export default Banner;
