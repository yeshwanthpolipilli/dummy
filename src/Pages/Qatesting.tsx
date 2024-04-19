import React from 'react'
import '../Components/style.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Footer from '../Components/Footer';
import Animationsquare from '../Components/Animationsquare';
import Contactbanner from '../Components/Contactbanner';


function Qatesting() {
    React.useEffect(() => {
        AOS.init();
      }, []);

  return (
   <>
   
   <div className="container-fluid bg-white   text-dark p-5">
   <div className="container ">
    <div className="row">
      <div className="col-md-5" data-aos="fade-left" data-aos-duration="1000">
      <img className='w-100 mt-3' src={require('../Components/images/RECREATE PYTHON.webp')} alt="" />
      </div>

      <div className="col-md-7">
        <div className="container mx-sm-5">
        <h2 className='mt-5 text-center text-dark'>
       Qa Testing
        </h2>

        <p>
        Unleash Your Python Potential: Master the Language, Land Your Dream Job
Master Python Programming & Launch Your Tech Career

        </p>
        <p className='python-para my-5 mx-auto'>
     
     
     Are you ready to unlock the power of Python and become a highly sought-after programmer? Our comprehensive Python mastery course with training and placement is designed to equip you with skils and knowledge to excel in today's dynamic tech landscape </p>
        </div>
  </div>
    </div>
 
   </div>
   </div>
   


{/* cards python starts */}

<div className="container-fluid p-5">

<h1 className='fs-4 my-3 mx-5 text-dark fw-semibold text-center text-decoration-underline'>Why Choose Our Qa Testing Course?</h1>

<div className="container d-flex flex-wrap justify-content-center">
    <div className="flex-item ">
        <div>
        <div className="card card-run">
           
        <img className='w-100 ' src={require('../Components/images/qa1.webp')} alt="" />
      <p className="card-title1">  	Become a Bug  Hunter</p>
      <p className="small-desc">
     Master the art of manual testing, uncovering defects and ensuring software functionality meets expectations. </p>
    
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
    </div>

    <div className="flex-item ">
        <div>
        <div className="card card-run">
        <img className='w-100 ' src={require('../Components/images/qa2.webp')} alt="" />
     
      <p className="card-title1 mt-2">Test Like a Pro</p>
      <p className="small-desc">
      Learn industry-standard testing methodologies and best practices.
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
    </div>

    <div className="flex-item ">
        <div>
        <div className="card card-run">
   
        <img className='w-100 ' src={require('../Components/images/qa4.webp')} alt="" />
      <p className="card-title1 my-2">Project-Based Learning </p>
      <p className="small-desc">
      Apply your newfound skills by testing real-world software applications.
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
    </div>

    <div className="flex-item ">
        <div>
        <div className="card card-run">
        <img className='w-100 ' src={require('../Components/images/qa3.webp')} alt="" />
      <p className="card-title1">	Career Catalyst</p>
      <p className="small-desc">
      Benefit from resume guidance, interview preparation, and job placement assistance to launch your QA testing journey.
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
    </div>
</div>
</div>


{/* cards python ends  */}



<Animationsquare/>


{/* faq */}

<Contactbanner/>
{/* faq */}



   
  
        {/* footer starts here  */}
        <Footer/>

        {/* footer ends here  */}
   </>
  )
}

export default Qatesting
