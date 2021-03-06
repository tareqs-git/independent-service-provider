import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-5 bg-dark p-2'>
            <div className='d-flex  justify-content-around p-5'>
                <div className='d-flex flex-column'>
                    <Link to="/" className=' mx-1 hover-color text-light fw-bold text-decoration-none'>Home</Link>
                    <Link to="/about" className=' mx-1 hover-color text-light fw-bold text-decoration-none'>About</Link>

                    <Link to="/services" className=' mx-1 hover-color text-light fw-bold text-decoration-none'>
                        Services
                    </Link>

                </div>
                <div className='d-flex flex-column'>

                    <Link to="/blogs" className='text-light fw-bold mx-1 hover-color text-decoration-none'>
                        Blogs
                    </Link>
                    <Link to="/checkout" className='text-light fw-bold mx-1 hover-color hover-color text-decoration-none'>
                        Checkout
                    </Link>
                </div>
                <Link to="/contact" className='text-light fw-bold mx-1 hover-color text-decoration-none'>
                    Contact
                </Link>
            </div>
            <p className='text-light text-center fs-5'>Copyright © 2022 fitness guru | Tareq</p>
        </div>
    );
};

export default Footer;