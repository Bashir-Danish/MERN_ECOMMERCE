import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Star() {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const ratings = await axios.get('/api/v1/ratings/all');
      setRating(ratings.data);
    }
    fetchData();
  }, []);
  return (
    <div className="f-filterDiv">
      <div className="f-buttons">
        {
          rating.map((rate)=>(
            <button className="f-button star" key={rate._id}>{rate.label} &#9733;</button>
          ))
        }
      </div>
    </div>
  )
}

export default Star