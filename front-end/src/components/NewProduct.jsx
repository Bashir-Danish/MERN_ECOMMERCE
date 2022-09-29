import React from "react";
import { Link } from "react-router-dom";

function NewProduct({product}) {
   return (
      <div className="npc-group npc-hover">
         <Link to={`/products/${product._id}`}>
            <div className="npc-body">
               <img src={product.image} className="product-img" alt={product.title} />
            </div>
            <div className="npc-footer">
               <h3 className="npc-Product-Title">{product.title}</h3>
            </div>
            <div className="npc-FooterDiv">
                  <div className="npc-footerSubDiv">
                     <span className="npc-category">{product.category} </span>
                     <span className="npc-price">${(product.price).toFixed(2)}</span>
                     <span className="npc-star">{product.star}&#9733;</span>
                  </div>
               </div>
         </Link>
      </div>
   );
}

export default NewProduct;
