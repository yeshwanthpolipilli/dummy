import React from 'react'
import '../Components/style.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Footer from '../Components/Footer';


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
   
   
   {/* qatesting course banner3 starts here */}

<div className="container-fluid bg-light  text-dark p-5">



{/* qatesting corse banner3 ends here  */}



{/* qatesting course banner4 starts here */}

<div className="container mt-5">
  <div className="row">
    <div className="col-md-5 ">
      <img className='w-100 ' src={require('../Components/images/qa1.webp')} alt="" />
    </div>
    <div className="col-md-7 mt-5 mx-auto d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
    <h2 className=' text-center text-dark'>
    	Become a Bug Bounty Hunter
        </h2>

      
        <p className='python-para my-5 '>
     
     
        Master the art of manual testing, uncovering defects and ensuring software functionality meets expectations.</p>    </div>
  </div>
</div>



{/* qatesting corse banner4 ends here  */}



{/* qatesting course banner3 starts here */}


<div className="container mt-5 overflow-hidden">
  <div className="row">
    <div className="col-md-7 d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
        <h2 className=' text-center text-white'>
        Test Like a Pro
        </h2>
        <p className='python-para my-5 '>
        Learn industry-standard testing methodologies and best practices.</p> 
    </div>
    <div className="col-md-5 mt-5 mx-auto">
  
     <img className='w-100 ' src={require('../Components/images/qa2.webp')} alt="" />
    </div>
  </div>
</div>


{/* qatesting corse banner3 ends here  */}




{/* qatesting course banner4 starts here */}

<div className="container mt-5">
  <div className="row">
    <div className="col-md-5">
      <img className='w-100 ' src={require('../Components/images/qa3.webp')} alt="" />
    </div>
    <div className="col-md-7 mt-5 mx-auto  d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
    <h2 className=' text-center text-white'>
    	Automation Fundamentals 
        </h2>

      
        <p className='python-para my-5 '>
     
     
        Gain an introduction to test automation tools for enhanced efficiency (offered in select course packages).</p> 

    </div>
  </div>
</div>



{/* qatesting corse banner4 ends here  */}

{/* qatesting course banner3 starts here */}


<div className="container mt-5 overflow-hidden">
  <div className="row">
    <div className="col-md-7 d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
        <h2 className=' text-center text-white'>
        	Project-Based Learning
        </h2>
        <p className='python-para my-5 '>
        Apply your newfound skills by testing real-world software applications.</p> 
    </div>
    <div className="col-md-5 mt-5 mx-auto">
  
     <img className='w-100 ' src={require('../Components/images/qa4.webp')} alt="" />
    </div>
  </div>
</div>


{/* qatesting corse banner3 ends here  */}

{/* qatesting course banner4 starts here */}

<div className="container mt-5">
  <div className="row">
    <div className="col-md-5">
      <img className='w-100 ' src={require('../Components/images/qa3.webp')} alt="" />
    </div>
    <div className="col-md-7 mt-5 mx-auto  d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
    <h2 className=' text-center text-white'>
     Career Catalyst
        </h2>

      
        <p className='python-para my-5 '>
     
     
        Benefit from resume guidance, interview preparation, and job placement assistance to launch your QA testing journey.</p> 

    </div>
  </div>
</div>



{/* qatesting corse banner4 ends here  */}


</div>

<div className="container overflow-hidden">


<div className="b-shape-1 ">
          <img src={require("../Components/images/shape-1.png")} alt="" />
        </div>
        <div className="b-shape-2">
          <img src={require("../Components/images/shape-2.png")} alt="" />
        </div>
        <div className="b-shape-3">
          <img src={require("../Components/images/shape-3.png")} alt="" />
        </div>
        <div className="b-shape-4">
          <img className='w-25' src={require("../Components/images/shape-4.png")} alt="" />
        </div>
        </div>




        {/* footer starts here  */}
        <Footer/>

        {/* footer ends here  */}
   </>
  )
}

export default Qatesting
