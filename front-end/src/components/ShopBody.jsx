import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Search from './filtersPartials/Search';
import ShopFilter from './ShopFilter'
import ShopProducts from './ShopProducts'

function ShopBody() {
    const [products, setProducts] = useState([]);
    const [list, setList] = useState(products);

    const [category , setCategory] = useState([]);
    
    const [inputSearch, setInputSearch] = useState('');
    const [result, setResult] = useState(true);
    const [selectedCategory , setSelectedCategory] = useState();

    const filterResult =(catItem) =>{
        setSelectedCategory(catItem)
    }
    useEffect(()=>{
        // filtering 
        const applyFilter=()=>{
            let updatedProductList = products ;

            // category 
            if(selectedCategory){
                updatedProductList = updatedProductList.filter((item)=> item.category === selectedCategory)
            }

            // search
            if(inputSearch){
                updatedProductList = updatedProductList.filter((item)=> item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1)
            }
            setList(updatedProductList);

            !updatedProductList.length ? setResult(false) :setResult(true);
        }
        applyFilter()
    },[inputSearch , products , selectedCategory]);

    useEffect(() => {
        const fetchData = async () => {
          const resultProduct = await axios.get('/api/v1/products/all');
          const productData = resultProduct.data;
          const sortProductData = productData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
          setProducts(sortProductData );

          // fecth category
          const resultCategory = await axios.get('/api/v1/categories/all');
          setCategory(resultCategory.data)
        }
        fetchData();
      }, []);
    return (
        <div className='shop-container'>
            <div className="sh-row">
                <h3 className='sh-title'>Shop</h3>
            </div>
            <div className="sh-row">
                <div className="sh-col">
                    <h4 className='sh-filters'>Filrers</h4>
                    <div className='f-group'>
                        <span className='f-groupTitle'>Search</span>
                        <Search value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)}/>
                    </div>
                    <div className="sh-filterGroups">
                        <ShopFilter filterResult={filterResult} category={category}/>
                    </div>
                </div>
                <div className="sh-col">
        
                    {result ? (<ShopProducts list={list}/>) : (<h3 className="e-title">No Produts</h3>)} 
                </div>
            </div>
        </div>
    )
}

export default ShopBody