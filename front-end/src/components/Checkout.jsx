import {  faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Checkout = ({ setOpen, cartItems, subTotal, taxPrice, totalPrice }) => {
    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
    const userId = userInfo._id

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone , setPhone] = useState('');

    const navigate = useNavigate(); 
    const orderProuctHandler =async(e) =>{
        e.preventDefault();
        console.log(cartItems)
        try {
            const {data} = await axios.post('/api/v1/orders',{
                orderItems : cartItems,
                name : name,
                email : email,
                address : address,
                phone : phone,
                subTotal : subTotal,
                taxPrice: taxPrice,
                totalPrice: totalPrice,
                userId : userId

            });
            if(data) {
                setOpen(false);
                toast.success('You have successfully ordered');
                localStorage.removeItem('cartItems');
                navigate('/account')
            }
        } catch (err) {
            toast.error('Order Failed');
        }
    }

    return (
        <div className='co-container'>
            <form onSubmit={orderProuctHandler}>
                <h2 className='co-title'>You will pay after dilivery!</h2>
                <div className="close-form" onClick={() => setOpen(false)}>X</div>
                <div className="form-group">
                    <label htmlFor="name" >Name</label>
                    <input type="text" id='name' onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email</label>
                    <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id='address' onChange={(e) => setAddress(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id='phone' onChange={(e) => setPhone(e.target.value)} required/>
                </div>

                <div className="form-btn">
                    <button type='submit'> Order <FontAwesomeIcon icon={faTruck} /></button>
                </div>
            </form>
        </div>
    )
}

export default Checkout