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
      <br/> <br/>
      <h1><strong>Cigar Name:&nbsp;<u className="underline">{stog.name}</u></strong></h1>

     <h2> <strong>Vitola:&nbsp;&nbsp;<u className="underline">{stog.vitola}</u></strong>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>Length:&nbsp;<u className="underline">{stog.length}</u></strong>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>Ring Gauge:&nbsp;<u className="underline">{stog.gauge}</u></strong>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <strong>Strength:&nbsp;<u className="underline">{stog.strength}</u></strong> 
      &nbsp;&nbsp;&nbsp;&nbsp;
      <u className="underline">{stog.is_favorite ? <span className="glow">⭐️</span> : null}</u> 
      </h2>
      <br/>&nbsp;<Link to={`/stogs`}><br/><br/><button>Back</button></Link>
    <button onClick={handleDelete}>Delete</button>
    <Link to={`/stogs/${id}/edit`}> 
    <button>Edit Cigar Info</button></Link>
    </div>

  )
}

export default StogDetails;