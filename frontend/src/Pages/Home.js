import React from 'react'
import { Link } from "react-router-dom";
import List from './List';
function Home() {
  return (
    <div>
        <p><strong>Welcome Smokin Ash</strong></p>
        <Link to={`/stogs`}> <button>List of Cigars</button></Link>
    </div>
  )
}

export default Home