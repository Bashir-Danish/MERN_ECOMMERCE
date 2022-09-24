import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Star({filterRatings,rating}) {
 
  return (
    <div className="f-filterDiv">
      <div className="f-buttons">
        {
          rating.map((star)=>(
            <button className="f-button star" onClick={() => filterRatings(star.label)} key={star._id}>
              {star.label} &#9733;
              </button>
          ))
        }
      </div>
    </div>
  )
}

export default Star