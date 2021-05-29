import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { idAPIfootball, strAlternate, strTeamBadge,idTeam  } = props.pd;

    return (
        <div className="col-md-4 mb-4 d-flex justify-content-center ">
            <div className="card" style={{ width: "18rem" }} >
                <img src={strTeamBadge} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{strAlternate}</h5>
                    <h4 className='text-center'>$ {idAPIfootball}</h4>
                    <div className='d-flex justify-content-around align-items-center'>
                        <Link to={`/productDetails/${idTeam}`} className="btn btn-primary">Details</Link>
                        <Link to="/" className="btn btn-success">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;