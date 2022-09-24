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

    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [rating, setRating] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([0, 1000]);


    const [inputSearch, setInputSearch] = useState('');
    const [result, setResult] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedRating, setSelectedRating] = useState();

    const filterResult = (catItem) => {
        setSelectedCategory(catItem)
    }
    const filterRatings = (starItem) => {
        setSelectedRating(starItem)
    }
    const handleChangeChecked = (id) => {
        const subcategoryList = subCategory;
        const changeCheckedSubcat = subcategoryList.map((item) => item._id === id ? { ...item, checked: !item.checked } : item)
        setSubCategory(changeCheckedSubcat)
    }
    const handleChangePrice = (value) => {
        setSelectedPrice(value)
    }


    useEffect(() => {
        // filtering 
        const applyFilter = () => {
            let updatedProductList = products;

            // category 
            if (selectedCategory) {
                updatedProductList = updatedProductList.filter((item) => item.category === selectedCategory)
            }
            // subcategory 
            const subcategoryChecked = subCategory.filter((item) => item.checked).map((item) => item.label)
            if (subcategoryChecked.length) {
                updatedProductList = updatedProductList.filter((item) => subcategoryChecked.includes(item.subcategory))
            }
            // rating 
            if (selectedRating) {
                updatedProductList = updatedProductList.filter((item) => item.star === selectedRating)
            }
            // price 
            const minPrice = selectedPrice[0];
            const maxPrice = selectedPrice[1];

            updatedProductList = updatedProductList.filter((item)=> item.price >= minPrice && item.price <= maxPrice);

            // search
            if (inputSearch) {
                updatedProductList = updatedProductList.filter((item) => item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1)
            }
            setList(updatedProductList);

            !updatedProductList.length ? setResult(false) : setResult(true);
        }
        applyFilter()
    }, [inputSearch, products, selectedCategory, selectedRating, subCategory,selectedPrice]);

    useEffect(() => {
        const fetchData = async () => {
            const resultProduct = await axios.get('/api/v1/products/all');
            const productData = resultProduct.data;
            const sortProductData = productData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
            setProducts(sortProductData);

            // fecth category
            const resultCategory = await axios.get('/api/v1/categories/all');
            setCategory(resultCategory.data)

            //fetch subcategory
            const subcategories = await axios.get('/api/v1/subcategories/all');
            const categoryData = subcategories.data
            setSubCategory(categoryData);


            // fetch rating
            const ratings = await axios.get('/api/v1/ratings/all');
            setRating(ratings.data);
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
                        <Search value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)} />
                    </div>
                    <div className="sh-filterGroups">
                        <ShopFilter filterResult={filterResult} category={category} filterRatings={filterRatings} rating={rating} subCategory={subCategory} changeChecked={handleChangeChecked} 
                        selectedPrice={selectedPrice} changePrice={handleChangePrice}/>
                    </div>
                </div>
                <div className="sh-col">

                    {result ? (<ShopProducts list={list} />) : (<h3 className="e-title">No Produts</h3>)}
                </div>
            </div>
        </div>
    )
}

export default ShopBody