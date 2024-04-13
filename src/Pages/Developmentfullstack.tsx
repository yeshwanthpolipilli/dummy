import React from 'react'
import '../Components/style.css'
import Footer from '../Components/Footer';

function Developmentfullstack() {
  return (
    <>
    <div className="container">
     <div className="row">
       <div className="col-md-6">
       <img className='w-75 mt-4' src={require('../Components/images/full stack.webp')} alt="" />
       </div>
       <div className="col-md-6  d-flex flex-column  justify-content-center">
         <h2 className='mt-5 text-center text-danger'>
        Full Stack Development
         </h2>
         <p className='python-para'>
         Dive into the world of Python programming with our comprehensive courses. Whether you're a beginner or looking to enhance your skills, our expert-led sessions cover everything from basics to advanced topics.
         </p>
       </div>
     </div>
  
    </div>
 
 {/* python course banner3 starts here */}

<div className="container-fluid bg-light text-dark mt-3 text-white p-5">

<div className="container mt-5  ">
  <div className="row">
    <div className="col-md-7 mt-md-5 d-flex flex-column  justify-content-center" data-aos="fade-down" data-aos-duration="2000">
    <h2 className=' text-center text-dark'>
     In-depth Curriculum
        </h2>

      
        <p className='python-para my-5 text-dark'>
     
     
        Master the fundamentals and progress to advanced topics like data science, web development, and machine learning. </p>
    </div>
    <div className="col-md-5 mt-5 mx-auto ">
  
     <img className='w-100 ' src={require('../Components/images/stack1.webp')} alt="" />
    </div>
  </div>
</div>


{/* python corse banner3 ends here  */}



{/* python course banner4 starts here */}

<div className="container mt-5">
  <div className="row">
    <div className="col-md-5 ">
      <img className='w-100 PYTHON4' src={require('../Components/images/stack2.webp')} alt="" />
    </div>
    <div className="col-md-7 mt-5 mx-auto d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
    <h2 className=' text-center text-dark'>
    Expert-Led Training
        </h2>

      
        <p className='python-para my-5  text-dark'>
     
     
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
        <p className='python-para my-5 text-dark'>
        We provide dedicated guidance and support to help you land your dream Python job.</p> 
    </div>
    <div className="col-md-5 mt-5 mx-auto">
  
     <img className='w-100 ' src={require('../Components/images/stack3.webp')} alt="" />
    </div>
  </div>
</div>


{/* python corse banner3 ends here  */}




{/* python course banner4 starts here */}

<div className="container mt-5">
  <div className="row">
    <div className="col-md-5">
      <img className='w-100 ' src={require('../Components/images/stack4.webp')} alt="" />
    </div>
    <div className="col-md-7 mt-5 mx-auto  d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
    <h2 className=' text-center text-dark'>
    	Hands-on Learning
        </h2>

      
        <p className='python-para my-5 text-dark'>
     
     
        Build practical projects and solidify your understanding through real-world applications.</p> 

    </div>
  </div>
</div>


{/* python course banner3 starts here */}


<div className="container mt-5 overflow-hidden">
  <div className="row">
    <div className="col-md-7 d-flex flex-column  justify-content-center"data-aos="fade-down" data-aos-duration="2000">
        <h2 className=' text-center text-dark'>
    Placement Assistance
        </h2>
        <p className='python-para my-5 text-dark '>
        We provide dedicated guidance and support to help you land your dream Python job.</p> 
    </div>
    <div className="col-md-5 mt-5 mx-auto">
  
     <img className='w-100 ' src={require('../Components/images/satck5.webp')} alt="" />
    </div>
  </div>
</div>


{/* python corse banner3 ends here  */}





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










<Footer/>



  
 
 
 
  
 </>
  )
}

export default Developmentfullstack
