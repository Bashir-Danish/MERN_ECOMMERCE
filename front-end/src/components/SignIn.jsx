import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'
function SignIn() {
    const navigate = useNavigate();
    const [email , setEmail] = useState(''); 
    const [password , setPassword] = useState(''); 

    const loginHandler =async(e)=>{
        e.preventDefault();
        try {
            const {data} = await axios.post('/api/v1/users/login',{
                email,
                password
            });
            localStorage.setItem('userInfo',JSON.stringify(data));
            toast.success('You have successfully logged In ');
            navigate('/')
        } catch (error) {
            toast.error("invalid email or passwor");
        }
    }

  return (
    <div className='s-container'>
        <div className="s-row">
            <div className="s-formGroups">
                <form onSubmit={loginHandler}>
                    <h2 className='s-title'>Login</h2>
                    <div className="s-formGroup">
                        <label htmlFor="email" className='s-lable'>Email</label>
                        <input type="email" onChange={(e)=> setEmail(e.target.value)} id='email' className='s-input' required/>
                    </div>
                    <div className="s-formGroup">
                        <label htmlFor="password" className='s-lable'>Password</label>
                        <input type="password" onChange={(e)=> setPassword(e.target.value)} id='password' className='s-input'/>
                    </div>
                    <div className="s-formBtn">
                        <button className='s-btn'>Login</button>
                    </div>
                    <div className="s-formOther">
                        <Link to="/register">Create Account</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn