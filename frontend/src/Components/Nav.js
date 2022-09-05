import React from 'react'
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div>
      Nav
      <Link to="/" ><h1>Smokin Ash</h1></Link>
      <Link to="/finder" ><h1>CigarShoppe Finder</h1></Link>
      <Link to={`/stogs/new`}> Add Cigars</Link>
      </div>
  )
}

export default Nav;