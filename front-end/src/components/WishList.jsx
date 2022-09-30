import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { Store } from '../Store';
import WishListItem from './WishListItem'

function WishList() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { wish  : {wishItems}} = state;

  const removeItemHandler = (item)=> {
    ctxDispatch({
       type: 'REMOVE_FROM_WISH',
       payload: item
    });
    toast.success('You have successfully deleted tha product from the wishlist');

 }
  return (
    <div className='w-container'>
      <div className="w-row">
        <h2 className='sh-title'>Wish List</h2>
      </div>
      <div className="w-row">
        <div className="w-groups">
          {
           wishItems.length === 0 ? (
            <h4 className='no-data'>You have not added any product to the wishlis</h4>
           ) : (
            wishItems.map((item) => (
              <WishListItem key={item._id} item={item} removeItemHandler={removeItemHandler}/>
              ))
           )
          }
        </div>
      </div>
    </div>
  )
}

export default WishList