import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBagShopping, faHeart, faRightToBracket} from "@fortawesome/free-solid-svg-icons"
import {toast} from "react-toastify"
function Header() {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) :null
  const logoutHandler = ()=>{
    localStorage.removeItem("userInfo");
    toast.success("You have successfully logged out ");
    navigate("/login")
  }

   return (
      <div className="h-container">
         <div className="h-row">
            <div className="h-col">
              <div className="h-logo">
                <Link to="/" className="logo">Rails</Link>
              </div>
              <div className="h-menu">
                <ul className="menu-item">
                  <li>
                     <Link to="/" className="menu-link" >HOME</Link>
                  </li>
                  <li>
                     <Link to="/shop" className="menu-link">SHOP</Link>
                  </li>
                  <li>
                     <Link to="/blog" className="menu-link">BLOG</Link>
                  </li>
                 {
                  userInfo && (
                    <li>
                      <Link to="/account" className="menu-link">ACCOUNT</Link>
                    </li>
                  )
                 }
                </ul>
              </div>
            </div>
            <div className="h-col">
              <div className="h-right-menu">
                <ul className="right-menu-item">
                  {
                    userInfo ? (
                      <>
                      <li>
                        <a  className="right-menu-link">
                          <div className="menu-dev">
                            <FontAwesomeIcon icon={faRightToBracket}/>
                          </div>
                          <span onClick={logoutHandler}>Logout</span>
                        </a>
                      </li>
                      <li>
                        <Link to="/wish" className="right-menu-link">
                          <div className="menu-dev">
                            <FontAwesomeIcon icon={faHeart}/>
                            <span className="menu-badge">0</span>
                          </div>
                          <span>Wishlist</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart" className="right-menu-link">
                          <div className="menu-dev">
                            <FontAwesomeIcon icon={faBagShopping}/>
                            <span className="menu-badge">0</span>
                          </div>
                          <span>Bag</span>
                        </Link>
                      </li>
                    </>
                    ) : (
                      <li>
                      <Link to="/login" className="right-menu-link">
                        <div className="menu-dev">
                          <FontAwesomeIcon icon={faRightToBracket}/>
                      
                        </div>
                        <span>Login</span>
                      </Link>
                    </li>
                    )
                  }
                  
                </ul>
              </div>
            </div>
         </div>
      </div>
   );
}

export default Header;
