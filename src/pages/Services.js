import React from 'react';
import Navbar from '../components/Navbar';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import '../services.css';
import servicesImg from '../assets/images/silverio-services.jpg';
import gutterExample from '../assets/images/gutter-example.jpg';
import roofExample from '../assets/images/roof-example.jpg';
import basementExample from '../assets/images/basement-example.jpg';

import windowAndDoorOpeningsImg from '../assets/images/services-images/window&dooropenings-img.jpg';
import windowAndDoorOpeningsImg2 from '../assets/images/services-images/windowAndDoorOpeningsImg2.jpg';

import windowAndDoorPansImg from '../assets/images/services-images/windowanddoorpans-img.jpg';
import windowAndDoorPansImg2 from '../assets/images/services-images/windowanddoorpans-img2.jpg';
import windowAndDoorPansImg3 from '../assets/images/services-images/windowanddoorpans-img3.jpg';
import windowAndDoorPansImg4 from '../assets/images/services-images/newDoorPanImg1.jpg';
import windowAndDoorPansImg5 from '../assets/images/services-images/newDoorPanImg2.JPG';

import retainingWallsImg from '../assets/images/services-images/retaining-walls-img.jpg';
import retainingWallsImg2 from '../assets/images/services-images/retaining-walls-img2.jpg';
import retainingWallsImg3 from '../assets/images/services-images/retaining-walls-img3.jpg';
import retainingWallsImg4 from '../assets/images/services-images/retaining-walls-img4.jpg';

import decksImg1 from '../assets/images/services-images/decks-srvs-img1.jpg';
import decksImg2 from '../assets/images/services-images/decks-srvs-img2.jpg';
import decksImg3 from '../assets/images/services-images/decks-srvs-img3.jpg';
import decksImg4 from '../assets/images/services-images/decks-srvs-img4.jpg';
import decksImg5 from '../assets/images/services-images/decksImg5.jpg';


import mudsillImg from '../assets/images/services-images/mudsill-img.jpg';
import mudsillImg2 from '../assets/images/services-images/mudsill2.jpg';
import mudsillImg3 from '../assets/images/services-images/mudsill3.jpg';

import planterImg from '../assets/images/services-images/planters-img.jpg';

import showerPansImg1 from '../assets/images/services-images/showerpans-img.jpg';
import showerPansImg2 from '../assets/images/services-images/showerpans-img2.jpg';
import showerPansImg3 from '../assets/images/services-images/showerpans-img3.jpg';
import showerPansImg4 from '../assets/images/services-images/showerPans4.jpg';


import liquidAppliedFlashImg from '../assets/images/services-images/liquidApplied1.jpg';
import liquidAppliedFlashImg2 from '../assets/images/services-images/liquidAppliedFlash-img2.jpg';
import liquidAppliedFlashImg3 from '../assets/images/services-images/liquidAppliedFlash-img3.jpg';
import liquidAppliedFlashImg4 from '../assets/images/services-images/liquidApplied4.jpg';



import basementImage1 from '../assets/images/services-images/basementimg1.jpg';
import basementImage2 from '../assets/images/services-images/basementimg2.jpg';
import basementImage3 from '../assets/images/services-images/basementimg3.jpg';
import basementImage4 from '../assets/images/services-images/basementimg4.jpg';
import basementImage5 from '../assets/images/services-images/basementimg5.jpg';
import basementImage6 from '../assets/images/services-images/basementimg6.jpg';
import basementImage7 from '../assets/images/services-images/basementImg7.JPEG';

import fountainImg1 from '../assets/images/services-images/water-features-img9.jpg';
import fountainImg2 from '../assets/images/services-images/water-features-img3.jpg';
import fountainImg3 from '../assets/images/services-images/water-features-img1.jpg';
import fountainImg4 from '../assets/images/services-images/water-features-img5.jpg';
import fountainImg5 from '../assets/images/services-images/water-features-img7.jpg';
import fountainImg6 from '../assets/images/services-images/water-features-img8.jpg';

import architecturalCaulkingImg1 from '../assets/images/services-images/architectural-caulking-img1.jpg';
// import architecturalCaulkingImg2 from '../assets/images/services-images/architectural-caulking-img3.jpg';
import architecturalCaulkingImg3 from '../assets/images/services-images/AC2.jpg';

