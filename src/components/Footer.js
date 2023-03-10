import React from 'react';
import locationsPhoto from '../assets/images/map.png';
import '../footer.css';

function Footer() {
    return (
        <div id="footer" className="row">
            <div className="col-md-4">
                <h1>360 Waterproofing Services</h1>
                <div className="footer-warning">
                    <p> 360 Waterproofing Services LLC is a certified and licensed company
                        by the state of California. Our company is insured and dedicated to delivering high-quality
                        results. We offer 20+ years of experience working on-site and supervising major projects.
                        For further information, visit the Services section or contact us. <p className="footer-contact">Phone: <a href="tel:408-648-3779">(408) 648-3779</a> / Email: <a href="mailto:360waterproofingservices@gmail.com">360waterproofingservices@gmail.com</a></p></p>

                </div>
            </div>
            <div className="col-md-4">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/#contact-me">Contact</a></li>
                </ul>
            </div>
            <div className="col-md-4 locations">
                <img src={locationsPhoto}></img>
            </div>
        </div>
    )
}

export default Footer; 