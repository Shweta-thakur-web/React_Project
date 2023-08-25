import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-sm-4">
                                <a href="#"><img id="footer_img" src="Images\logo_1.png" /></a>
                            </div>
                            <div class="col-sm-3">
                                <ul class="list-unstyled">
                                    <li class="h5" id="link_name">Service</li>
                                    <li><a href="#" class="a">Qualitative</a></li>
                                    <li><a href="#" class="a">Quantitative</a></li>
                                    <li><a href="#" class="a">Other Services</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-3 ">
                                <ul class="list-unstyled">
                                    <li class="h5" id="link_name">Address</li>
                                    <li style={{ color: "rgb(250, 35, 107)", fontWeight: "bold", fontSize: "small" }}>
                                        Akshya Nagar 1st Block 1st Cross,<br />
                                        Rammurthy nagar Bangalore-<br />
                                        560016</li>
                                </ul>
                            </div>
                            <div class="col-sm-2">
                                <ul class="list-unstyled">
                                    <li class="h5" id="link_name">Contact</li>
                                    <li><a href="#" class="a">+91 7900022103</a></li>
                                    <li><a href="#" class="a">+91 8652559525</a></li>
                                    <li><a href="#" class="a">thakurshwetagmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid bg-dark text-light p-2">
                        <p class="px-5 text-light">Copyright © 2021 <a href="#" class="lastFooter">Aspects Fieldwork & Research</a> |
                            Design & Developed By <a href="#" class="lastFooter">Shweta Thakur</a></p>
                    </div>
                </footer>
            </div>


        )
    }
}
export default Footer;