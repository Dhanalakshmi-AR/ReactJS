import React from 'react';
import './TeaStall.css';

const TeaStall = () => {

    /** smooth scrolling function */
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };




    /** function return statement */
    return (
        <div className="tea-stall">




            {/* Header Section */}
            <header className="header-section">
                <div>
                    <span className="mid-title">Tea Stall</span>
                </div>
                <div className="end-title">
                    <span className="nav-link"><a onClick={() => scrollToSection('home-container')}>Home</a></span>
                    <span className="nav-link"><a onClick={() => scrollToSection('about-container')}>About</a></span>
                </div>
            </header>









            {/* Home Container Section */}
            <section id='home-container' className="home-container">
                <div>
                    <h1>Home</h1>
                </div>
                <h2>Best Tea in Town</h2>
                <h3>Embark on a Journey of Flavor and Tranquility</h3>
                <div className='home-para-div'>
                    <p>Welcome to our enchanting tea stall, where every cup tells a story and every sip is a journey into the world of flavors. Nestled in the heart of the city, our tea stall is a haven for tea enthusiasts seeking a respite from the ordinary. Immerse yourself in the rich aroma and exquisite taste of our handpicked teas, carefully curated from the finest tea gardens around the globe.</p>
                    <p>At our cozy corner, we take pride in offering a diverse selection of teas, ranging from traditional blends to exotic infusions. Whether you're a connoisseur or a casual tea lover, our friendly staff is dedicated to guiding you through our menu, helping you discover the perfect brew that suits your palate.</p>
                    <p>Step into our delightful atmosphere, where each visit is not just about tea; it's about creating moments of tranquility and connection. Our rustic ambiance, warm hospitality, and the soothing melody of boiling kettles create the perfect setting for conversations, contemplation, or simply enjoying a quiet moment alone.</p>
                    <p>Indulge in the art of tea-making with us. From the steeping of the leaves to the careful pouring of the brew, each cup is crafted with passion and precision. Join us on a journey of sensory delights, where every cup is a celebration of the diverse world of teas.</p>
                    <p>Experience the joy of tea at its finest. Welcome to our tea stall — a place where tea isn't just a beverage; it's an experience.</p>
                </div>
            </section><hr></hr>








            {/* About Container Section */}
            <section id='about-container' className="about-container">
                <h1>About Us</h1>
                <div className="image-row">
                    <div className="image-column">
                        <img src="./TeaStall-img/TeaStall-img05" alt="Tea Stall Image 1" />
                        <figcaption>Blacky-fy</figcaption>
                    </div>
                    <div className="image-column">
                        <img src="./TeaStall-img/TeaStall-img01" alt="Tea Stall Image 2" />
                        <figcaption>Capacino</figcaption>
                    </div>
                    <div className="image-column">
                        <img src="./TeaStall-img/TeaStall-img07" alt="Tea Stall Image 2" />
                        <figcaption>Greeny</figcaption>
                    </div>
                    <div className="image-column">
                        <img src="./TeaStall-img/TeaStall-img06" alt="Tea Stall Image 3" />
                        <figcaption>Cool-Coffee</figcaption>
                    </div>
                </div>
            </section>








            {/* Footer Section */}
            <footer className="footer-section">
                <p>&copy; 2023 Tea Stall. All rights reserved.</p>
            </footer>






        </div>
    );
};


export default TeaStall;