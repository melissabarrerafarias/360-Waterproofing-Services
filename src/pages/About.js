import React from 'react';
import Fade from 'react-reveal/Fade';

import Navbar from '../components/Navbar';
import '../about.css';
function About() {
    return (
        <div id="about">
            <Navbar />
            <section id="abt-dzone">
                {/* <div className="about-hero">
                    <Fade top>
                        <div className="abt-hero-title">
                            <p>ABOUT DRY ZONE LLC</p>
                        </div>
                    </Fade>
                </div> */}

                <div id="about-paragraphs">
                    {/* <h1>Origins</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p> */}

                    {/* <h1>Experience</h1> */}
                    {/* <p>Silverio Barrera kicked off his construccion career in California, 1998 when he was just 23 years
                        old. He worked in the roofing industry for two years until he switched over to his now specialty,
                        waterproofing. He operated at a start-up company that grew into an award-winning business that
                        used the newest products and up-to-date practices. For 22 years Silverio played a vital role
                        working as an installer/technician, purchasing agent, safety supervisor, field supervisor, and
                        senior supervisor and completed various freelance jobs on his own time. Every project being unique and
                        presenting its own challenges, Silverio overcame them with innovative solutions. Now living in
                        the Olympia, Washington region and confident in his abilities to provide quality results, he
                        began his own company known as Dry Zone Waterproofing and Concrete Coatings LLC. </p> */}

                    <h1>Mission</h1>
                    <p> Dry Zone LLC promises to deliver lasting quality results with particular attention to detail.
                        Our goal is to make sure you're happy and satisfied with our services. We strive for excellence and pride
                        ourselves in our work!
                        <br className='pt-5'></br>
                        We offer 22 years of experience using the latest products and up-to-date practices. We've overcome
                        various on-the-job challenges with innovative solutions, determined to keep the smiles on our client's faces. 
                    </p>


                </div>

            </section >
        </div >

    )
}

export default About; 