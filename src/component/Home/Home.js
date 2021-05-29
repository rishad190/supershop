import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from './Header/Header';
import OurServices from './OurServices/OurServices';
import ProductContainer from './ProductContainer/ProductContainer';

const Home = () => {
    return (
        <div>
            <Header />
            <ProductContainer />
            <OurServices />
            <Footer />
        </div>
    );
};

export default Home;