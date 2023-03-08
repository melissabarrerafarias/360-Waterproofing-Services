import React from 'react';
import '../homepage.css';
import Fade from 'react-reveal/Fade';

import homepageImg from '../assets/images/homepage-img.jpg';

function Homepage() {
    return (
        <main id="homepage-main">
            <div class="bg-img">
                <div class="container">
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
                                    <a class="nav-link" href="#contact-me">Contact</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <Fade top>
                    <div className="container2">
                        <p className="hero-title">{"WATERPROOFING &"}</p>
                        <p className="hero-title">{"CONCRETE COATINGS LLC"}</p>
                        <div className="hero-btns">
                            <button className="hero-btn hbtn1"><a href="#contact-me">Contact</a></button>
                            <button className="hero-btn hbtn2"><a href="/about">About</a></button>
                        </div>
                    </div>
                </Fade>
            </div>
            {/* main page */}
            <section id="what-i-do" className="row">
                <div className="col-md-6 worker-div">
                    <img src={homepageImg} className="worker-img"></img>
                </div>
                <div className="col-md-6">
                    <h1>What We Do</h1>
                    <div className="do-expln">
                        <p>The name says it all! Dry Zone Waterproofing & Concrete Coatings LLC specializes in just that.
                            We have more than a few tricks up our sleeve to protect your home or help you
                            spruce it up! Some examples of what we could do for you are:
                        </p>
                    </div>
                    <div className="do-examples">
                        <ul>
                            <li><span>Epoxy Coatings</span></li>
                            <li><span>Water Feature Protection</span></li>
                            <li><span>Waterproof Shower Pans</span></li>
                        </ul>
                    </div>
                    <div className="read-more">
                        <button><a href="/services">Read More</a></button>
                    </div>
                </div>
            </section>

            {/* <section id="what-people-are-saying">
                <h1>What People Are Saying</h1>
                <div className="row">
                    <div className="col-md-4">
                        <p className="quote">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam -Bob
                        </p>
                    </div>

                    <div className="col-md-4">
                        <p className="quote">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. - Samuel
                        </p>
                    </div>


                    <div className="col-md-4">
                        <p className="quote">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. - Veronica
                        </p>
                    </div>

                </div>
            </section> */}

            <section id="contact-me">
                <h1>Contact Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-area">
                            <form action="https://formsubmit.co/silverio@dzwcc.com" method="POST">
                                <p>Have a project in mind? Describe what you need and we'll get back to you.</p>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="text" name="name" placeholder="Full Name" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <input type="email" name="email" placeholder="Email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <textarea type="text" name="description" placeholder="Project Description" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                </div>

                                <input type='hidden' name="_next" value="http://dzwcc.com/confirm" /> {/* needs to be changed to actual domain */}
                                <input type="hidden" name="_captcha" value="false" />
                                <div className="submit-button">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact-info">
                            <h2>CALL, TEXT, OR EMAIL</h2>
                            <div className="call">
                                <a href="tel:360-890-1059">(360) 890-1059</a>
                            </div>
                            <div className="email">
                                <a href="mailto:silverio@dzwcc.com">silverio@dzwcc.com</a>
                            </div>
                            <div className="contact-icons">
                                <a href="tel:360-890-1059">
                                    <i class="fa-solid fa-phone"></i>
                                </a>
                                <a href="mailto:silverio@dzwcc.com">
                                    <i class="fa-solid fa-envelope-circle-check"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Homepage;