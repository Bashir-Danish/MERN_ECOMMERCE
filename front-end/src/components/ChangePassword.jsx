import React from 'react'


const ChangePassword = () => {
  return (
    <div className='s-container cp-container'>
        <div className="s-row">
            <div className="s-formGroups">
                <form >
                    <h2 className='s-title'>Change Password</h2>
                    <div className="s-formGroup">
                        <label htmlFor="o_password" className='s-lable'>Old Password</label>
                        <input type="password" id='o_password' className='s-input'/>
                    </div>
                    <div className="s-formGroup">
                        <label htmlFor="password" className='s-lable'>New Password</label>
                        <input type="password" id='password' className='s-input'/>
                    </div>
                    <div className="s-formGroup">
                        <label htmlFor="r_password" className='s-lable'>Retype New Password</label>
                        <input type="password" id='r_password' className='s-input'/>
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