import React from 'react'
import { useParams } from "react-router-dom";
import Hello from '../Components/images/pagenotfound.avif'


function Pagenotfound() {
    let Yeshua = useParams();
 
  
  return (
    <>

      <style>
     
        {`
    
       .yeah
      {
        color:red;
        font-size:40px
        font-family:Poppins;
      }
      .yeah1
      {
        margin-top:100px
      }
      .banner_img5
      {
        width:0px
      }
     
        
        `}
      </style>
      <div className="container">
      
       
        <div className="row">
            <div className="col-md-6 yeah1">
            <h1 className="display-1 text-danger">   <span className="yeah ">{Yeshua.name} This page is not found</span> </h1>
            </div>
            <div className="col-md-6">
            <div><img className="banner_img5 my-3 w-100"  src={Hello} alt="404 error" />
            </div>
        </div>
        
       </div>
       
      </div>
    </>
  )
}

export default Pagenotfound
