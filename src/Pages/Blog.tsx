import React from 'react'
import {
    FaStar,
    FaLongArrowAltRight,
    FaRegClock,
    FaComment,
  } from "react-icons/fa";
  import { GoDotFill } from "react-icons/go";

function Blog() {
  return (
   <>
   {/* blog starts here */}

      <div className="blog-banner">
        <div className="card bg-dark text-white border-0 rounded-0">
        
           <img
                className="item1_img w-100"
                src={require("../Components/images/blog banner.jpg")}
                alt=""
              />
          <div className="card-img-overlay">
            <h2 className="card-title text-center blog_heading ">BLOG</h2>
            <div className="d-flex blog_text">
              <a
                className="card-text text-center text-danger nav-link "
                href=""
              >
                Home
              </a>
              <p className="card-text text-center text-danger blog_text1 fa-5 ">
                <GoDotFill />
              </p>
              <p className="card-text text-center text-danger "> Blog</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container blog-cards">
        <div className="row">
          <div className="col-lg-4">
            <div className="item1">
              <img
                className="item1_img w-100"
                src={require("../Components/images/blogimggg.jpg")}
                alt=""
              />
              <div className="b-post-deatils">
                <div className="bp-meta">
                  <span className="d-flex">
                    <span className="clock">
                      <FaRegClock className="clock-icon" />
                    </span>
                    <p>April 12 2022</p>
                  </span>
                  <span className="d-flex">
                    <span className="cmnt">
                      <FaComment className="cmnt-icon" />
                    </span>
                    <p>6 comments</p>
                  </span>
                </div>
                <div className="item-details">
                  <h3>Lorem ipsum dolor sit amet dolor sit amet.</h3>
                  <div className="d-flex rd-content">
                    <a className="nav-link read-more" href="">
                      Read More
                    </a>
                    <a className="nav-link" href="">
                      {" "}
                      <FaLongArrowAltRight className="read-more-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item1">
            <img
                className="item1_img w-100"
                src={require("../Components/images/blogimggg.jpg")}
                alt=""
              />
              <div className="b-post-deatils">
                <div className="bp-meta">
                  <span className="d-flex">
                    <span className="clock">
                      <FaRegClock className="clock-icon" />
                    </span>
                    <p>April 12 2022</p>
                  </span>
                  <span className="d-flex">
                    <span className="cmnt">
                      <FaComment className="cmnt-icon" />
                    </span>
                    <p>6 comments</p>
                  </span>
                </div>
                <div className="item-details">
                  <h3>Lorem ipsum dolor sit amet dolor sit amet.</h3>
                  <div className="d-flex rd-content">
                    <a className="nav-link read-more" href="">
                      Read More
                    </a>
                    <a className="nav-link" href="">
                      {" "}
                      <FaLongArrowAltRight className="read-more-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item1">
            <img
                className="item1_img w-100"
                src={require("../Components/images/blogimggg.jpg")}
                alt=""
              />
              <div className="b-post-deatils">
                <div className="bp-meta">
                  <span className="d-flex">
                    <span className="clock">
                      <FaRegClock className="clock-icon" />
                    </span>
                    <p>April 12 2022</p>
                  </span>
                  <span className="d-flex">
                    <span className="cmnt">
                      <FaComment className="cmnt-icon" />
                    </span>
                    <p>6 comments</p>
                  </span>
                </div>
                <div className="item-details">
                  <h3>Lorem ipsum dolor sit amet dolor sit amet.</h3>
                  <div className="d-flex rd-content">
                    <a className="nav-link read-more" href="">
                      Read More
                    </a>
                    <a className="nav-link" href="">
                      {" "}
                      <FaLongArrowAltRight className="read-more-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item1">
            <img
                className="item1_img w-100"
                src={require("../Components/images/1 (1).png")}
                alt=""
              />
              <div className="b-post-deatils">
                <div className="bp-meta">
                  <span className="d-flex">
                    <span className="clock">
                      <FaRegClock className="clock-icon" />
                    </span>
                    <p>April 12 2022</p>
                  </span>
                  <span className="d-flex">
                    <span className="cmnt">
                      <FaComment className="cmnt-icon" />
                    </span>
                    <p>6 comments</p>
                  </span>
                </div>
                <div className="item-details">
                  <h3>Lorem ipsum dolor sit amet dolor sit amet.</h3>
                  <div className="d-flex rd-content">
                    <a className="nav-link read-more" href="">
                      Read More
                    </a>
                    <a className="nav-link" href="">
                      {" "}
                      <FaLongArrowAltRight className="read-more-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* blog ends here */}
   
   
   
   
   </>
  )
}

export default Blog
