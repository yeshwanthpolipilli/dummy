import React from 'react'
import '../Pages/faq.css'

function Faq() {
  return (
    <>
<div className='container p-2'>
    <h2 className='faq text-center p-5'>Frequently Asked Questions</h2>


   
        <div className="accordion" id="accordionExample " >
      <div className="accordion-item border-0 p-3">
        <h2 className="accordion-header" id="headingOne">
          <button className="main-btn p-4  " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           1. What types of training programs do you offer?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body border-0">
          We offer a wide range of courses covering various subjects including technology, business, creative arts, languages, and more. Our catalog is regularly updated to meet the demands of our users.
          </div>
        </div>
      </div>
      <div className="accordion-item border-0 p-3">
        <h2 className="accordion-header border-0" id="headingTwo">
          <button className="main-btn p-4 collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          2. Do I need any specific software or hardware to take the courses?
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse border-0" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body border-0">
          Most of our courses require only a standard internet connection and a web browser. Occasionally, certain courses may have specific software or hardware requirements, which will be clearly outlined in the course description.
          </div>
        </div>
      </div>
      <div className="accordion-item border-0 p-3">
        <h2 className="accordion-header border-0" id="headingThree">
          <button className="main-btn p-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            3. Is there a community or forum where I can interact with other learners?
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse border-0 collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body ">
          Yes, we encourage collaboration and discussion among our learners. Many of our courses feature discussion forums where you can ask questions, share insights, and connect with fellow learners and instructors.
          </div>
        </div>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Faq
