import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SubCategory() {
  const [subcategory, setSubategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const subcategories = await axios.get('/api/v1/subcategories/all');
      setSubategory(subcategories.data);
    }
    fetchData();
  }, []);
  return (
    <div className='f-filterDiv'>
      <div className="f-checkboxes">
        {
          subcategory.map((sub)=>(
            <div className="f-checkbox" key={sub._id}>
            <label htmlFor={sub.label} className='f-filterLabel'>{sub.label}</label>
            <input type="checkbox" name="" className='f-check' id={sub.label} />
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default SubCategory