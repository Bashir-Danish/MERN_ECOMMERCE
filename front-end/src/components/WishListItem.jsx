import React from 'react'
import { Link } from 'react-router-dom'

function WishListItem({ item ,removeItemHandler}) {

  
   return (
      <div className="npc-group npc-hover">
         <Link to={`/products/${item._id}`}>
            <div className="npc-body">
               <img src={item.image} className="product-img" alt={item.title} />
            </div>
            <div className="npc-FooterDiv">
               <span className="npc-category">{item.subcategory}</span>
               <h3 className="npc-Product-Title">{item.title}</h3>

               <div className="npc-footerSubDiv">
                  <span className="npc-price">${(item.price)?.toFixed(2)}</span>
                  <span className="npc-star">{item.star}&#9733;</span>
               </div>
            </div>

         </Link>
         <div className="npc-footer">
            <button className='w-BtnTrash w-delete' onClick={()=> removeItemHandler(item)}><span className='w-trash'>Delete</span></button>
         </div>

      </div>
   )
}

export default WishListItem