import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Shipment = () => {
    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>
                <h3>Thank you for your order. Your order will placement very quickly.</h3>
            </div>
            <Footer />
        </div>
    );
};

export default Shipment;