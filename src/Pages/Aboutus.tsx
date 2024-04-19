import React from 'react'
import Tilt from 'react-parallax-tilt';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

import Footer from '../Components/Footer';
import Animationsquare from '../Components/Animationsquare';



function Aboutus() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>   

         

<div className="card text-bg-dark border  ">
          <img
         
            src={require("../Components/images/banner2 (2).png")}
            className="card-img abt-img  "
            alt="..."
          />
          <div className="card-img-overlay abt">
            <h1 className="card-title banner-title fw-semibold w-50 ">About Us</h1>
            <div className="d-flex abt-text ">
              <p className="card-text ">
                <a className="nav-link" href="">
                  Home
                </a>
              </p>
              <span>About Us</span>
            </div>
          </div>
        </div>
{/*  */}
      <div className="container banner3 my-5  overflow-hidden">
        <div className="row">
          
          <div className="col-lg-7 dummy"data-aos="fade-left" data-aos-duration="1000">
          <Tilt>
            <img
              className="banner3-img "
              src={require("../Components/images/about us.webp")}
              alt=""
            />
            </Tilt>
          </div>
          <div className="col-lg-5 banner3-heading mt-5  d-flex flex-column justify-content-center" data-aos="fade-right" data-aos-duration="1000">
            <h1>About Us</h1>
            <h2 style={{color:"#ff7456"}} className="my-3 ">
             Empowering change, one innovation at a time.
            </h2>
            <p>
            Devrootz Hub is your one-stop destination for empowering yourself with the latest tech skills and securing your dream job in the ever-evolving tech industry. We bridge the gap between education and employment by providing comprehensive training programs in trending technologies, coupled with dedicated placement assistance.
            </p> 
          <p className=' w-25 text-center more-know5 text-white'>Know More</p>
          </div>
        </div>
      </div>
      <Animationsquare/>
      {/* mission and vision starts here  */}

      <div className="ms ">
        <div className="container">
          <div className="container  ">
            <div className="row my-3"data-aos="fade-up" data-aos-duration="2000">
              <div className="col-lg-3">
                <h2 className="fw-semibold  mission text-center">
                  OUR MISSION
                </h2>
              </div>
              <div className="col-lg-9">
                <p className="ms-text">
                  Our mission is to empower individuals with the knowledge and
                  skills needed to excel in the ever-evolving field of
                  information technology. We are committed to providing
                  high-quality and comprehensive IT courses that are accessible
                  to students of all backgrounds.
                </p>
              </div>
            </div>
            <div className="ms-cards d-flex "data-aos="fade-up" data-aos-duration="2000">
              <img
                className="ms-card"
                src={require('../Components/images/mission1.png')}
                alt=""
              />
              <img
                className="ms-card"
                src={require('../Components/images/mission 2.png')}               
                 alt=""
              />
              <img
                className="ms-card"
                src={require('../Components/images/mission 3.png')}
                alt=""
              />
              <img
                className="ms-card"
                src={require('../Components/images/mission 4.png')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* vision starts here */}

      <div className="vision p-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="vision-title fw-semibold vision-head ">
                OUR VISION
              </h2>
              <p className="vision-text">
                Our vision is to be the premier provider of IT education,
                empowering students with cutting-edge knowledge and skills that
                shape the future of technology. We strive to inspire a
                generation of innovators, problem solvers, and digital leaders
                who drive positive change globally. Our commitment is to deliver
                world-class IT courses that not only prepare students for
                current industry demands but also equip them to anticipate and
                adapt to emerging technologies.
              </p>
            </div>
            <div className="col-lg-6"data-aos="fade-up" data-aos-duration="2000">
              <img
                className="w-100 mx-auto vs-img my-2"
                src={require('../Components/images/vision.webp')}               
                 alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* vision ends here */}

      {/* mission and vision ends here  */}

    

      {/* about ends here  */}



{/* footer starts here  */}
<Footer/>
{/* footer ends here  */}
 </>
  )
}

export default Aboutus
