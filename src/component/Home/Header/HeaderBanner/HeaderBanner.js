import React from 'react';
import './HeaderBanner.css'

const HeaderBanner = () => {
    return (
        <div className="headerDiv container-fluid">
            <div className='d-flex justify-content-center flex-wrap'>
                <p className='text-white' style={{ fontSize: '3.5rem', fontWeight: '900' }}><span style={{ color: 'red' }}>S</span>uper</p>
                
                <p className='text-white' style={{ fontSize: '3.5rem', fontWeight: '900' }}><span style={{ color: 'red' }}>&nbsp;S</span>hop</p>
            </div>
        </div>
    );
};

export default HeaderBanner;