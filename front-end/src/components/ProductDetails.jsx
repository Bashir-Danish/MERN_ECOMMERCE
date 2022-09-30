import React, { useEffect, useState } from "react";
import ReactImageMagnify from 'react-image-magnify';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
import { Store } from "../Store";
import { useContext } from "react";


const ProductDetails = () => {
   const navigate = useNavigate();
   const [selectedImg, setSelectedImg] = useState('');
   const { state, dispatch: ctxDispatch } = useContext(Store);
   const { cart, wish } = state;
   const [product, setProduct] = useState([]);
   const location = useLocation();
   const [size, setSize] = useState('');
   const [color, setColor] = useState('');
   const id = location.pathname.split("/")[2];

   useEffect(() => {
      const fetchData = async () => {
         const resposeProdcut = await axios.get(`/api/v1/products/${id}`);
         setProduct(resposeProdcut.data);
      }
      fetchData();
   }, [id]);
   const addToCartHandle =() => {
      const existsItem = cart.cartItems.find((x) => x._id === product._id);
      const quantity = existsItem ? existsItem.quantity + 1 : 1;


      ctxDispatch({
         type: 'ADD_TO_CART',
         payload: { ...product, quantity, size, color }
      });
      toast.success('You have successfully added tha product to the cart');
      navigate('/cart')
   }
   const addToWishtHandle =() => {
      const existsItem = wish.wishItems.find((x) => x._id === product._id);
      const quantity = existsItem ? existsItem.quantity : 1;


      ctxDispatch({
         type: 'ADD_TO_WISH',
         payload: { ...product, quantity }
      });
      toast.success('You have successfully added tha product to the wishlist');
      navigate('/wish')
   }

   return (
      <div className="pd-container">
         <div className="pd-row">
            <div className="pd-col">
               <div className="pd-imageDiv">
                  <div className="pd-top" >
                     <ReactImageMagnify className="pd-Img" {...{
                        smallImage: {
                           alt: product.title,
                           isFluidWidth: true,
                           src: selectedImg || `../${product.image}`,
                           sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                        },
                        largeImage: {
                           src: selectedImg || `../${product.image}`,
                           isFluidWidth: true,
                           width: 1200,
                           height: 1800
                        },
                        enlargedImageContainerDimensions: {
                           width: '250%',
                           height: '100%'
                        }
                     }} />
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
                                       <input onChange={(e) => setSize(e.target.value)} type="radio" name="size" id={size.title} key={size._id} value={size.title} required />
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
                                       <input onChange={(e) => setColor(e.target.value)} type="radio" name="color" id={color.title} key={color._id} value={color.title} required />
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
                        <button className="pd-wish" onClick={addToWishtHandle}>Add to Wish</button>
                        <button className="pd-cart" onClick={addToCartHandle}>Add to Cart</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;
