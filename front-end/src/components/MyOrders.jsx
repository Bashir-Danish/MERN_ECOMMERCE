import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
    const userId = userInfo._id

    useEffect(() => {
        const fetchData = async () => {
            const ordersData = await axios.get(`/api/v1/orders/mine/${userId}`);
            setOrders(ordersData.data);
        }
        fetchData();
    }, []);
    
    return (
        <div className='mo-container'>
            <div className="mo-row">
                <h2 className="sh-title">My Orders</h2>
            </div>
            <div className="mo-row">
                {
                    orders.length === 0 ? (
                        <h4 className='no-data'>No Orders</h4>
                    ) : (
                        <div className="mo-groups">
                            {
                                orders.map((item) => (
                                    <div className="mo-group" key={item._id}>
                                    <h3>Order ID : {item._id}</h3>
                                    <Link to={`/order/${item._id}`} className='mo-link'><FontAwesomeIcon icon={faEye} /></Link>
                                </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MyOrders