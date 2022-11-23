import React from 'react';
import logo from '../../images/icon.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-secondary  text-white">
            <div>
                <img className='h-16 w-16' src={logo} alt="" />
                <p className='text-2xl'>Comfort Zone</p>
                <p className=''>Since 2022</p>
            </div>

            <div className="">
                <span className="footer-title">Social</span>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Github</a>
            </div>

        </footer>
        </div>
    );
};

export default Footer;