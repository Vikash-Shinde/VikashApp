import React from 'react'
import Navpage from './Navpage'
import './utility.css'

export default function Footer() {
  return (
    <>

    <div className=" footer_content" id='Contact'>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-5 px-5  border-top  ">
    <div className="col-md-4 d-flex align-items-center">
    <div className=" col-md-9 p-lg-6 mx-auto ">
         <h3 className=" pb-3 fw-bolder">VIKASH SHINDE</h3>
    <p className='lead'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
    <span>Email: vikashshinde007@gmail.com</span></div>
    </div>

    <div className=" offset-md-4 p-lg-7 mx-auto">
    <h2 className="nav offset-md-4 d-flex  pb-2 justify-content-end">SOCIAL</h2>
    <ul className="nav offset list-unstyled d-flex  justify-content-end"> 
      <li className="ms-3"><a className="" href="https://github.com/Vikash-Shinde" target={'_blank'}><i class="fa-brands fa-github fa-2x"></i></a></li>
      <li className="ms-3"><a className="" href="https://www.instagram.com/codingspiritual/" target={'_blank'}><i class="fa-brands fa-square-instagram fa-2x"></i></a></li>
      <li className="ms-3"><a className="" href="https://www.linkedin.com/in/vikash-shinde-b77305204/" target={'_blank'}><i class="fa-brands fa-linkedin fa-2x"></i></a></li>
      <li className="ms-3"><a className="" href="#" target={'_blank'}><i class="fa-brands fa-twitter fa-2x"></i></a></li>
    </ul>
    </div>
  </footer>
  <div className='position-relative overflow-hidden text-center p-3 p-md-5 my-0'>
    <hr />
        &copy; Copyright 2023
        <script>document.write(new Date().getFullYear())</script>. Made by
        <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com"> vikashShinde</a>
      </div>
 
</div>

</>
  )
}
