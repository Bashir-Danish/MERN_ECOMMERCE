import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const MyOrder = () => {
    return (
        <div className='mo-container'>
            <div className="mo-row">
                <h2 className="sh-title">My Orders</h2>
            </div>
            <div className="mo-row">
                <div className="mo-groups">
                    <div className="mo-group">
                        <h3>Order ID : 792874928047</h3>
                        <Link to="/order" className='mo-link'><FontAwesomeIcon icon={faEye} /></Link>
                    </div>
                    <div className="mo-group">
                        <h3>Order ID : 792874928047</h3>
                        <Link to="/order" className='mo-link'><FontAwesomeIcon icon={faEye} /></Link>
                    </div>
                    <div className="mo-group">
                        <h3>Order ID : 792874928047</h3>
                        <Link to="/order" className='mo-link'><FontAwesomeIcon icon={faEye} /></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyOrder