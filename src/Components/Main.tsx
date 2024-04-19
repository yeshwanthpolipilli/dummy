import React from 'react'
import '../Components/style.css'
import { FaArrowRight } from "react-icons/fa";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Cards from './Cards';
import Tilt from 'react-parallax-tilt'




function Main() {
      React.useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>


    <div className="container ">
    <h1 className=' fw-semibold online text-center text-decoration-underline '>
        Our Courses
    </h1>
  
   </div>

{/* banner 3 starts here */}
<div className="container  my-5 ">
      <div className="row mx-sm-5">
      
        <div className="col-lg-5 banner3-heading d-flex flex-column justify-content-center text-dark" >
          <h1 >I will stay with you until you pass your exam.</h1>
    <div>

 
<p className='py-3 greyyy'>Don't job hunt alone. We support you with training & guidance until you land your dream role.Your success is ours. We're with you every step of the way, until you're job-ready!</p>      

</div><p className=' w-25 text-center more-know1 text-white '>Know More</p>
        </div>
        <div className="col-lg-7 dummy"data-aos="zoom-in"data-aos-duration="3000">
   <Tilt>
   <img className="banner3-img w-100  mx-auto" src={require('../Components/images/landing home.webp')} alt="" />
   </Tilt>
         
        
        </div>
      </div>
    </div>

    {/* banner 3 ends here */}

<div data-aos="fade-up"data-aos-duration="2000">
<Cards/>
</div>


<div className="container viewall">
<p className='all mx-auto'>View All Courses  <span className='left-arrow'><FaArrowRight /></span></p>
</div>

<div className="container p-5">
<h1 className='  why fw-semibold my-5 text-center text-decoration-underline'>Why Choose us?</h1>
<div className="row"data-aos="fade-down"data-aos-duration="1000">
  <div className="col-md-3 iconsimg ">
    <img className='w-25 ' src={require('../Components/images/skill1.png')} alt="" />
    <div><h3 className='skill'>Real-time Training</h3></div>
    <div><p>Our courses are designed to provide practical, hands-on experience, ensuring you're ready to tackle real-world challenges.</p></div>
  </div>
  <div className="col-md-3 iconsimg">
  <img  className='w-25' src={require('../Components/images/Skill2.png')} alt="" />
  <div><h3 className='skill'>Industry Experts</h3></div>
<div><p>Learn from seasoned professionals with extensive industry experience,and main  gaining insights that go beyond the textbooks.</p></div>  </div>

  <div className="col-md-3 iconsimg">
  <img  className='w-25' src={require('../Components/images/Skill3.png')} alt="" />
  <div><h3 className='skill'>	Resume Building</h3></div>
    <div><p>Craft a standout resume that reflects your skills and accompliments.We guide you through the process of showcasing your strengths effectively.</p></div>
  </div>
  <div className="col-md-3 iconsimg">
  <img  className='w-25' src={require('../Components/images/Skill4.png')} alt="" />
  <div><h3 className='skill' >Interview Preparation</h3></div>
    <div><p>Excel in interviews with our tailored preparation sessions. From technical questions to behavioral assessments, we've got you covered.</p></div>

  </div>
  </div>
</div>



<div>
  <Testimonials/>
</div>


<Footer/>




    </>
 


  )
}

export default Main
