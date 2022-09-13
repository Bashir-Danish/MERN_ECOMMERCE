import React from 'react'

function SubCategory() {
  return (
    <div className='f-filterDiv'>
      <div className="f-checkboxes">
        <div className="f-checkbox">
          <label htmlFor="dresses"  className='f-filterLabel'>Dresess</label>
          <input type="checkbox"  name=""className='f-check' id="dresses" />
        </div>
        <div className="f-checkbox">
          <label htmlFor="jeans" className='f-filterLabel'>Jeans</label>
          <input type="checkbox"  name="" className='f-check' id="jeans" />
        </div>
        <div className="f-checkbox">
          <label htmlFor="t-shirt" className='f-filterLabel'>T-shirt</label>
          <input type="checkbox"  name="" className='f-check' id="t-shirt" />
        </div>
      </div>
    </div>
  )
}

export default SubCategory