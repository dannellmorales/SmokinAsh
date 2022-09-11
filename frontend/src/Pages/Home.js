import React from 'react'
import { Link } from "react-router-dom";
import Vid from "../Components/Video/Vid.mp4"

function Home() {
  return (
    <div className="home">
          <strong>
            <h1 className="HomeTitle">
              Welcome To Smokin Ash
            </h1></strong>
          <Link to={`/stogs/`}>
            <h4 className="cList">Cigar List</h4>
          </Link>
      <video autoPlay loop muted 
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
  )
}

export default Home


