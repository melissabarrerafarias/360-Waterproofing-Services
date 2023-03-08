import React from 'react';
import Navbar from '../components/Navbar';
import '../confirm.css';
function Confirm() {
    return (
        <main id="confirm-page">
            <Navbar />
            <p className='confirmation-text'>Thank you for submitting your request! We'll get back to you soon!</p>
            <div id="confirm">
                <a href="/">Return to Home</a>
            </div>
        </main>
    )
};

export default Confirm;