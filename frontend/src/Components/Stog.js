import React from 'react'
import {Link} from 'react-router-dom'


function Stog({stogie}) {
  
  return (
    <div>
       {stogie.is_favorite ? (
          <span className="glow">⭐️</span>
        ) : (
          null
        )}
     <Link to={`/stogs/${stogie.id}`}>Cigar Name<h2>{stogie.name}<br/>{stogie.vitola} <br/>{stogie.is_favorite}</h2><br/>
     </Link>
    </div>
  )
}

export default Stog