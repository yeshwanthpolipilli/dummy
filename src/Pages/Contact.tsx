import React from "react";
import "../Pages/contact.css";
import Footer from '../Components/Footer';
import Tilt from "react-parallax-tilt";
import Faq from "./Faq";

function Contact() {
  return (
    <>
{/* banner starts here  */}
<div className="container-fluid bg-light p-5">
<div className="container">
  <div className="row  ">
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      <h1 className="contact-banner-heading " >CONTACT US</h1>
      <h5 className="contact-subheading">Let's connect! Your thoughts matter. Reach out to us anytime.</h5>
      <p className="contact-para">Get in touch with us effortlessly. Whether you have questions, feedback, or just want to chat, we're here to listen and assist you every step of the way.</p>
    </div>
    <div className="col-lg-6 text-center">
      <Tilt>
      <img className=" w-75 " src={require('../Components/images/banner-conatct2.png')} alt="" />
      </Tilt>
    </div>
  </div>
</div>

</div>







    {/* banner ends here  */}
      <div className="map ">
        <div className="row ">
          <div className="col-lg-6">
            <img
              className="w-100"
              src={require("../Components/images/map.jpg")}
              alt=""
            />
          </div>
          <div className="col-lg-6 gapper p-5">
            <h3 className="contact-heading">Let's Get in touch</h3>
            <p className="contact-sub-heading">Connecting is just the beginning. Reach out, and let's start a conversation.</p>
            <form className="row g-3 my-4">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control inputs-class rounded-0 " />
              </div>
              <div className="col-md-6 ">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control rounded-0"  />
              </div>
              <div className="col-12 ">
              <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control rounded-0 email-class"
                  id="inputAddress"
                 
                />
              </div>
              <div className="col-12">
              <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control rounded-0 email-class"
                  id="inputAddress2"
                 
                />
              </div>
              <div className="col-12">
              <label className="form-label">Your Message</label>

                <textarea
                  className="form-control rounded-0 email-class"
                  id="exampleFormControlTextarea1"
                 
                ></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn contact-btn  rounded-0 ">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


      {/* <div className='container p-2'>
    <h2 className='faq text-center p-5'>Frequently Asked Questions</h2>


   
        <div className="accordion" id="accordionExample " >
      <div className="accordion-item border-0 p-3">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button p-4  main-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
          <button className="accordion-button p-4 collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
          <button className="accordion-button p-4 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
    
    </div> */}

<Faq/>




 <div className="mt-5">
 <Footer/>
  </div>  
    </>
  );
}

export default Contact;