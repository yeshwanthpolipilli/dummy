import React, { useState } from 'react';
import '../Components/style.css'; // CSS file for styling
import { Link } from 'react-router-dom';
import { MdAddCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
<div className="container-fluid topbgm w-100 text-white">
<div className="row text-center">
  <div className="col-lg-6">
 <div className="container">
  <div className="row d justify-content-center">
    <div className="col-md-4 "><span className='fs-8  '><MdAddCall /></span> &nbsp;91 9012547820  &nbsp;<span className='border border-right'></span></div>
    <div className="col-md-4"><span className='fs-8'><MdAddCall /></span> &nbsp;91 9012547820 &nbsp;<span className='border border-right'></span></div>
    <div className="col-md-4"><span className='fs-8 '><IoLogoWhatsapp /></span> &nbsp;91 9012547820 &nbsp;<span className='border border-right'></span></div>
  </div>
 </div>
  </div>
  <div className="col-lg-3"><p className='my-1'> Sculpting Key Programmers</p></div>
  <div className="col-lg-2">
    <span className='fs-5'>   &nbsp;    <MdFacebook /></span>
    <span className='fs-5'>   &nbsp;  <IoLogoInstagram /></span>
    <span className='fs-5'>    &nbsp; <FaTwitter /></span>
    <span className='fs-5'>    &nbsp;   <IoLogoWhatsapp /></span>
  </div>
</div>
</div>

     <nav className=" navbar position-sticky w-100 z-1 ">
     
      <div className="navbar-logo">
        <img className='lg' src={require('../Components/images/lg1.png')} alt="" />
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
  <Link className='nav-link' to="/Home">Home</Link>
        <Link className='nav-link' to="/Aboutus">Aboutus</Link>
        <div className="nested-snippets">
          <a href="">All Courses <IoMdArrowDropdown /> </a>
          <div className="nested-links">
            <Link className='nav-link text-white pyt' to="/PythonCourse" >Python Mastery</Link>
            <Link className='nav-link text-white pyt' to="/Fullstackdevelopment" >Full Stack Development</Link>
            <Link className='nav-link text-white pyt' to="/Qatesting" >QA Testing</Link>
            <Link className='nav-link text-white pyt' to="/Sqlexpertise" >SQL Expertise</Link>
         
          </div>
        </div>
        <Link className='nav-link' to="/Corporate">Corporate Training</Link>
        <Link className='nav-link' to="/Blog">Blog</Link>
        <a className='us' href="#">  <Link className='nav-link ' to="/Contactus">Contact us</Link></a>  
      </div>
      <div className="navbar-button">
      <p className='card-text getcode'> <Link className='nav-link' to="/Contact">Contact us</Link></p>
      </div>
   
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
   
    </>
   
  );
};

export default Navbar;