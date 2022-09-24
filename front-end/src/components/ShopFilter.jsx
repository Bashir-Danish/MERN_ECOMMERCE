import React from 'react'
import Category from './filtersPartials/Category'
import Price from './filtersPartials/Price'
import Star from './filtersPartials/Star'
import SubCategory from './filtersPartials/SubCategory'

function ShopFilter({category ,filterResult,filterRatings,rating,subCategory,changeChecked ,selectedPrice ,changePrice}) {
    return (
        <>
            <div className="f-group">
                <span className='f-groupTitle'>Category</span>
                <Category filterResult={filterResult} category={category}/>
            </div>
            <div className="f-group">
                <span className='f-groupTitle'>Subcategory</span>
                <SubCategory subCategory={subCategory} changeChecked={changeChecked}/>
            </div>
            <div className="f-group">
                <span className='f-groupTitle'>price</span>
                <Price value={selectedPrice} changePrice={changePrice}/>
            </div>
            <div className="f-group">
                <span className='f-groupTitle'>star rating</span>
                <Star filterRatings={filterRatings} rating={rating}/>
            </div>

        </>
    )
}

export default ShopFilter