import React from "react";
import { Link } from "react-router-dom";

function NewProduct() {
   return (
      <div className="npc-group">
         <Link to="/product">
            <div className="npc-body">
                <img src="" className="product-img"  alt="" />
            </div>
            <div className="npc-footer"></div>
         </Link>
      </div>
   );
}

export default NewProduct;
