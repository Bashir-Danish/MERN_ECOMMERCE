import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');
    const [rPassword, setRPassword] = useState('');
    const registerHandler = async (e) => {
        e.preventDefault();

        if (password !== rPassword) {
            toast.error("Password doesn't match");
            return;
        }
        try {
            await axios.post('/api/v1/users/register', {
                username,
                email,
                password,
            });
            const data = {
                username,
                email
            }
            toast.success("You successfully registere");
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/login')
        } catch (error) {
            toast.error(`Registeration failed  please try again `)
        }
    }
    useEffect(() => {
        if (localStorage.getItem("userInfo")) {
            localStorage.getItem("userInfo");
            navigate('/')
        }
    }, [navigate])
    return (
        <div className='s-container'>
            <div className="s-row">
                <div className="s-formGroups">
                    <form onSubmit={registerHandler}>
                        <h2 className='s-title'>Register</h2>
                        <div className="s-formGroup">
                            <label htmlFor="username" className='s-lable'>Username</label>
                            <input type="text" id='username' className='s-input' onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="s-formGroup">
                            <label htmlFor="email" className='s-lable'>Email</label>
                            <input type="email" id='email' className='s-input' onChange={(e) => setEamil(e.target.value)} required />
                        </div>
                        <div className="s-formGroup">
                            <label htmlFor="password" className='s-lable'>Password</label>
                            <input type="password" id='password' className='s-input' onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="s-formGroup">
                            <label htmlFor="r_password" className='s-lable'>Retype Password</label>
                            <input type="password" id='r_password' className='s-input' onChange={(e) => setRPassword(e.target.value)} required />
                        </div>
                        <div className="s-formBtn">
                            <button className='s-btn'>Register</button>
                        </div>
                        <div className="s-formOther">
                            <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp