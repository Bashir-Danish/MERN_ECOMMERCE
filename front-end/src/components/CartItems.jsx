import React from "react";
import CartItme from "./CartItme";

function CartItems() {
   return (
      <div className="c-container">
         <div className="w-row">
            <h2 className="sh-title">Your Cart</h2>
         </div>
         <div className="c-row">
            <div className="c-col">
                <div className="w-groups">
                    <CartItme/>
                    <CartItme/>
                    <CartItme/>
                    <CartItme/>
                    <CartItme/>
                </div>
            </div>
            <div className="c-col">
               <div className="cart-bill">
                  <h2 className="bill-title">My Bill</h2>
                  <div className="bill-groups">
                     <div className="bill-group">
                        <span>product 1</span>
                        <span>$400.00</span>
                     </div>
                     <div className="bill-group">
                        <span>product 1</span>
                        <span>$400.00</span>
                     </div>
                  </div>
                  <div className="bill-total">
                     <div className="bill-group">
                        <span>Subtotal</span>
                        <span>$400</span>
                     </div>
                     <div className="bill-group">
                        <span>Subtotal</span>
                        <span>$400</span>
                     </div>
                     <div className="bill-group">
                        <span>Subtotal</span>
                        <span>$400</span>
                     </div>
                  </div>
                  <div className="bill-btn">
                     <button>Checkout</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CartItems;
