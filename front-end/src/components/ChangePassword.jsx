import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const [newPassword , setNewPassword] = useState('');
    const [rNewPassword , setRNewPassword] = useState('');
    const navigate = useNavigate();
    
    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) :null
    const token = userInfo.token

    const updateHandler =async(e)=>{
        e.preventDefault();
        
        if(token){
            if(newPassword === rNewPassword){
                try {
                    const {data} = await axios.put('/api/v1/users/updatePass',{
                        _id : userInfo._id,
                        newPassword
                    });

                    localStorage.setItem("userInfo" , JSON.stringify(data))
                    toast.success('Password updated successfully');
                    navigate('/login')
                    
                } catch (error) {
                    toast.error('Password not updated');
                }
            }else{
                toast.error('Password doesn`t match');
            } 
        }    
    }

  return (
    <div className='s-container cp-container'>
        <div className="s-row">
            <div className="s-formGroups">
                <form onSubmit={updateHandler}>
                    <h2 className='s-title'>Change Password</h2>
                    <div className="s-formGroup">
                        <label htmlFor="password" className='s-lable'>New Password</label>
                        <input type="password" id='password' className='s-input'required onChange={(e)=>setNewPassword(e.target.value)}/>
                    </div>
                    <div className="s-formGroup">
                        <label htmlFor="r_password" className='s-lable'>Retype New Password</label>
                        <input type="password" id='r_password' className='s-input' required onChange={(e)=>setRNewPassword(e.target.value)}/>
                    </div>
                    <div className="s-formBtn">
                        <button className='s-btn'>Update Password</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword