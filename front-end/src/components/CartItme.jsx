import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function CartItme({ item, removeItemHandler, updateCartHandler }) {
   return (
      <div className="npc-group npc-hover">
         <Link to={`/products/${item._id}`}>
            <div className="cart-body">
               <img src={item.image} className="product-img" alt={item.title} />

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
         <div className="npc-footer c-otherDiv" >
            <div className="c-quantityDiv">
               <button className='c-minus' onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
               <span className="c-quantity">{item.quantity}</span>
               <button className='c-plus' onClick={() => updateCartHandler(item, item.quantity + 1)}>+</button>
            </div>
            <button className='w-BtnTrash' onClick={() => removeItemHandler(item)}><FontAwesomeIcon icon={faTrashAlt} className='w-trash' /></button>
         </div>
      </div>

   )
}

export default CartItme