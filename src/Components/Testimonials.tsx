import React from 'react'
import { FaStar } from "react-icons/fa";
import '../Components/Testimonails.css'

function Testimonials() {
  return (
 <>
{/* testimonials starts here */}

<div className="tm_main container">
       <div className="container p-5 ">
            <h6 className="test-head fw-semibold text-center">TESTIMONIALS</h6>
            <h2 className="fw-semibold text-center my-3">
              Students testimonials
            </h2>
            <p className="text-center ">
              Our approach thrives at the intersection between data-driven
              market <br />
              research and traditional management consultancies.
            </p>
          </div>
      <div className="row d-flex mx-auto tm-bg w-100">
        <div className="col-lg-4 ">
        <div className="card border-0  p-3" >
            <img src="https://wp.dynamiclayers.net/enova/wp-content/uploads/sites/4/2021/08/testimonial01.jpg" className=" rounded-circle card-img-top w-50  d-block mx-auto" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-title text-center">Card title</p>

              <p className="card-text text-center tm-para">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="text-center ">
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 ">
        <div className="card  shadow border-0  p-3" >
            <img src="https://wp.dynamiclayers.net/enova/wp-content/uploads/sites/4/2021/08/testimonial01.jpg" className=" rounded-circle card-img-top w-50  d-block mx-auto" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-center">kenpachi</h5>
              <p className="card-title text-center">Card title</p>

              <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="text-center">
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar/>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
        <div className="card border-0  p-3 d-block" >
            <img src="https://wp.dynamiclayers.net/enova/wp-content/uploads/sites/4/2021/08/testimonial01.jpg" className=" tm-img rounded-circle card-img-top w-50  d-block mx-auto" alt="..."/>
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
              <p className="card-title text-center">Card title</p>

              <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="text-center ratings ">
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
                <FaStar className="text-danger"/>
              </p>
              
            </div>
          </div>
        </div>
      </div>
       </div>

        {/* testimonials ends here */}
 
 </>
  )
}

export default Testimonials
