import React from 'react'
import { useState, useEffect } from "react";
import Stog from './Stog';
import axios from "axios";

const API = process.env.REACT_APP_API_URL; //location to 

function Stogies() {
  const [stogies, setStogies] = useState([]);
  
  useEffect(() => {
    axios.get(`${API}/stogs`)
      .then((response) => { setStogies(response.data.payload) })
      .catch((error) => { console.error(error) })
  },[])
  
  return (
    <div>
            {stogies.map((stogie) => {
              return <Stog key={stogie.id} stogie={stogie}  />;
            })}
       
    </div>
  );
}

export default Stogies

