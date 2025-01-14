import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row text-center text-md-start">

                    {/* About Us Section */}
                    <div id="about-us-section" className="col-12 col-md-4 mb-3 mb-md-0 about-us-text" >
                        <h5 >About Us</h5>
                        <p>We provide Prices of Luxury Cars.</p>
                    </div>

                    {/* Contact Section */}
                    <div id="contact-section" className="col-12 col-md-4 mb-3 mb-md-0">
                        <h5>Contact</h5>
                        <p>Email: abhishek@gmail.com</p>
                        <p>Phone: +123-456-7890</p>
                    </div>



                    {/* Social Media Links */}
                    <div className="col-12 col-md-4">
                        <h5>Follow Us</h5>
                        <a href="#" className="text-white me-3">Facebook</a>
                        <a href="#" className="text-white me-3">Twitter</a>
                        <a href="#" className="text-white">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
