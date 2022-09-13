import React from 'react'
import { Link } from 'react-router-dom'

function ShopProduct () {
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
      </div>
  )
}

export default ShopProduct