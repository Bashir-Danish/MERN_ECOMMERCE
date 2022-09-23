import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeBlogItem from './HomeBlogItem'


function HomeBlog() {

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resultBlog = await axios.get('/api/v1/blogs/all');
      setBlogs(resultBlog.data);
    }
    fetchData();
  }, []);
  return (
    <div className='hb-container' id='blog'>
      <div className="hb-row">
        <div className="hb-col">
          <div className="hb-blogDiv">

            {
              blogs.length === 0 ? (
                <h3 className='no-blog'>There are currently no blogs</h3>
              ) : (
                <div className="hb-blogs">
                  {
                    blogs.slice(-4).map((blog) => (
                      <HomeBlogItem key={blog._id} blog={blog} />
                    ))
                  }
                </div>
              )
            }

          </div>
        </div>
        <div className="hb-col">
          <Link to="/blogs" className='hb-more'>View More <FontAwesomeIcon icon={faEye} /></Link>
        </div>

      </div>
    </div>
  )
}

export default HomeBlog