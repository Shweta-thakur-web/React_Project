import React, { Component } from "react";
import { Link } from 'react-router-dom';
class Industry extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid" id="#a_industry">
                    <div class="mx-5 mt-3 ">
                        <h2 style={{textAlign: "center", color: "blue"}}>Industry we work with</h2>
                        <div class="row mx-5 wow fadeInUp">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <img src="Images\agri.jpg" width="100%" class="img-responsive" />
                                <center><span style={{paddingLeft:"30%", paddingRight: "33%"}} class="industryTitle">Agriculture</span></center>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <img src="Images\automotive.jpg" width="100%" class="img-responsive" />
                                <center><span style={{paddingLeft:"30%",paddingRight: "32%"}} class="industryTitle">Automative</span></center>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <img src="Images\aviation.jpg" width="100%" class="img-responsive" />
                                <center><span style={{paddingLeft:"30%", paddingRight: "33%" }}class="industryTitle">Agriculture</span></center>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <img src="Images\ecom.jpg" width="100%" class="img-responsive" />
                                <center><span style={{paddingLeft:"30%", paddingRight: "32.5%" }}class="industryTitle">Ecommerce</span></center>
                            </div>
                        </div>
                        <div class="row mx-5 mt-5 wow fadeInUp ">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <img src="Images\education.jpg" width="100%" class="img-responsive" />
                                <center><span style={{paddingLeft:"33.5%", paddingRight: "34%" }}class="industryTitle">Education</span></center>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <img src="Images\electronic.jpg" width="100%" class="img-responsive" />
                                <center><span style={{paddingLeft:"34.4%",paddingRight: "34%"}} class="industryTitle">Electronic</span>
                                </center>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <img src="Images\film.jpg" width="100%" class="img-responsive" />
                                <center><span style={{paddingLeft:"43%", paddingRight: "43%" }}class="industryTitle">Flim</span></center>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <img src="Images\fmcg.jpg" width="100%" class="img-responsive" />
                                <center><span style={{padding: "5px 5px", paddingLeft:"27%", paddingRight: "28%"}}class="industryTitle">FMCG
                                    Market</span></center>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <center><Link class="btn btn-success mt-3 mb-3" aria-current="page" to="/industry2">View More</Link></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Industry;