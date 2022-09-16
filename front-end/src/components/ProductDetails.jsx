import React from "react";
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProductDetails = () => {
  const [selectedImg , setSelectedImg] = useState('');

   return (
      <div className="pd-container">
         <div className="pd-row">
            <div className="pd-col">
              <div className="pd-imageDiv">
                <div className="pd-top">
                  <TransformWrapper>
                     <TransformComponent>
                     <img src={selectedImg || './assets/images/product/k1.jpg'} className="pd-Img" alt="" />
                     </TransformComponent>
                  </TransformWrapper>
                  
                </div>
                <div className="pd-bottom">
                  <img onClick={()=>setSelectedImg('./assets/images/product/k1.jpg')} src="./assets/images/product/k1.jpg" className="pd-smallImg" alt="" />
                  <img onClick={()=>setSelectedImg('./assets/images/product/k2.jpg')} src="./assets/images/product/k2.jpg" className="pd-smallImg" alt="" />
                  <img onClick={()=>setSelectedImg('./assets/images/product/k3.jpg')} src="./assets/images/product/k3.jpg" className="pd-smallImg" alt="" />
                </div>
              </div>
            </div>
            <div className="pd-col">
               <div className="pd-groups">
                  <div className="pd-group">
                     <h3 className="pd-title">Produc one</h3>
                  </div>
                  <div className="pd-group">
                     <span className="pd-category">Women</span>
                     <span className="pd-subcategory">Dresses</span>
                  </div>
                  <div className="pd-group">
                     <p className="pd-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Modi quibusdam blanditiis quam nemo, culpa quas itaque
                        nobis ratione provident nihil voluptatibus et eligendi?
                        Assumenda, neque ex debitis earum quas reiciendis.
                     </p>
                  </div>
                  <div className="pd-group">
                      <span className="pd-quantity">Quantity : <span className="pd-quantityNumber">1</span></span>
                  </div>
                  <div className="pd-group">
                     <div className="pd-otherAction">
                        <div className="pd-size">
                            <h4 className="pd-sizeTitle">Sizes :</h4>
                            <div className="pd-sizeDiv">
                                  <input type="radio" name="size" id="s" />
                                  <label htmlFor="s">S</label>
                        
                                  <input type="radio" name="size" id="l" />
                                  <label htmlFor="l">L</label>
                              
                                  <input type="radio" name="size" id="xl" />
                                  <label htmlFor="xl">Xl</label>

                            </div>
                        </div>  
                        <div className="pd-color">
                            <h4 className="pd-sizeTitle">Colors :</h4>
                            <div className="pd-sizeDiv">
                                  <input type="radio" name="color" id="blue" value="Blue"/>
                                  <label htmlFor="blue">Blue</label>

                                  <input type="radio" name="color" id="silver" value="Silver"/>
                                  <label htmlFor="silver">Silver</label>
                              
                                  <input type="radio" name="color" id="white" value="White"/>
                                  <label htmlFor="white">White</label>

                            </div>
                        </div>
                     </div>
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
