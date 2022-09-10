import React from "react";
import { Link } from "react-router-dom";

function BlogItem() {
   return (
      <div className="hb-blog">
         <Link to="/blog">
            <h3 className="hb-blogTitle">Title one</h3>
            <p className="hb-desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
               provident sequi incidunt est omnis fugiat, perferendis
               reprehenderit possimus voluptate voluptates accusamus repellat.
               Dolor ipsa tempore eaque molestias aperiam exercitationem
               voluptate?
            </p>
            <div className="hb-blogFooter">
               <span>Admin</span>
               <span>9.11.2022</span>
            </div>
         </Link>
      </div>
   );
}

export default BlogItem;
