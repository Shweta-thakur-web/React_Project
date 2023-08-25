import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-light position-sticky top-0" style={{zIndex: '+1'}}>
                <div class="container d-inline-flex">
                    <div class="row">
                        <div class="col-md-4">
                            <a href="index.htm">
                                <img src="Images\logo_1.png" style={{width:'80%'}} />
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="col-md-8 my-4">
                            <div class="collapse navbar-collapse" style={{paddingLeft: '100px'}} id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link class="nav-link navMenu" aria-current="page" to="">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link navMenu" to="/about">About Us</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle navMenu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link class="dropdown-item" to="/qualitative">Qualitative</Link></li>
                                            <li><Link class="dropdown-item" to="quantitative">Quantitative</Link></li>
                                            <li><Link class="dropdown-item" to="/otherservices">Other Services</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link navMenu" aria-current="page" to="/industry2">Industry</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link navMenu" aria-current="page" to="/coverage">Coverage</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link navMenu" aria-current="page" to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                                <Link to="/joinpanel"><button class="btn bg-success" type="button" style={{height: '30px', color: 'white'}}>Join our panel</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}
export default Navbar;