import React from 'react'
import ShopFilter from './ShopFilter'
import ShopProduct from './ShopProducts'

function ShopBody() {
  return (
    <div className='shop-container'>
        <div className="sh-row">
            <h3 className='sh-title'>Shop</h3>
        </div>
        <div className="sh-row">
            <div className="sh-col">
                <h4 className='sh-filters'>Filrers</h4>
                <div className="sh-filterGroups">
                    <ShopFilter/>
                </div>
            </div>
            <div className="sh-col">
                <ShopProduct/>
            </div>
        </div>
    </div>
  )
}

export default ShopBody