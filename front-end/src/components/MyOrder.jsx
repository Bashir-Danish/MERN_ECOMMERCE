import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import MyOrderDetails from './MyOrderDetails'

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const location = useLocation();

    const id = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/v1/orders/${id}`);
                setOrder(data);
            } catch (err) {
                toast.error('Order not found')
            }
        }
        fetchData()
    }, [id]);
    return (
        <div className='order-container'>
            <div className="orderTop order-row">
                <h2 className='bill-title'>Order Id: 98787079870 </h2>
                <h2 className='go-back'><Link to="/account">Go Back</Link></h2>
            </div>
            <div className="mo-row order-row">
                <div className="mo-col order-col">
                    <div className="order-group">
                        <div className="w-groups">
                            {
                                order.orderItems?.map((item) => (
                                    <MyOrderDetails key={item._id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="order-col">
                    <div className="bill-total">
                        <div className="bill-group">
                            <span>Name</span>
                            <span>{order.name}</span>
                        </div>
                        <div className="bill-group">
                            <span>Email</span>
                            <span>{order.email}</span>
                        </div>
                        <div className="bill-group">
                            <span>Address</span>
                            <span>{order.address}</span>
                        </div>
                        <div className="bill-group">
                            <span>Phone</span>
                            <span>{order.phone}</span>
                        </div>
                        <div className="bill-group">
                            <span>IsPaid</span>
                            <span>{order.isPaid === true ? (`True`) : (`False`)}</span>
                        </div>
                        <div className="bill-group">
                            <span>is Delivered</span>
                            <span>{order.isDelivered  === true ? (`True`) : (`False`)}</span>
                        </div>
                        <div className="bill-group">
                            <span>SubTotal</span>
                            <span>${(order.subTotal)?.toFixed(2)}</span>
                        </div>
                        <div className="bill-group">
                            <span>Tax</span>
                            <span>${(order.taxPrice)?.toFixed(2)}</span>
                        </div>
                        <div className="bill-group">
                            <span>Total Price</span>
                            <span>${(order.totalPrice)?.toFixed(2)}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrder