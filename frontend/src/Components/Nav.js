import React from 'react'
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div>
      <Link to="/" ><h1>Home</h1></Link>
      <Link to={`/stogs/new`}><h3>Add Cigars</h3></Link>
      </div>
  )
}

export default Nav;