import React from 'react'
import {Link} from 'react-router-dom'


function Stog({stogie}) {
  
  return (
    <div>
     <Link to={`/stogs/${stogie.id}`}>{stogie.name} {stogie.brand} {stogie.length} &nbsp; {stogie.gauge} {stogie.strength} {stogie.vintage} {stogie.isFavorite}
     </Link>
    </div>
  )
}

export default Stog