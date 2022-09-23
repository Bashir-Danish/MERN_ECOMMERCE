import React from 'react'

function Search({value ,changeInput}) {
  return (
    <div className='f-filterDiv'>
      <input type="text" name="" id="" className='f-filterInput' value={value} onChange={changeInput}/>
    </div>
  )
}

export default Search