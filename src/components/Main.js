import React from 'react'
import { Link } from 'react-router-dom'
import './utility.css'
import Project_1 from './Project_1';
import Project_2 from './Project_2';
import Project_3 from './Project_3';
import Project_4 from './Project_4';
import Navpage from './Navpage';
import Footer from './Footer';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


export default function Main() {
    return (
        <>

<Router>
<Navpage />
                <Routes>
                    <Route exact path="/project01" element={<Project_1 />} />
                    <Route exact path="/project02" element={<Project_2 />} />
                    <Route exact path="/project03" element={<Project_3 />} />
                    <Route exact path="/project04" element={<Project_4 />} />

                </Routes>
                
            
           
            <section className='home_hero' id='Home'>
                <div className="position-relative overflow-hidden text-center p-3 p-md-5 my-0  home_hero_content" >
                    <div className="col-md-8 p-lg-5 mx-auto my-5 " >
                        <h1 className="display-4 pt-5 fw-bolder mt-5">HEY, I'M VIKASH SHINDE</h1>
                        <p className="lead fw-normal">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                        <a className="btn btn-outline-warning px-5 py-3 mb-5 text-dark fw-bold" href="#Projects">Projects</a>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                    <hr />
                </div>

            </section>

            {/* about me.. */}
            <section className='about_hero' id='About'>
                <div className="position-relative overflow-hidden text-center p-3 p-md-5 my-0 bg-light about_hero_content" >
                    <div className="col-md-8 p-lg-5 mx-auto my-5 " >
                        <h1 className="display-4 pt-5 mb-5 fw-bolder">About Me</h1>
                        <p className="lead fw-bold lead">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>

                    <div className="row">
                        <div className="col get_know text-start"  >
                            <h2 className='pb-3 fw-bold ' >Get to know me!</h2>
                            <p className='  fs-5' >
                                I'm a <strong>Frontend Web Developer</strong> building the
                                Front-end of Websites and Web Applications that leads to the
                                success of the overall product. Check out some of my work in the
                                <strong> Projects</strong> section.
                            </p>
                            <p className='fs-5'>
                                I also like sharing content related to the stuff that I have
                                learned over the years in <strong>Web Development</strong> so it
                                can help other people of the Dev Community. Feel free to Connect
                                or Follow me on my
                                <a rel="noreferrer" href="https://www.linkedin.com/in/vikash-shinde-b77305204/" target="_blank">Linkedin</a>
                                where I post useful content related to Web Development and
                                Programming.
                            </p>
                            <p className='fs-5'>
                                I'm open to <strong>Job</strong> opportunities where I can
                                contribute, learn and grow. If you have a good opportunity that
                                matches my skills and experience then don't hesitate to
                                <strong> contact</strong> me.
                            </p>
                        </div>
                        <div className="col px-5 mx-5">
                            <h2 className='pb-3 fw-bold ' >My Skils</h2>
                            <div className='skills pt-5'>
                                <button type="button" className="btn btn-secondary py-2 mx-2 my-2">HTML</button>
                                <button type="button" className="btn btn-secondary py-2 mx-2 my-2">CSS</button>
                                <button type="button" className="btn btn-secondary py-2 mx-2 my-2">JavaScript</button>
                                <button type="button" className="btn btn-secondary py-2 mx-2 my-2">React</button>
                                <button type="button" className="btn btn-secondary py-2 mx-2 my-2">GIT</button>
                                <button type="button" className="btn btn-secondary py-2 mx-2 my-2">Github</button>
                                <button type="button" className="btn btn-secondary py-2 mx-2 my-2">Bootstrap</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* projects sections */}
            <section className='about_hero' id='Projects'>
                <div className="position-relative overflow-hidden text-center p-3 p-md-5 my-0 bg-light about_hero_content" >
                    <div className="col-md-8 p-lg-5 mx-auto my-5 " >
                        <h1 className="display-4 pt-5 mb-5 fw-bolder">Projects.</h1>
                        <p className="lead fw-bold lead">Here you will find some of the personal and clients projects that I created with each project containing its own case study.</p>
                    </div>

                    {/* screenshots of porjects*/}
                    <div className="container col-xxl-8 px-4 py-3" >
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-lg-6 text-start">
                                <h1 className="display-5 fw-bold lh-1 mb-3">NEW2U</h1>
                                <p className="lead">NEWS2u is a single page multi categories webpage, I created this web page from scratch mostly based on programming skills. </p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-warning btn-lg px-4 mx-5 me-md-2"><Link to="/project01" target={'_blank'} className='text-decoration-none text-dark fw-semibold'> Case Study </Link></button>

                                </div>
                            </div>
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src={require('./NewsPo.png')} className="d-block mx-lg-auto rounded img-fluid" alt="Bootstrap Themes" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="container col-xxl-8 px-4 py-3">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                            <div className="col-lg-6 text-start">
                                <h1 className="display-5 fw-bold lh-1 mb-3">TEXTUS.com</h1>
                                <p className="lead">TEXTUS is a simple text modification app, created using basic frontend skills. </p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-warning btn-lg px-4 mx-5 me-md-2"><Link to="/project02" target={'_blank'} className='text-decoration-none text-dark fw-semibold'> Case Study </Link></button>

                                </div>
                            </div>
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src={require('./TextusPo.png')} className="d-block mx-lg-auto rounded img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="container col-xxl-8 px-4 py-3">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                            <div className="col-lg-6 text-start">
                                <h1 className="display-5 fw-bold lh-1 mb-3">WeatherSearch.com</h1>
                                <p className="lead">I create weather search app, which works on dynamic Api search of city’s, gets data using weather API.
                                </p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-warning btn-lg px-4 mx-5 me-md-2"><Link to="/project03" target={'_blank'} className='text-decoration-none text-dark fw-semibold'> Case Study </Link></button>

                                </div>
                            </div>
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src={require('./WeatherPo.png')} className=" rounded d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="container col-xxl-8 px-4 py-3">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                            <div className="col-lg-6 text-start">
                                <h1 className="display-5 fw-bold lh-1 mb-3">Random Foodies</h1>
                                <p className="lead">Random Foodies is a webapp that I created targeting the restaurant and food industry which anyone can use to present their business online.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-warning btn-lg px-4 mx-5 me-md-2"> <Link to="/project04" target={'_blank'} className='text-decoration-none text-dark fw-semibold'> Case Study </Link></button>
                                </div>
                            </div>
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src={require('./FoodPo.png')} className="d-block rounded  mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* footers */}
        
            
            </Router>
        </>
    )
}
