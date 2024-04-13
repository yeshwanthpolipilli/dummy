import React from 'react'
import '../Pages/corporate.css'
import Animationsquare from '../Components/Animationsquare'
import Footer from '../Components/Footer'

function Corporate() {
  return (
    <>
    {/* banner section starts  */}
     <div className='container-fluid bg-light text-dark'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center text-dark mx-auto" >
                    <h1 className='fs-3'>
                    Unleash Your Workforce Potential: Empower Your Teams with Engaging
Corporate Training    </h1>
<p className='fs-6 pt-3'>In today's dynamic business landscape, a skilled and engaged workforce is the key to
sustainable success. But are your traditional training methods leaving your employees
yawning and disengaged? Here at [Your Company Name], we offer a refreshing
alternative – a world of engaging corporate training courses designed to empower
your teams and propel your business forward.</p>
                 
                </div>
                <div className="col-lg-5 d-flex flex-column justify-content-center">
                    <img className='w-100 my-5' src={require('../Components/images/corporate.png')} alt="" />
                </div>
            </div>
        </div>
     </div>

   {/* banner section ends  */}

   {/* why choose corporate training starts  */}

<div className="container-fluid p-5">

<h1 className='fs-4 my-3 mx-5 text-dark fw-semibold text-center'>Why Choose Our Corporate Training Programs?</h1>

<div className="container d-flex flex-wrap justify-content-center">
    <div className="flex-item ">
        <div>
        <div className="card card-run">
            <img src={require('../Components/images/topp-01.png')} alt="" />
      <p className="card-title1">We Don't Do Boring!</p>
      <p className="small-desc">
      Ditch the stale lectures and monotonous presentations.
Our interactive training programs are designed to be fun, engaging, and packed
with practical applications.
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
            <img src={require('../Components/images/topp-01.png')} alt="" />
      <p className="card-title1">Tailored to Your Needs</p>
      <p className="small-desc">
      We don't believe in a  approach. We
work closely with you to identify your specific challenges and develop custom
training solutions that target your unique requirements.
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
            <img src={require('../Components/images/topp-01.png')} alt="" />
      <p className="card-title1">World-Class Expertise</p>
      <p className="small-desc">
      Our team of experienced trainers and instructional
designers are passionate 
We go beyond just delivering training about creating impactful with learning experiences.
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
            <img src={require('../Components/images/topp-01.png')} alt="" />
      <p className="card-title1">Measurable Results</p>
      <p className="small-desc">
      We go beyond just delivering training. We help you track
progress, measure success, and ensure a true return on your training
investment experiences.
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
        </div>
    </div>
  
</div>
</div>

<div>
   <Animationsquare/>
   </div>
   {/* why choose corporate training ends  */}
  


<div className='pt-3'>

<Footer/>
</div>

    </>
  )
}

export default Corporate
