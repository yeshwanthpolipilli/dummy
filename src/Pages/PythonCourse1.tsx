import React from 'react'
import '../Components/style.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Footer from '../Components/Footer';


function About() {

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
          Python Mastery
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




{/* python course banner3 starts here */}

<div className="container-fluid text-dark bg-light p-5">

<div className="container mt-5  ">
  <div className="row">
    <div className="col-md-7 mt-md-5 d-flex flex-column  justify-content-center" data-aos="fade-down" data-aos-duration="2000">
    <h2 className=' text-center text-dark'>
     In-depth Curriculum
        </h2>

      
        <p className='python-para my-5 '>
     
     
        Master the fundamentals and progress to advanced topics like data science, web development, and machine learning. </p>
    </div>
    <div className="col-md-5 mt-5 mx-auto">
  
     <img className='w-100 PYTHON4' src={require('../Components/images/PYTHON1.webp')} alt="" />
    </div>
  </div>
</div>


{/* python corse banner3 ends here  */}



{/* python course banner4 starts here */}

<div className="container mt-5">
  <div className="row">
    <div className="col-md-5 ">
      <img className='w-100 PYTHON4' src={require('../Components/images/PYTHON2.webp')} alt="" />
    </div>
    <div className="col-md-7 mt-5 mx-auto d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
    <h2 className=' text-center text-dark'>
    Expert-Led Training
        </h2>

      
        <p className='python-para my-5 '>
     
     
        Learn from seasoned professionals with proven industry experience.</p>    </div>
  </div>
</div>



{/* python corse banner4 ends here  */}



{/* python course banner3 starts here */}


<div className="container mt-5 overflow-hidden">
  <div className="row">
    <div className="col-md-7 d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
        <h2 className=' text-center text-dark'>
    Placement Assistance
        </h2>
        <p className='python-para my-5 '>
        We provide dedicated guidance and support to help you land your dream Python job.</p> 
    </div>
    <div className="col-md-5 mt-5 mx-auto">
  
     <img className='w-100 PYTHON4' src={require('../Components/images/PYTHON3.webp')} alt="" />
    </div>
  </div>
</div>


{/* python corse banner3 ends here  */}




{/* python course banner4 starts here */}

<div className="container mt-5">
  <div className="row">
    <div className="col-md-5">
      <img className='w-100 PYTHON4' src={require('../Components/images/PYTHON4.webp')} alt="" />
    </div>
    <div className="col-md-7 mt-5 mx-auto  d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
    <h2 className=' text-center text-dark'>
    	Hands-on Learning
        </h2>

      
        <p className='python-para my-5 '>
     
     
        Build practical projects and solidify your understanding through real-world applications.</p> 

    </div>
  </div>
</div>

</div>

{/* python corse banner4 ends here  */}







{/*  */}

 

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
          <img src={require("../Components/images/shape-4.png")} alt="" />
        </div>
        </div>




{/*  */}




{/* footer starts hre  */}

<Footer/>


{/* footer ends here  */}




 
</>






















  )
}

export default About
