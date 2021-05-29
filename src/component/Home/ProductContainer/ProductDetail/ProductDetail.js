import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';

const ProductDetail = () => {
    const {idTeam} = useParams()
    return (
        <div>
            <Navbar />
                <div className='mt-5 pt-3'>
                    <h2 className=''>Product no : {idTeam}</h2>
                </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;