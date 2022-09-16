import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Checkout = ({setOpen}) => {
  return (
    <div className='co-container'>
        <form >
            <h2 className='co-title'>You will pay after dilivery!</h2>
            <div className="close-form" onClick={() => setOpen(false)}>X</div>
            <div className="form-group">
                <label htmlFor="name" >Name</label>
                <input type="text" id='name' />
            </div>
            <div className="form-group">
                <label htmlFor="email" >Email</label>
                <input type="email" id='email' />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id='address' />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id='address' />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" id='phone' />
            </div>
            
            <div className="form-btn">
                <button type='submit'> Order <FontAwesomeIcon icon={faTruck}/></button>
            </div>
        </form>
    </div>
  )
}

export default Checkout