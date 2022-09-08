import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function StogEdit() {
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/stogs/${id}`)
      .then((response) => setStog(response.data.payload))
      .catch((error) => { console.error(error) })
  }, [id, navigate]);

  const [stog, setStog] = useState({
    name: "",
    vitola: "",
    length: 0,
    gauge: 0,
    strength: "",
    isFavorite: false,
    image: "",
  });

  const handleChange = (e) => {
    setStog({ ...stog, [e.target.id]: e.target.value });
  };


  const updateStog = (updatedStog, id) => {
    axios
      .put(`${API}/stogs/${id}`, updatedStog)
      .then(() => {
        navigate(`/stogs/${id}`);
      },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleCheckboxChange = () => {
    setStog({ ...stog, is_favorite: !stog.is_favorite });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStog(stog, id);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={stog.name}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="vitola">Cigar vitola: </label>
        <input
          id="vitola"
          value={stog.vitola}
          type="text"
          onChange={handleChange}
          placeholder="Cigar vitola"

        />
        <label htmlFor="length">Length: </label>
        <input
          id="length"
          value={stog.length}
          type="integer"
          onChange={handleChange}
          placeholder="Cigar Length"

        />
        <label htmlFor="gauge">Gauge: </label>
        <input
          id="gauge"
          value={stog.gauge}
          type="integer"
          onChange={handleChange}
          placeholder="Enter Cigar Ring Gauge"
        />
        <label htmlFor="strength">Strength: </label>
        <input
          id="strength"
          value={stog.strength}
          type="text"
          onChange={handleChange}
          placeholder="Enter Mild, Medium, Mild to Medium, Medium, Medium to Full or Full"
        />

        <label htmlFor="image">Image </label>
        <input
          id="image"
          type="text"
          value={stog.image}
          onChange={handleChange}
          placeholder="Insert Pic URL Here"
        />
        <label htmlFor="isFavorite">Check Here To Indicate Favorite: </label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={stog.is_favorite}
        />
        <br />
        <input type="submit" />

      </form>

    </div>
  )
}






























