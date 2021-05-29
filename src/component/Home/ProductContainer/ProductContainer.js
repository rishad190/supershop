import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const ProductContainer = () => {
    const [ allProduct, setAllProduct ] = useState([])
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then( data => {
            setAllProduct(data.teams)
        })
    },[])
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center flex-column mt-3'>
                <h6 className='text-secondary'>All Products</h6>
                <h3 style={{fontWeight: '900'}}>Collect your today's need</h3>
                <h3 style={{fontWeight: '900'}}>available today</h3>
            </div>
            <div className='row container m-auto pt-4'>
                {
                    allProduct?.map( pd => <SingleProduct pd={pd} key={pd.key} /> )
                }
            </div>
        </div>
    );
};

export default ProductContainer;