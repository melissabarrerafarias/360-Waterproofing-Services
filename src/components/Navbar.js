import React from 'react';
import '../navbar.css'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">DryZone</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span><i class="fa-solid fa-circle-chevron-down"></i></span> {/*CHANGE ICON LATER*/}
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                        <a class="nav-link" href="/about">About</a>
                        <a class="nav-link" href="/services">Services</a>
                        <a class="nav-link" href="/#contact-me">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar; 