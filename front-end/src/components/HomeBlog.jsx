import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import BlogItem from './BlogItem'

function HomeBlog() {
  return (
    <div className='hb-container' id='blog'>
       <div className="hb-row">
            <div className="hb-col">
                <div className="hb-blogDiv">
                    <div className="hb-blogs">
                        <BlogItem/>
                        <BlogItem/>
                        <BlogItem/>
                    </div>
                </div>
            </div>
            <div className="hb-col">
                <Link to="/blog" className='hb-more'>View More <FontAwesomeIcon icon={faEye}/></Link>
            </div>
        
       </div>
    </div>
  )
}

export default HomeBlog