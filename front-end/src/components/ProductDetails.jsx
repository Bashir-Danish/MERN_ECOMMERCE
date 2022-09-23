import React, { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useLocation } from "react-router-dom";
import axios from "axios";


const ProductDetails = () => {
   const [selectedImg, setSelectedImg] = useState('');


   const [product, setProduct] = useState([]);
   const location = useLocation();


   const id = location.pathname.split("/")[2];
   const fetchData = async () => {
      const resposeProdcut = await axios.get(`/api/v1/products/${id}`);
      setProduct(resposeProdcut.data);
   }
   useEffect(() => {
      fetchData();
   }, [id]);

   return (
      <div className="pd-container">
         <div className="pd-row">
            <div className="pd-col">
               <div className="pd-imageDiv">
                  <div className="pd-top">
                     <TransformWrapper>
                        <TransformComponent>
                           <img src={selectedImg || `../${product.image}`} className="pd-Img" alt={product.title} />
                        </TransformComponent>
                     </TransformWrapper>

                  </div>
                  <div className="pd-bottom">
                     <img onClick={() => setSelectedImg(`../${product.image}`)} src={`../${product.image}`} className="pd-smallImg" alt="" />
                     <img onClick={() => setSelectedImg(`../${product.imageOne}`)} src={`../${product.imageOne}`} className="pd-smallImg" alt="" />
                     <img onClick={() => setSelectedImg(`../${product.imageTow}`)} src={`../${product.imageTow}`} className="pd-smallImg" alt="" />
                  </div>
               </div>
            </div>
            <div className="pd-col">
               <div className="pd-groups">
                  <div className="pd-group">
                     <h3 className="pd-title">{product.title}</h3>
                  </div>
                  <div className="pd-group">
                     <span className="pd-category">{product.category}</span>
                     <span className="pd-subcategory">{product.subcategory}</span>
                  </div>
                  <div className="pd-group">
                     <p className="pd-desc">{product.description}</p>
                  </div>
                  <div className="pd-group">
                     <span className="pd-quantity">Quantity : <span className="pd-quantityNumber">1</span></span>
                  </div>
                  <div className="pd-group">
                     <div className="pd-otherAction">
                        <div className="pd-size">
                           <h4 className="pd-sizeTitle">Sizes :</h4>
                           <div className="pd-sizeDiv">
                              {
                                 product.sizes?.map((size) => (
                                    <>
                                       <input type="radio" name="size" id={size.title} value={size.title}/>
                                       <label htmlFor={size.title}>{size.title}</label>
                                    </>
                                 ))
                              }

                           </div>
                        </div>
                        <div className="pd-color">
                           <h4 className="pd-sizeTitle">Colors :</h4>
                           <div className="pd-sizeDiv">
                              {
                                 product.colors?.map((color) => (
                                    <>
                                       <input type="radio" name="color" id={color.title} value={color.title} />
                                       <label htmlFor={color.title} >{color.title}</label>
                                    </>
                                 ))
                              }
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="pd-group">
                     <span className="pd-price">Price: ${product.price}</span>
                     <span className="pd-star">{product.star}&#9733;</span>
                  </div>
                  <div className="pd-group">
                     <div className="pd-buttonsGroup">
                        <button className="pd-wish">Add to Wish</button>
                        <button className="pd-cart">Add to Cart</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;
