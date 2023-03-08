import React from 'react';
import locationsPhoto from '../assets/images/locations.jpg';
import '../footer.css';

function Footer() {
    return (
        <div id="footer" className="row">
            <div className="col-md-4">
                <h1>Dry Zone</h1>
                <div className="footer-warning">
                    <p>Dry Zone Waterproofing and Concrete Coatings LLC is a certified and licensed company
                        by the city of Olympia, Washington. Our company is insured and dedicated to delivering high-quality
                        results. We offer 20+ years of experience working on-site and supervising major projects.
                        For further information, visit the Services section or contact us. <p className="footer-contact">Phone: <a href="tel:360-890-1059">(360)890-1059</a> / Email: <a href="mailto:silverio@dzwcc.com">silverio@dzwcc.com</a></p></p>

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