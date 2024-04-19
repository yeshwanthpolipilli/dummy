import React from 'react'
import '../Components/style.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import Footer from '../Components/Footer';
import '../Pages/corporate.css'
import Animationsquare from '../Components/Animationsquare';
import Faq from './Faq';
import Contactbanner from '../Components/Contactbanner';


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


{/* cards python starts */}

<div className="container-fluid p-5">

<h1 className='fs-4 my-3 mx-5 text-dark fw-semibold text-center text-decoration-underline'>Why Choose Our Python mastery Course?</h1>

<div className="container d-flex flex-wrap justify-content-center">
    <div className="flex-item ">
        <div>
        <div className="card card-run">
           
     <img className='w-100 PYTHON4' src={require('../Components/images/PYTHON1.webp')} alt="" />
      <p className="card-title1">     In-depth Curriculum</p>
      <p className="small-desc">
     Master the fundamentals and progress to advanced topics like  web development,machine learning. </p>
    
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
    </div>

    <div className="flex-item ">
        <div>
        <div className="card card-run">
        <img className='w-100 PYTHON4' src={require('../Components/images/PYTHON2.webp')} alt="" />
     
      <p className="card-title1 mt-2">Expert-Led Trainings</p>
      <p className="small-desc">
      Are you looking to take your skills to the next level?  Learn from seasoned professionals with proven industry experience.
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
        <img className='w-75  mx-auto' src={require('../Components/images/PYTHON3.webp')} alt="" />
      <p className="card-title1 mt-4"> Placement Assistance</p>
      <p className="small-desc">
      We provide dedicated guidance and support to help you and land your dream Python job  and Become successful.
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
        <img className='w-100 PYTHON4' src={require('../Components/images/PYTHON4.webp')} alt="" />
      <p className="card-title1">Hands-on Learning</p>
      <p className="small-desc">
      Build practical projects and solidify your understanding through real-world applications.
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


{/* Animationsquare */}
 
<Animationsquare/>


{/* Animationsquare */}

{/* faq */}

<Contactbanner/>
{/* faq */}



{/* footer starts here  */}

<Footer/>


{/* footer ends here  */}




 
</>






















  )
}

export default About
