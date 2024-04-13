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
<div className="container mx-auto">
  <div className="row  ">
    <div className="col-lg-6 d-flex flex-column justify-content-center ">
      <h1 className="contact-banner-heading " >CONTACT US</h1>
      <h5 className="contact-subheading">Let's connect! Your thoughts matter. Reach out to us anytime.</h5>
      <p className="contact-para">Get in touch with us effortlessly. Whether you have questions, feedback, or just want to chat, we're here to listen and assist you every step of the way.</p>
    </div>
    <div className="col-lg-6 text-center ">
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
                <button type="submit" className=" contact-btn1 ">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


     
<div>

  <Faq/>
</div>





 <div className="mt-5">
 <Footer/>
  </div>  
    </>
  );
}

export default Contact;