import React from "react";
import { useState } from "react";
import Checkout from "./Checkout";
import CartItme from "./CartItme";

function CartItems() {

   const [open, setOpen] = useState(false);
   return (
      <div className="c-container">
         <div className="w-row">
            <h2 className="sh-title">Your Cart</h2>
         </div>
         <div className="c-row">
            <div className="c-col">
               <div className="w-groups">
                  <CartItme />
                  <CartItme />
                  <CartItme />
                  <CartItme />
                  <CartItme />
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
                     <button onClick={() => setOpen(true)}>Checkout</button>
                  </div>
               </div>
            </div>
         </div>
         {open && <Checkout setOpen={setOpen} />}
      </div>
   );
}

export default CartItems;
