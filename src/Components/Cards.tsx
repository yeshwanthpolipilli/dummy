import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/cards.css'

function Cards() {
  return (
<>

<div className="container-fluid d-flex flex-wrap justify-content-center">
    <div className="flex-item m-4">
        <div>
        <div className="card card-mainn">
        <div className="bg-image hover-zoom">
        <img className=' mx-auto card-ima hover-zoom"' src={require('../Components/images/size1.png')} alt="" />
        </div>
  <div className="card-body">
    <h5 className="card-title text-danger"><Link className='nav-link' to="/PythonCourse">Python Mastery</Link></h5>
    <p className="card-text">Some quick example text to </p>
 
  </div>
</div>
        </div>
    </div>
    <div className="flex-item m-4">
        <div>
        <div className="card card-mainn ">
        <div className="bg-image hover-zoom">
        <img className=' mx-auto card-ima' src={require('../Components/images/RESTORE3.png')} alt="" />
        </div>
  <div className="card-body">
  <h5 className="card-title text-danger"> <Link className='nav-link' to="/Fullstackdevelopment">Fullstack Development</Link> </h5>
    <p className="card-text">Some quick example text to </p>
 
  </div>
</div>
        </div>
    </div>
    <div className="flex-item m-4">
        <div>
        <div className="card card-mainn ">
        <div className="bg-image hover-zoom">
        <img className=' mx-auto card-ima' src={require('../Components/images/RESTORE1.png')} alt="" />
        </div>
  <div className="card-body">
  <h5 className="card-title text-danger">QA Testing Proficiency </h5>
    <p className="card-text">Some quick example text to </p>
 
  </div>
</div>
        </div>
    </div>
    <div className="flex-item m-4">
        <div>
        <div className="card card-mainn ">
        <div className="bg-image hover-zoom">
  <img className=' mx-auto card-ima' src={require('../Components/images/RESTORE2.png')} alt="" />
        </div>
  <div className="card-body">
    <h5 className="card-title text-danger"><Link className='nav-link' to="/Qatesting">  <h5 className="card-title text-danger">SQL Expertise</h5></Link></h5>
    <p className="card-text">Some quick example text to </p>
 
  </div>
</div>
        </div>
    </div>
</div>

</>
  )
}

export default Cards

