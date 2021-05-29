import React from 'react';
import deliver from '../../../images/services/deliver.png';
import open from '../../../images/services/24-hours.png';
import bestPrice from '../../../images/services/best-price.png';

const serviceStyle={
    width: '19rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft:'60px',
    color: 'white'
}

const serviceImgStyle={
    width: '150px',
    height: '150px',
    color: 'white'
}

const OurServices = () => {
    return (
        <div className='pt-4 bg-dark pb-5'>
            <h2 className='text-white text-center pb-3'>Our Services</h2>
            <div className='container d-flex justify-content-center align-items-center'>
            <div style={serviceStyle}>
                <img src={deliver} alt="..." style={serviceImgStyle} />
                <div className='d-flex justify-content-center align-items-center flex-column pt-4'>
                    <h3>Home Delivery</h3>
                    <p className='text-justify'>Lorem ipsum dolor sit, consectetur  Doloremque blanditiis beatae rerum ab debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi.</p>
                </div>
            </div>
            <div style={serviceStyle}>
                <img src={bestPrice} alt="..." style={serviceImgStyle} />
                <div className='d-flex justify-content-center align-items-center flex-column pt-4'>
                    <h3>Best Price</h3>
                    <p className='text-justify'>Lorem ipsum dolor sit, consectetur  Doloremque blanditiis beatae rerum ab debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi.</p>
                </div>
            </div>
            <div style={serviceStyle}>
                <img src={open} alt="..." style={serviceImgStyle} />
                <div className='d-flex justify-content-center align-items-center flex-column pt-4'>
                    <h3>We are Alive</h3>
                    <p className='text-justify'>Lorem ipsum dolor sit, consectetur  Doloremque blanditiis beatae rerum ab debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quasi.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OurServices;