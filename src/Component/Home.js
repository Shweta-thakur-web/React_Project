import React, { Component } from "react";
import Navbar from "./Navbar";
import Orangeslide from "./Orangeslide";
import About from "./About";
import Service from "./Service";
import Industry from "./Industry";
import Footer from "./Footer";
import Coverage from "./Coverage";
import Contact from "./Conatct";


class Home extends Component {
    render() {
        return (
            <div>
                
                <Orangeslide />
                <About />
                <Service />
                <Industry />
                <Coverage />
                <Contact />
                
                
            </div>
        )
    }
}
export default Home;