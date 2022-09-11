import React from 'react'
import Stogies from '../Components/Stogies'
import { Navigation } from '../Components/Navigation';
function List() {
  return (
    <div className="StogList">
        <h1 className="StogList2"><u>List of Cigars</u></h1>
    <Stogies/>
    </div>
  )
}

export default List;