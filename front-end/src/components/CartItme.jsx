import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function CartItme() {
  return (
    <div className="npc-group">
         <Link to="/product">
            <div className="npc-body">
                <img src="./assets/images/product/1.jpg" className="product-img"  alt="" />
            </div>
            <div className="npc-footer">
               <div className="npc-FooterDiv">
                  <span className="npc-category">Dresses</span>
                  <h3 className="npc-Product-Title">Product</h3>
             
                    <div className="npc-footerSubDiv">
                        <span className="npc-price">$400.00</span>
                        <span className="npc-star">4&#9733;</span>
                    </div>
               </div>
            </div>
         </Link>
         <div className="c-otherDiv">
            <div className="c-quantityDiv">
                <button className='c-minus'>-</button>
                <span className="c-quantity">1</span>
                <button className='c-plus'>+</button>
            </div>
            <button className='w-BtnTrash'><FontAwesomeIcon icon={faTrashAlt} className='w-trash'/></button>
         </div>
      </div>
  )
}

export default CartItme