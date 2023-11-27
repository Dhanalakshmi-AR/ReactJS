import React from 'react';
import { Helmet } from 'react-helmet';
import './HtmlTags.css';

function HtmlTags() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className='overall-screen'>

            {/* Header section */}
            <Helmet>
                <title>html tags task</title>
                <meta name='description' content='Your page description' />
                <link rel='stylesheet' type='text/css' href='./HtmlTags.css' />
            </Helmet>


            {/* Navigation section */}
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                    <li><button onClick={() => scrollToSection('about')}>About</button></li>
                    <li><button onClick={() => scrollToSection('services')}>Services</button></li>
                    <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
                </ul>
            </nav>




            {/* Home section with id */}
            <div>
                <section id='home'>
                    <h2>Home Section </h2>
                </section>
            </div><hr></hr>
            <a href='#lists'>Lists</a><hr></hr>


            {/* H1 to H6 heading tags */}
            <h1 className='heading'>h1 hello world</h1><hr></hr>
            <h2 className='heading'>h2 hello world</h2><hr></hr>
            <h3 className='heading'>h3 hello world</h3><hr></hr>
            <h4 className='heading'>h4 hello world</h4><hr></hr>
            <h5 className='heading'>h5 hello world</h5><hr></hr>
            <h6 className='heading'>h6 hello world</h6><hr></hr>


            {/* paragraph tag */}
            <p className='para'>this is paragraph tag.</p><hr></hr>




            {/* About section with id */}
            <div>
                <section id='about'>
                    <h2>About Section</h2>
                </section>
            </div><hr></hr>




            {/* Inline style CSS section */}
            <div>
                <p style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', color: '#333', lineHeight: 1.5, textAlign: 'center' }}>
                    Inline styles example.
                </p>
                <h1 style={{ color: '#0066cc', textAlign: 'center' }}>Another styled heading</h1>
            </div><hr></hr>







            {/* Media section with media elements */}
            <section id='media' className='media-section'>
                <h2>Media Section</h2>

                {/* Image */}
                <div>
                    <img src='./pic-02' alt='Example Image' />
                    <figcaption>This is an example image.</figcaption>
                </div>
                <hr></hr>

                {/* Audio */}
                <audio controls>
                    <source src='./example.mp3' type='audio/mp3' />
                    Your browser does not support the audio element.
                </audio><hr></hr>

                {/* Video */}
                <video width='400' height='300' controls>
                    <source src='./example.mp4' type='video/mp4' />
                    Your browser does not support the video element.
                </video><hr></hr>

                {/* Include an image with WebP and fallback formats */}
                <div className='centered-image-container'>
                    <picture>
                        <source srcSet='./pic-01.webp' type='image/webp' />
                        <img src='./pic-02' alt='Example Image' />
                    </picture>
                </div>
            </section><hr></hr>







            {/* Services section with id */}
            <div>
                <section id='services'>
                    <h2>Services Section</h2>
                </section>
            </div><hr></hr>







            {/* Lists section with unordered list, ordered list, and description list */}
            {/* <div className='list-container'>
                <section>
                    <h2>Lists Section</h2>

                    Unordered List
                    <h3>Unordered List:</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>

                    Ordered List
                    <h3>Ordered List:</h3>
                    <ol>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ol>

                    Description List
                    <h3>Description List:</h3>
                    <dl>
                        <dt>Term 1:</dt>
                        <dd>Details for Term 1</dd>

                        <dt>Term 2:</dt>
                        <dd>Details for Term 2</dd>

                        <dt>Term 3:</dt>
                        <dd>Details for Term 3</dd>
                    </dl>
                </section>
            </div><hr></hr> */}





            {/* Lists section with row and column layout */}
            <section id='lists' className='lists-section'>
                <h2>Lists Section</h2>

                <div className='row'>
                    <div className='column'>
                        {/* Unordered List */}
                        <h3>Unordered List:</h3>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>

                    <div className='column'>
                        {/* Ordered List */}
                        <h3>Ordered List:</h3>
                        <ol>
                            <li>First item</li>
                            <li>Second item</li>
                            <li>Third item</li>
                        </ol>
                    </div>

                    <div className='column'>
                        {/* Description List */}
                        <h3>Description List:</h3>
                        <dl>
                            <dt>Term 1:</dt>
                            <dd>Details for Term 1</dd>

                            <dt>Term 2:</dt>
                            <dd>Details for Term 2</dd>

                            <dt>Term 3:</dt>
                            <dd>Details for Term 3</dd>
                        </dl>
                    </div>
                </div>
            </section><hr></hr>





            {/* Table with sample color code data */}
            <div>
                <section>
                    <h3>Color Code Table:</h3>
                    <table className='color-code-table'>
                        <thead>
                            <tr>
                                <th>Color</th>
                                <th>Code</th>
                                <th>Count</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ backgroundColor: '#ff0000' }}></td>
                                <td>#ff0000</td>
                                <td>25</td>
                                <td>4.5</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: '#00ff00' }}></td>
                                <td>#00ff00</td>
                                <td>35</td>
                                <td>3.5</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: '#0000ff' }}></td>
                                <td>#0000ff</td>
                                <td>45</td>
                                <td>4.5</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: '#ffff00' }}></td>
                                <td>#ffff00</td>
                                <td>55</td>
                                <td>3.5</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div><hr></hr>





            {/* Forms section with form elements */}
            <section id='forms' className='forms-section'>
                <h2>Forms Section</h2>

                {/* Basic Form */}
                <form>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' name='username' placeholder='Enter your username' />

                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' name='password' placeholder='Enter your password' />

                    <button type='submit'>Submit</button>
                </form>

                {/* Textarea */}
                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message' rows='4' placeholder='Enter your message'></textarea>

                {/* Select Dropdown */}
                <label htmlFor='cars'>Choose a car:</label>
                <select id='cars' name='cars'>
                    <option value='volvo'>Volvo</option>
                    <option value='saab'>Saab</option>
                    <option value='mercedes'>Mercedes</option>
                    <option value='audi'>Audi</option>
                </select>

                {/* Datalist */}
                <label htmlFor='browser'>Choose a browser:</label>
                <input list='browsers' id='browser' name='browser' />
                <datalist id='browsers'>
                    <option value='Chrome' />
                    <option value='Firefox' />
                    <option value='Safari' />
                    <option value='Edge' />
                    <option value='Opera' />
                </datalist>

                {/* Fieldset and Legend */}
                <fieldset>
                    <legend>Personal Information</legend>
                    <label htmlFor='fname'>First Name:</label>
                    <input type='text' id='fname' name='fname' />

                    <label htmlFor='lname'>Last Name:</label>
                    <input type='text' id='lname' name='lname' />
                </fieldset>

                {/* Output */}
                <form onInput={() => console.log('Form input')}>
                    <label htmlFor='quantity'>Quantity:</label>
                    <input type='range' id='quantity' name='quantity' min='0' max='100' />
                    <output htmlFor='quantity' name='result'>50</output>
                </form>
            </section><hr></hr>







            {/* Contact section with id and time element */}
            <div>
                <div>
                    <section id='contact'>
                        <h2>Contact Section</h2>
                    </section>
                </div><hr></hr>
                <div>
                    <p>Data value: <data value='98765'>98,765</data></p>
                    <p>Variable: <var>w</var> = 20</p>
                    <p>Press <kbd>Enter</kbd> to submit</p>
                    <p>Press <kbd>Esc</kbd> to cancel</p>
                    <p>Last updated on <time dateTime='2023-11-22T15:30:00'>November 22, 2023 at 3:30 PM</time></p>
                    {/* Add content for the Contact section */}
                </div>
            </div>
            {/* <hr></hr> */}




            {/* Footer section */}
            <div>
                <footer className='footer'>
                    <p>&copy; 2023 Your Website Name. All Rights Reserved.</p>
                </footer>
            </div>
            



        </div>
    )
}

export default HtmlTags