import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogListItem from './BlogListItem'
import Paginate from 'react-paginate'


const BlogLists = () => {
    const [blogs, setBlogs] = useState([]);

    // paginattion
    const [pageNumber, setPageNumber] = useState(0);
    const blogPerPage = 4;
    const pagesVisited = pageNumber * blogPerPage;
    const pageCount = Math.ceil(blogs.length / blogPerPage);
    const handlePageClick = ({selected})=>{
        setPageNumber(selected)
    }

    useEffect(() => {
        const fetchData = async () => {
            const resultBlog = await axios.get('/api/v1/blogs/all');
            const blogData = resultBlog.data
            const sortBlogData = blogData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
            setBlogs(sortBlogData);
        }
        fetchData();
    }, []);

    return (
        <div className='hb-container' id='blog'>
            <div className="hb-row">
                
                <div className="hb-col">
                    
                    <div className="hb-blogDiv">
                <h2 className="sh-title">Our Blog</h2>

                        {
                            blogs.length === 0 ? (
                                <h3 className='no-blog'>There are currently no blogs</h3>
                            ) : (
                                <>
                                    <div className="hb-blogs">
                                        {
                                            blogs.slice(pagesVisited , pagesVisited + blogPerPage).map((blog) => (
                                                <BlogListItem key={blog._id} blog={blog} />
                                            ))
                                        }
                                    </div>
                                    <Paginate className='filter-pagination'   
                                        previousLabel={"Perv"}
                                        nextLabel={"Next"}
                                        breakLabel={"..."}
                                        pageCount={pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={3}
                                        onPageChange={handlePageClick}
                                        pageClassName={"pagi-item"}
                                        pageLinkClassName={"pagi-link"}
                                        activeClassName={"pagi-active"}
                                        activeLinkClassName={"pagi-active-link"}
                                        previousClassName={"pagi-item"}
                                        previousLinkClassName={"pagi-link"}
                                        nextClassName={"pagi-item"}
                                        nextLinkClassName={"pagi-link"}
                                        breakClassName={"pagi-item"}
                                        breakLinkClassName={"pagi-link"}
                                        disabledClassName={"disabledPagi"}
                                        />
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogLists