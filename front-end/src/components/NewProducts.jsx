import React, { useEffect, useState } from 'react'
import NewProduct from './NewProduct'
import axios from 'axios'


function NewProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resultProduct = await axios.get('/api/v1/products/all');
      setProducts(resultProduct.data);
    }
    fetchData();
  }, []);
  return (
    <div className='npc-container'>
      <div className="npc-row">
        <h2 className='npc-title'>New Products</h2>
      </div>
      <div className="npc-row">
        {
          products.length === 0 ? (
            <h3 className='no-data'>There is currently no Products</h3>
          ) : (
            <div className="npc-groups">
              {
                products.slice(-6).map((product) => (
                  <NewProduct key={product._id} product={product} />
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NewProducts