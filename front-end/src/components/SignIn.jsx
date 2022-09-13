import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='s-container'>
        <div className="s-row">
            <div className="s-formGroups">
                <form >
                    <h2 className='s-title'>Login</h2>
                    <div className="s-formGroup">
                        <label htmlFor="email" className='s-lable'>Email</label>
                        <input type="email" id='email' className='s-input'/>
                    </div>
                    <div className="s-formGroup">
                        <label htmlFor="password" className='s-lable'>Password</label>
                        <input type="password" id='password' className='s-input'/>
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