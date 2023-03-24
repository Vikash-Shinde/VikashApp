import React from 'react'
import Navpage from './Navpage'
import "./utility.css"

export default function Project_1() {
  return (
    <>
      {/* please check spellings  */}

      <section className='home_hero' id='Project_3'>
        <div className="position-relative overflow-hidden text-center p-3 p-md-5 my-0 bg-light about_hero_content" >
          <div className="col-md-8 p-lg-5 mx-auto my-5 " >
            <h1 className="display-4 pt-5 fw-bolder mb-5">Random Foodies</h1>
            <p className="lead fw-normal">This page contains the case study of Random Foodies website which includes the project Overview, Tool used and Live Link to the official porduct.
            </p>
            <a className="btn btn-warning fw-bolder fs-3 py-3 mt-5 text-dark live_btn shadow-lg" href="https://vikash-shinde.github.io/RandomFoodies/">LIVE LINK</a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          <hr />
        </div>
      </section>

      {/* know more on project */}

      <div className="px-4 pt-5 my-5 text-center border-bottom home_hero_content ">
        <div className="overflow-hidden" style={{ maxHeight: "70vh" }}>
          <div className="container px-5">
            <img src={require('./FoodPo.png')} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="900" height="600" loading="lazy" />
          </div>
        </div>

        <div className="col-lg-6 mx-auto text-start">
          <h1 className="display-6 fw-bold my-3">Project Overview</h1>
          <p className="lead mb-4 "> Random foodies is a web app that I created targeting the restaurant and food industry for people to use for their own restaurant business and build trust and engagement with their customers by providing them with a better User Interface on the Web.</p>

          <p className="lead mb-4 ">I visited different types of websites of the same industry and even visited platforms to get inspiration and understand how it actually works.

            I tried to smoothen the user interface by keeping it easy and simple to use.


          </p>
          <p className="lead mb-4 ">Feel free to check out the project by visiting the Live Link. </p>

        </div>
        <div className="col-lg-6 mx-auto text-start">
          <h1 className="display-6 fw-bold mt-3">Tools Used</h1>
          <div className='skills pt-3 '>
            <button type="button" className="btn btn-secondary py-2 mx-2 my-2">HTML</button>
            <button type="button" className="btn btn-secondary py-2 mx-2 my-2">CSS</button>
            <button type="button" className="btn btn-secondary py-2 mx-2 my-2">JavaScript</button>
            <button type="button" className="btn btn-secondary py-2 mx-2 my-2">React</button>
            <button type="button" className="btn btn-secondary py-2 mx-2 my-2">GIT</button>
            <button type="button" className="btn btn-secondary py-2 mx-2 my-2">Github</button>
            <button type="button" className="btn btn-secondary py-2 mx-2 my-2">Bootstrap</button>
          </div>

        </div>

        <div className="col-lg-6 mx-auto mt-5 text-start">
          <h1 className="display-6 fw-bold pt-5 mb-4 ">See Live </h1>
          <a className="btn btn-warning fw-bolder  p-3   m-3 text-dark live_btn shadow" href="https://vikash-shinde.github.io/RandomFoodies/">LIVE LINK</a>
          <a className="btn btn-outline-warning fw-bolder  p-3   m-3 text-dark live_btn shadow" href="#Projects">Go Back</a>

        </div>
      </div>

    </>
  )
}

