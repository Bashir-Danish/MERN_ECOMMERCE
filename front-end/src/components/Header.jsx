import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faHeart, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify"
import { Store } from "../Store";


function Header() {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  // const { cart, wish } = state;
  const { cart , wish} = state;
  const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    toast.success("You have successfully logged out ");
    navigate("/login")
  }
  const cartItemsLength = cart.cartItems.reduce((a , c) => a + c.quantity , 0 );
  
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
                <NavLink to="/" className="menu-link" >HOME</NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="menu-link">SHOP</NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="menu-link">BLOG</NavLink>
              </li>
              {
                userInfo && (
                  <li>
                    <NavLink to="/account" className="menu-link">ACCOUNT</NavLink>
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
                      <Link to="" onClick={logoutHandler} className="right-menu-link">
                        <div className="menu-dev">
                          <FontAwesomeIcon icon={faRightToBracket} />
                        </div>
                        <span >Logout</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wish" className="right-menu-link">
                        <div className="menu-dev">
                          <FontAwesomeIcon icon={faHeart} />
                          <span className="menu-badge">{wish.wishItems.length}</span>
                        </div>
                        <span>Wishlist</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" className="right-menu-link">
                        <div className="menu-dev">
                          <FontAwesomeIcon icon={faBagShopping} />
                          {cart.cartItems.length ? (<span className="menu-badge">{cartItemsLength}</span>)
                          : (<span className="menu-badge">0</span>)}

                        </div>
                        <span>Bag</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/login" className="right-menu-link">
                      <div className="menu-dev">
                        <FontAwesomeIcon icon={faRightToBracket} />

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
