import React from 'react'
import Faq from '../Pages/Faq'

function Contactbanner() {
  return (
  <>
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
         

            <form className="row g-3 my-4" action="https://formspree.io/f/moqgppko"
  method="POST">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" name="name" className="form-control inputs-class rounded-0 " />
              </div>
              <div className="col-md-6 ">
                <label className="form-label">Last Name</label>
                <input type="text" name="name"  className="form-control rounded-0"  />
              </div>
              <div className="col-12 ">
              <label className="form-label">Email</label>
                <input
                name="email"
                  type="email"
                  className="form-control rounded-0 email-class"
                  id="inputAddress"
                 
                />
              </div>
              <div className="col-12">
              <label className="form-label">Phone Number</label>
                <input
                name="number"
                  type="text"
                  className="form-control rounded-0 email-class"
                  id="inputAddress2"
                 
                />
              </div>
              <div className="col-12">
              <label className="form-label">Your Message</label>

                <textarea
                name="message"
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


     

  <Faq/>
  
  
  
  </>
  )
}

export default Contactbanner
