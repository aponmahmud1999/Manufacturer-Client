import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: `url()`,
            backgroundSize: 'cover'
        }}  className="p-10">
            <div  className='footer'>
                <div>
                    <span  className="footer-title">Products</span>
                    <a  className="link link-hover">Forums</a>
                    <a  className="link link-hover">Blogs</a>
                </div>
                <div>
                    <span  className="footer-title">Company</span>
                    <a  className="link link-hover">About us</a>
                    <a  className="link link-hover">Contact</a>
                </div>
                <div>
                    <span  className="footer-title">Legal</span>
                    <a  className="link link-hover">Terms of use</a>
                </div>
            </div>
            <div  className='my-10 text-center'>
                <p>Copyright © APON MAHMUD - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;