import waterResistantBarrierImg from '../assets/images/services-images/water-resistant-barrier-img.jpg';
import waterResistantBarrierImg3 from '../assets/images/services-images/water-resistant-barrier-img3.jpg';
import waterResistantBarrierImg4 from '../assets/images/services-images/water-resistant-barrier-img5.jpg';
import waterResistantBarrierImg6 from '../assets/images/services-images/weather-barriers-6.jpg';



import epoxyCoatingsImg from '../assets/images/services-images/epoxy-coatings-img.jpg';
import epoxyCoatingsImg2 from '../assets/images/services-images/epoxy-coatings-img2.jpg';
import epoxyCoatingsImg3 from '../assets/images/services-images/epoxy-coatings-img3.jpg';
import epoxyCoatingsImg4 from '../assets/images/services-images/epoxy4.jpg';
import epoxyCoatingsImg5 from '../assets/images/services-images/epoxy5.jpg';

import injectionsImg1 from '../assets/images/services-images/injections-img1.jpg';
import injectionsImg2 from '../assets/images/services-images/injections-img2.jpg';
import injectionsImg3 from '../assets/images/services-images/crackRepairs3.jpg'; 




function Services() {

    return (
        <div id="services" >
            <Navbar />
            <section>
                <div className="services-img">
                    <img src={servicesImg} usemap="#workmap" />

                    <map name="workmap">
                        <area shape="circle" coords="270, 163, 20" alt="retainingWalls" href="#retaining-walls-srvs" />
                        <area shape="circle" coords="272, 237, 20" alt="doorAndWindowOpenings" href="#windowanddooropening-srvs" />
                        <area shape="circle" coords="825, 109, 20" alt="doorAndWindowOpenings" href="#windowanddooropening-srvs" />
                        <area shape="circle" coords="641, 49, 20" alt="doorPans" href="#windowanddoorpans-srvs" />
                        <area shape="circle" coords="386, 375, 20" alt="doorPans" href="#windowanddoorpans-srvs" />
                        <area shape="circle" coords="520, 245, 20" alt="liquidAppliedFlashings" href="#liquidAppliedFlashings-srvs" />
                        <area shape="circle" coords="820, 175, 20" alt="deckCoatings" href="#decks-srvs" />
                        <area shape="circle" coords="509, 334, 20" alt="deckCoatings" href="#decks-srvs" />
                        <area shape="circle" coords="670, 250, 20" alt="architecturalCaulking" href="#architecturalCaulking-srvs" />
                        <area shape="circle" coords="835, 271, 20" alt="weatherResistantBarrier" href="#waterResistantBarriers-srvs" />
                        <area shape="circle" coords="610, 437, 20" alt="mudsillWaterproofing" href="#mudsill-srvs" />
                        <area shape="circle" coords="850, 463, 20" alt="epoxyFloors" href="#epoxyCoatings-srvs" />
                        <area shape="circle" coords="550, 570, 20" alt="showerPansAndWalls" href="#showerpans-srvs" />
                        <area shape="circle" coords="550, 640, 20" alt="crackRepairAndInjections" href="#crackRepairsAndInjections-srvs" />
                        <area shape="circle" coords="233, 650, 20" alt="basementWaterproofing" href="#basement-waterproofing-srvs" />
                    </map>
                </div>

                <div id="in-depth-services" className='row'>


                    <div id="services-nav" className="services-page-nav row">
                        <h1 className='col-md-12'>Browse the map above or explore an option below:</h1>
                        <h1 className="explore-hidden">Explore an option below:</h1>
                        <ul className='col-md-12'>
                            {/* Browse the map above or explore an option below: */}
                            <li><a href="#windowanddooropening-srvs">Window/Door Openings</a></li>
                            <li><a href="#windowanddoorpans-srvs">Window & Door Pans</a></li>
                            <li><a href="#basement-waterproofing-srvs">Basements</a></li>
                            <li><a href="#retaining-walls-srvs">Retaining Walls</a></li>
                            <li><a href="#decks-srvs">Decks</a></li>
                            <li><a href="#mudsill-srvs">Mudsills</a></li>
                            <li><a href="#planters-srvs">Planters</a></li>
                            <li><a href="#fountainandwaterfeatures-srvs">Fountains & Water Features</a></li>
                            <li><a href="#showerpans-srvs">Shower Pans</a></li>
                            <li><a href="#architecturalCaulking-srvs">Architectural Caulking</a></li>
                            <li><a href="#weatherResistantBarriers-srvs">Weather Resistant Barriers</a></li>
                            <li><a href="#epoxyCoatings-srvs">Epoxy Coatings</a></li>
                            <li><a href="#liquidAppliedFlashings-srvs">Liquid Applied Flashings</a></li>
                            <li><a href="#crackRepairsAndInjections-srvs">Crack Repairs & Injections</a></li>

                        </ul>
                    </div>
                    {/* ///////////////////Window and Door Openings Services */}
                    <div id="windowanddooropening-srvs">
                        <h2>Window/Door Openings</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls1" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={windowAndDoorOpeningsImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={windowAndDoorOpeningsImg2} class="d-block w-100" alt="..." />
                                        </div>


                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls1" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls1" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        In all weathers scenarios, most windows and doors can be problematic.
                                        Correct weatherproofing can minimize energy consumption and ecological stress,
                                        also contribute to the health and wellingbeing of occupants.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* //////////////////////////// Window and Door Pans Services */}
                    <div id="windowanddoorpans-srvs">
                        <h2>Window and Door Pans</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls2" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={windowAndDoorPansImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={windowAndDoorPansImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={windowAndDoorPansImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={windowAndDoorPansImg4} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={windowAndDoorPansImg5} class="d-block w-100" alt="..." />
                                        </div>


                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Door Pans are critical in preventing water intrusion. Installing pans is becoming a standard practice with window,
                                        door manufacturers, installers, the upturned legs at the interior edge, and ends of the rough opening
                                        form a three-sided pan. The intention is to collect and drain water toward the exterior, including water
                                        that may enter through the window or door unit.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* ///////////////////////////Basement Waterproofing Services */}
                    <div id="basement-waterproofing-srvs">
                        <h2>Basement Waterproofing</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls3" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={basementImage1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage4} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage5} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage6} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={basementImage7} class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Wet and damp basements lead to reduced property value, potential storage, and living
                                        spaces for homeowners. The wet conditions also cause health concerns associated with
                                        wet environments. Proper waterproofing of basements and crawl spaces are necessary
                                        to protect your home, health, and retain the value of your investment.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* ///////////////////////////Retaining Walls Services */}
                    <div id="retaining-walls-srvs">
                        <h2>Retaining Walls</h2>
                        <div className='row mt-5'>
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls4" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={retainingWallsImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={retainingWallsImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={retainingWallsImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={retainingWallsImg4} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls4" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls4" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Retaining Wall Waterproofing protects from moisture or liquid water that
                                        can remain and seep through subterranean or hillside walls. Water moisture can
                                        easily evaporate on the interior dry side of the wall and leave mildew or
                                        efflorescence, likely damaging interiors and the structure itself.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* ///////////////////////// Deck Services */}
                    <div id="decks-srvs">
                        <h2>Decks</h2>
                        <div className='row mt-5'>
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls5" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={decksImg1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={decksImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={decksImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={decksImg4} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={decksImg5} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls5" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls5" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        If you have a deck or balcony at home,  it’s an awesome way to enjoy the outdoors indoors!
                                        But, in the PNW, the weather can do a lot of damage to these exterior extensions of your
                                        living space. Something simple you can do to prevent damage to them is giving it a professional
                                        waterproof coating.  Without it, water may drip through cracks, joints, or other surfaces…
                                        eventually decaying the surrounding area. This will be extremely costly to fix. To keep your
                                        deck in the best shape, properly applied waterproofing is key.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* ////////////////////////////// Mudsill Waterproofing Services */}
                    <div id="mudsill-srvs">
                        <h2>Mudsill Waterproofing</h2>
                        <div className='row mt-5'>
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControlsMudsill" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={mudsillImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={mudsillImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={mudsillImg3} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControlsMudsill" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControlsMudsill" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Sometimes, sill plates are constructed close to the adjacent grade.
                                        Landscapers raise the grounds around with beautiful irrigated gardens,
                                        bringing the soil closer to the wood sill plate. If the wood structure
                                        comes in contact with the soil, then the bottom of the house is compromised.
                                        Not having mudsills properly waterproofed lead to structural failure.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>




                    {/* /////////////////////////////// Planters Services */}
                    <div id="planters-srvs">
                        <h2>Planters</h2>
                        <div className='row mt-5'>
                            <div className='col-md-6 services-detail-left'>
                                <Fade left>
                                    <img src={planterImg}></img>
                                </Fade>
                            </div>
                            <Fade right>
                                <div className='col-md-6 services-detail-right'>
                                    <p>
                                        Building concrete planters can spruce up any garden or yard and is a great
                                        way to house your plants. How you waterproof concrete planter boxes will
                                        maximize the service life of the planter box itself. This step is highly
                                        recommended to keep the aesthetics of the box’s exterior, but most importantly
                                        to ensure your plants remain healthy by avoiding the leaching of alkaline salts
                                        into the soil. Additionally, the porosity in the substrates may cause the soil
                                        to dry out too quickly for the well-being of your plants.

                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* ////////////////////////////// Fountains/Water Features Services */}
                    <div id="fountainandwaterfeatures-srvs">
                        <h2>Fountains and Water Features</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls6" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={fountainImg6} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={fountainImg5} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={fountainImg4} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={fountainImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={fountainImg1} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls6" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls6" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Centerpieces of plazas and architectural hardscapes, water features
                                        can enhance the aesthetics of the areas in which they are placed.
                                        However, they present waterproofing challenges that must be effectively
                                        managed to ensure that these property enhancements don't become detracting
                                        features. It is important that water features not become sources of water
                                        absorption or infiltration. These conditions can lead to attractive biological
                                        growth or deterioration of the outside (efflorescence, spalling, or bubbling of
                                        coatings), and can also lead to structural deterioration of itself.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* ////////////////////////////// Shower Pans Services */}
                    <div id="showerpans-srvs">
                        <h2>Shower Pans</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls7" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={showerPansImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={showerPansImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={showerPansImg1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={showerPansImg4} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls7" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls7" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        When building, renovating or repairing a shower in your home, waterproofing is one of the most important
                                        things that must be done correctly. Waterproofing membranes prevent moisture and water from leaking into
                                        the walls or floors. Unprotected substrates can eventually lead to thousands of dollars in repairs from
                                        having to rebuild a major and essential part of your home.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* ///////////////////////////////////// Architectural Caulking */}
                    <div id="architecturalCaulking-srvs">
                        <h2>Architectural Caulking</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls8" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={architecturalCaulkingImg1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={architecturalCaulkingImg3} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls8" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls8" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Architectural sealants prevent outside elements from entering the structure. These must be able
                                        to maintain a seal while also being movable between similar and different substrates. Architectural
                                        sealants must also be resistant to deterioration due to rain, ultraviolet light and any other elements
                                        to maintain an appealing appearance over time. However, the purpose of sealants are not to be a main
                                        waterproof barrier but to contribute-prevent and add to the aesthetics.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* ///////////////////////////////// Water Resistant Barriers  */}
                    <div id="weatherResistantBarriers-srvs">
                        <h2>Weather Resistant Barriers</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls9" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={waterResistantBarrierImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={waterResistantBarrierImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={waterResistantBarrierImg4} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={waterResistantBarrierImg6} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls9" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls9" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Weather Resistant barriers are crucial  in the protection and energy efficiency of today’s
                                        buildings. They can protect a structure’s walls from air and water infiltration and keep
                                        moisture from accumulating in the wall systems. Good quality weather resistant barriers
                                        are not only cold/hot air resistant, but also prevent moisture and vapor, ensuring that
                                        a building remains energy efficient and protected.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>


                    {/* //////////////////////////////// Epoxy Coatings */}
                    <div id="epoxyCoatings-srvs">
                        <h2>Epoxy Coatings</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls10" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={epoxyCoatingsImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={epoxyCoatingsImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={epoxyCoatingsImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={epoxyCoatingsImg4} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={epoxyCoatingsImg5} class="d-block w-100" alt="..." />
                                        </div>



                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls10" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls10" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Floors are one of the most important, yet often dismissed features of any residential space.
                                        Your floors can add an artistic element to your area, ensure your safety, and improve the
                                        productivity of your day to day life. For those reasons, opting for a flooring solution that
                                        can resist the business of your space’s daily routines is crucial. Epoxy floor surfaces give
                                        tons of benefits! They are durable, easy to maintain, distinctive and impressive!
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* /////////////////////////// Liquid Applied Flashings  */}
                    <div id="liquidAppliedFlashings-srvs">
                        <h2>Liquid Applied Flashings </h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-12 d-flex justify-content-center">
                                <div id="carouselControls11" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={liquidAppliedFlashImg} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={liquidAppliedFlashImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={liquidAppliedFlashImg3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={liquidAppliedFlashImg4} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls11" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls11" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Energy efficient, durable, and healthy homes with low utility, maintenance, and repair costs require a tight building envelope
                                        that keeps out air and moisture. Liquid applied flashings will contribute significantly towards achieving an air
                                        and moisture tight house by properly filling and sealing all the voids and cracks around windows, doors, concrete
                                        to wood transitions and other exterior penetrations.
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* //////////////////////////// Crack Repairs/Injections  */}
                    <div id="crackRepairsAndInjections-srvs">
                        <h2>Crack Repairs Cold Joint Injections/Sealing, WaterStops and Pipe Penetrations</h2>
                        <div className='row mt-5'>
                            {/* /////////////carousel */}
                            <div className="col-md-13 d-flex justify-content-center">
                                <div id="carouselControls13" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={injectionsImg1} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={injectionsImg2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={injectionsImg3} class="d-block w-100" alt="..." />
                                        </div>

                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls13" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls13" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            {/* <Fade bottom>
                                <div className='col-md-12 d-flex justify-content-center srvs-center-description'>
                                    <p>
                                        Foundation issues can detract from your enjoyment of your home and can even reduce its value over time.
                                        We can help you resolve foundation problems quickly to protect your home and your property against
                                        the negative effects of cracks and damage. By addressing these issues quickly and effectively, you
                                        can ensure the safest and healthiest environment for yourself and your family. Injecting urethane
                                        into these cracks can seal them and prevent water from intruding into your home. This can help you
                                        to avoid issues with mold, mildew and water damage that can have serious health effects for your
                                        family.
                                    </p>
                                </div>
                            </Fade> */}
                        </div>
                    </div>
                    <a href="#services-nav" className="back-to-top">
                        <i class="fa-solid fa-angle-up arrow"></i>
                        Back to top
                        <i class="fa-solid fa-angle-up arrow"></i>
                    </a>
                </div>


                {/* modal RETAINING WALLS */}
                {/* <div class="modal fade" id="retainingWallsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Retaining Walls</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src={retainingWallsImg} className="modal-img"></img>
                                <p>Retaining Wall Waterproofing or Post-Applied Waterproofing is essential to your project to prevent damaged
                                    finishes or corruption of the structure itself. We can take care of it. 
                                </p>
                                <a href="#retaining-walls-srvs">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* modal DOOR AND WINDOW OPENINGS */}
                {/* <div class="modal fade" id="doorAndWindowOpeningsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Door/Window Openings</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src={windowAndDoorOpeningsImg2} className="modal-img"></img>
                                <p>Even in mild climates, drafty windows and doors can be extremely problematic.
                                    With our skills, we can protect these gaps to avoid any future headaches. 
                                </p>
                                <a href="#windowanddooropening-srvs">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal DOOR PANS */}
                {/* <div class="modal fade" id="doorPansModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Door Pans</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src={windowAndDoorPansImg2} className="modal-img"></img>
                                <p>Sill pan flashing is critical in preventing water intrusion.</p>
                                <a href="#windowanddoorpans-srvs">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}



                {/* <div class="modal fade" id="doorPansModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="#windowanddoorpans-srvs">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal LIQUID APPLIED FLASHINGS */}
                {/* <div class="modal fade" id="liquidAppliedFlashingsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal DECK COATINGS */}
                {/* <div class="modal fade" id="deckCoatingsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal ARCHITECTURAL CAULKING MODAL */}
                {/* <div class="modal fade" id="architecturalCaulkingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal WEATHER RESISTANT BARRIER */}
                {/* <div class="modal fade" id="weatherResistantBarrierModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal MUDSILL WATERPROOFING */}
                {/* <div class="modal fade" id="mudsillWaterproofingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal EPOXY FLOORS */}
                {/* <div class="modal fade" id="epoxyFloorsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal SHOWER PANS AND WALLS */}
                {/* <div class="modal fade" id="showerPansAndWallsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal CRACK REPAIR AND INJECTIONS */}
                {/* <div class="modal fade" id="crackRepairAndInjectionsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* modal BASEMENT WATERPROOFING */}
                {/* <div class="modal fade" id="basementWaterproofingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Roof</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Lorem Ipsum</p>
                                <img src={basementExample} className="modal-img"></img>
                                <a href="/">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section >
        </div >
    )
}

export default Services; 