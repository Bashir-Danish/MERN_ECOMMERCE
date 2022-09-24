import React from 'react'
function SubCategory({ subCategory, changeChecked }) {

  return (
    <div className='f-filterDiv'>
      <div className="f-checkboxes">
        {
          subCategory.map((sub) => (
            <div className="f-checkbox" key={sub._id}>
              <label htmlFor={sub.label} className='f-filterLabel'>{sub.label}</label>
              <input type="checkbox" name="" className='f-check' id={sub.label} checked={sub.checked}
                onChange={() => changeChecked(sub._id)} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SubCategory