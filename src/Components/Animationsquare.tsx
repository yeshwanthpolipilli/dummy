import React from 'react'
import '../Components/style.css'

function Animationsquare() {
  return (
  <>
  <div className="container overflow-hidden">


<div className="b-shape-1">
          <img src={require("../Components/images/shape-1.png")} alt="" />
        </div>
        <div className="b-shape-2">
          <img src={require("../Components/images/shape-2.png")} alt="" />
        </div>
        <div className="b-shape-3">
         <img   src={require("../Components/images/shape-3.png")} alt="" />
        </div>
        <div className="b-shape-4">
          <img className='w-50' src={require("../Components/images/shape-4.png")} alt="" />
        </div>
        </div>
  
  
  
  </>
  )
}

export default Animationsquare
