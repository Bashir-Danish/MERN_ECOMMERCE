import React from 'react'
import WishListItem from './filtersPartials/WishListItem'

function WishList() {
  return (
    <div className='w-container'>
        <div className="w-row">
            <h2 className='sh-title'>Wish List</h2>
        </div>
        <div className="w-row">
            <div className="w-groups">
                <WishListItem/>
                <WishListItem/>
                <WishListItem/>
                <WishListItem/>
                <WishListItem/>
                <WishListItem/>
            </div>
        </div>
    </div>
  )
}

export default WishList