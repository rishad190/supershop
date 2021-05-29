import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/supermarket.png';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
            <Link to='/home' className="navbar-brand">
                <img src={logo} alt="" width='35px' height='35px' /> &nbsp;
                Super-Shop</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to='/home' className="nav-link text-white">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-link text-white">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-link text-white">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-link text-white">Contact us</Link>
                    </li>
                    <li className="nav-item">
                        <button className='btn btn-danger'>Login</button>
                    </li>
                    <li className="nav-item text-white p-1">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span>5</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;