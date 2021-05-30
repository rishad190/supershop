import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../../images/supermarket.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useSelector } from "react-redux";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser, token, setToken] = useContext(UserContext);
  const history = useHistory();
  const product = useSelector((state) => {
    return state.cart;
  });
  const handleLogOut = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    setToken(null)
    setLoggedInUser('')
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
      <Link to="/home" className="navbar-brand">
        <img src={logo} alt="" width="35px" height="35px" /> &nbsp; Super-Shop
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/home" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Contact us
            </Link>
          </li>
          <li className="nav-item">
            
              {
                loggedInUser.email ? <Link className='nav-link mr-5 d-flex justify-content-center'><button onClick={handleLogOut} className='btn btn-danger  text-white'>LogOut</button></Link> 
                : 
                
                <Link className='nav-link mr-5 d-flex justify-content-center'><button onClick={() => history.push('/login')} className='btn btn-primary text-white'>Login</button></Link>
              }
            
          </li>
          <li className="nav-item text-white" >
            <Link to="/cart" className="nav-link text-white">
              <ShoppingBasketIcon></ShoppingBasketIcon>
              <span>{product.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
