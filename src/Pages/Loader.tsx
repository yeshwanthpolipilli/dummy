import React from "react";
import "../Components/Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="svg-wrapper">
        {/* copy svg image and past it here */}

          <title>Loader</title>
          <defs>
            <linearGradient id="ttb" y2="1">

                {/* if you are thinking how it is animating 
                    we have added animation to svg here 
                */}

              <stop offset="100%" stopOpacity="1" stopColor="#333">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
              <stop offset="100%" stopOpacity="1" stopColor="#E0E0E0">
                <animate
                  attributeName="offset"
                  values="0;1;1;0"
                  repeatCount="indefinite"
                  repeatDur="05:00"
                  dur="4s"
                  begin="0s"
                />
              </stop>
              
              {/* end */}

            </linearGradient>
          </defs>
         <img className="w-75 main-logo" src={require('../Components/images/lg.png')} alt="" />
      
        <div className="loading-text">DevRootz Hub...</div>
      </div>
    </div>
  );
};

export default Loader;