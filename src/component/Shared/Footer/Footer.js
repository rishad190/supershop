import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, voluptatum maiores minus ipsum dolorem nisi quod ex, architecto delectus totam cum! Placeat magni consequatur pariatur neque eius doloremque velit ipsam esse odit alias corrupti, at iste repudiandae optio doloribus. Doloremque.</p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Our Products</h6>
                        <ul class="footer-links">
                            <li><Link to="/" target="_blank">Music player</Link></li>
                            <li><Link to="/" target="_blank">Bank Site</Link></li>
                            <li><Link to="/" target="_blank">Weather App</Link></li>
                            <li><Link to="/" target="_blank">Image Slider</Link></li>
                            <li><Link to="/" target="_blank">Panda Commerce</Link></li>
                            <li><Link to="/">Home Page</Link></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/">All Products</Link></li>
                            <li><Link to="/blog">My Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by Team-31.
            </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;