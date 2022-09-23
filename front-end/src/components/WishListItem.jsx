import React from 'react'
import { Link } from 'react-router-dom'

function WishListItem() {
   return (
      <div className="npc-group">
         <Link to="/product:897298572894">
            <div className="npc-body">
               <img src="./assets/images/product/1.jpg" className="product-img" alt="" />
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
         <button className='w-BtnTrash w-delete'><span className='w-trash'>Delete</span></button>
      </div>
   )
}

export default WishListItem