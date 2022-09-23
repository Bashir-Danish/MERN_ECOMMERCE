import React, { useEffect ,useState} from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const BlogDetails = () => {

   const [blog , setBlog] = useState([]);
   const location = useLocation();


   const id = location.pathname.split("/")[2];
  
   useEffect(()=>{
      const fetchData = async()=>{
         const resultBlog = await axios.get(`/api/v1/blogs/${id}`);
         setBlog(resultBlog.data);
       }
       fetchData();
   },[id]);

   return (
      <div className="hb-container blog" id="blog">
         <div className="hb-row">
            <div className="hb-col">
               <div className="hb-blogDiv">
                  <div className="hb-blogs blog">
                     <h3 className="blog-title">{blog.title}</h3>
                     <p className="blog-desc">{blog.description}</p>
                     <div className="hb-blogFooter blog">
                        <span>{blog.author}</span>
                        <span>{blog.createdAt?.slice(0,10)}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BlogDetails;
