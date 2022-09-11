import React from 'react'
import { Link } from 'react-router-dom'
import Vid from "../Components/Video/nite.mp4"

function Stog({ stogie }) {

  return (
    <div className="List">
      
   <Link  className="BG" to={`/stogs/${stogie.id}`}>
   <h4>
    <br/>{stogie.name}
    <br/>{stogie.vitola} 
    <br/>{stogie.is_favorite}
    </h4>
    {stogie.is_favorite ? (
          <span>⭐️</span>
        ) : (
          null
        )}
        </Link>
        
        <video className="Me" autoPlay loop muted 
      style={{
              position: "absolute", 
              width:"100%",
              left:"50%", 
              top:"50%", 
              height:"100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1"
              }}> <source src={Vid} type="video/mp4"/>
      </video>
     </div>
  );
}

export default Stog;