import React from 'react'
import BlogListItem from './BlogListItem'

const BlogLists = () => {
  return (
    <div className='hb-container' id='blog'>
        <div className="hb-row">
            <h2 className="sh-title">Our Blog</h2>
        </div>
       <div className="hb-row">
            <div className="hb-col">
                <div className="hb-blogDiv">
                    <div className="hb-blogs">
                        <BlogListItem/>
                        <BlogListItem/>
                        <BlogListItem/>
                        <BlogListItem/>
                        <BlogListItem/>
                        <BlogListItem/>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default BlogLists