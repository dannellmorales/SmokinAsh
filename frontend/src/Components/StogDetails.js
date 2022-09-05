import { useState, useEffect, useInsertionEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FOF from "../Pages/FOF";

const API = process.env.REACT_APP_API_URL;


function StogDetails() {
  const [stog, setStog] = useState({})
  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/stogs/${id}`)
      .then((res) => setStog(res.data.payload))
      .catch((err) => navigate(<FOF/>))
  },[id]);

const handleDelete = () =>{
  axios.delete(`${API}/stogs/${id}`)
    .then(() => navigate(`/stogs`))
    .catch((err) => console.error(err));
}

  return (
    <div> 
      <img className="" alt={stog.name} src={stog.image} />
      {stog.name} {stog.brand} {stog.length} &nbsp; {stog.gauge} {stog.strength} {stog.vintage} {stog.isFavorite}
    <Link to={`/stogs`}> <button>Back</button></Link>
    <button onClick={handleDelete}>Delete</button>
    <Link to={`/stogs/${id}/edit`}> 
    <button>Edit Cigar Info</button></Link>
    </div>

  )
}

export default StogDetails;