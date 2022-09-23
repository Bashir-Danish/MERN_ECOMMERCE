
function Category({ category, filterResult }) {

   return (
      <div className="f-filterDiv">
         <div className="f-buttons">
            <button className="f-button" onClick={() => filterResult()}>All</button>
            {
               category.map((cate) => (
                  <button className="f-button" onClick={() => filterResult(cate.label)} key={cate._id}>{cate.label}</button>
               ))
            }
         </div>
      </div>
   );
}

export default Category;
