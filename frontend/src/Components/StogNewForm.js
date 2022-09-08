import axios from "axios";
import { useState} from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function StogNewForm () {
  const navigate = useNavigate();
  let { id } = useParams();

  const [stog, setStog] = useState({
    name: "",
    vitola: "",
    length: 0,
    gauge: 0,
    strength: "",
    vintage: 0,
    image: "",
    is_favorite: false
  });

  const handleTextChange = (e) => {
    setStog({ ...stog, [e.target.id]: e.target.value });
  };

  
  const createStog = (createdStog, id) => {
    axios
      .post(`${API}/stogs`, createdStog)
      .then(() => {
        navigate(`/stogs`);
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
    createStog(stog);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={stog.name}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="vitola">Cigar vitola: </label>
        <input
          id="vitola"
          value={stog.vitola}
          type="text"
          onChange={handleTextChange}
          placeholder="Cigar vitola"

        />
        <label htmlFor="length">Length: </label>
        <input
          id="length"
          value={stog.length}
          type="integer"
          onChange={handleTextChange}
          placeholder="Cigar Length"

        />
        <label htmlFor="gauge">Gauge: </label>
        <input
          id="gauge"
          value={stog.gauge}
          type="integer"
          onChange={handleTextChange}
          placeholder="Enter Cigar Ring Gauge"
        />
        <label htmlFor="strength">Strength: </label>
        <input
          id="strength"
          value={stog.strength}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter Mild, Medium, Mild to Medium, Medium, Medium to Full or Full"
        />
        <label htmlFor="image">Image </label>
        <input
          id="image"
          type="text"
          onChange={handleTextChange}
          checked={stog.image}
        />
        <label htmlFor="is_favorite">Check Here To Indicate Favorite: </label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={stog.isFavorite}
        />
        <br />
        <input type="submit" />

      </form>

    </div>
  )
}

