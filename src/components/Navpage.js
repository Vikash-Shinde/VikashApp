import React from 'react'
import Main from './Main'

export default function Navpage() {
    return (
        <>

<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand name fs-1 fw-bolder px-4" href="#">
    <img src={require('./vlogos.png')} alt="Bootstrap" width="50" height="50" className='me-4'/>
        Vikash shinde</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
    <ul className="nav ">
                        <li className="nav-item mx-3">
                            <a className=" nav-link btn btn-outline-warning text-dark fw-bold" aria-current="page" href="#Home">HOME</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link btn btn-outline-warning text-dark fw-bold" href="#About">ABOUT</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link btn btn-outline-warning text-dark fw-bold" href="#Projects">PROJECTS</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link btn btn-outline-warning text-dark fw-bold" href="#Contact">CONTACTS</a>
                        </li>
                    </ul>
  </div>
  </div>
</nav>


        </>
    )
}
