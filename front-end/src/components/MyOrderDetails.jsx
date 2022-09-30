import React from 'react'
import { Link } from 'react-router-dom'

const MyOrderDetails = ({item}) => {
    return (
        <div className="npc-group npc-hover">
            <Link to={`/products/${item._id}`}>
            <div className="cart-body">
               <img src={`../${item.image}`} className="product-img" alt={item.title} />

               <div className="cart-FooterDiv">
                  <span className="npc-category">{item.subcategory}</span>
                  <h3 className="npc-Product-Title">{item.title}</h3>

                  <div className="cart-footerSubDiv">
                     <span className="npc-color">{item.color}</span>
                     <span className="npc-size">{item.size}</span>
                     <span className="npc-price">${(item.price)?.toFixed(2)}</span>
                     <span className="npc-star">{item.star}&#9733;</span>
                  </div>
               </div>
            </div>
            </Link>
        </div>
    )
}

export default MyOrderDetails