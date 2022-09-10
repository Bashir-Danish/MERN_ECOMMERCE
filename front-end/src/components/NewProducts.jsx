import React from 'react'
import NewProduct from './NewProduct'

function NewProducts() {
  return (
    <div className='npc-container'>
        <div className="npc-row">
            <h2 className='npc-title'>New Products</h2>
        </div>
        <div className="npc-row">
            <div className="npc-groups">
                <NewProduct/>
                <NewProduct/>
                <NewProduct/>
                <NewProduct/>
            </div>
        </div>
    </div>
  )
}

export default NewProducts