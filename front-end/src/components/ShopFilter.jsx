import React from 'react'
import Category from './filtersPartials/Category'
import Price from './filtersPartials/Price'
import Star from './filtersPartials/Star'
import SubCategory from './filtersPartials/SubCategory'

function ShopFilter({category ,filterResult}) {
    return (
        <>
            <div className="f-group">
                <span className='f-groupTitle'>Category</span>
                <Category filterResult={filterResult} category={category}/>
            </div>
            <div className="f-group">
                <span className='f-groupTitle'>Subcategory</span>
                <SubCategory />
            </div>
            <div className="f-group">
                <span className='f-groupTitle'>price</span>
                <Price />
            </div>
            <div className="f-group">
                <span className='f-groupTitle'>star rating</span>
                <Star />
            </div>

        </>
    )
}

export default ShopFilter